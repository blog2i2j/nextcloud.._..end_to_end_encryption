/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/* eslint-disable jsdoc/require-jsdoc */

import logger from './logger.ts'
import type { PrivateKeyInfo } from '../models.ts'
import { decryptWithAES, encryptWithAES, exportRSAKey, loadRSAPrivateKey } from './crypto.ts'
import { base64ToBuffer, bufferToBase64, bufferToString, stringToBuffer } from './utils.ts'

const PEM_HEADER = '-----BEGIN PRIVATE KEY-----'
const PEM_FOOTER = '-----END PRIVATE KEY-----'

export async function encryptPrivateKey(privateKey: CryptoKey, mnemonic: string): Promise<PrivateKeyInfo> {
	const salt = self.crypto.getRandomValues(new Uint8Array(40))

	logger.debug('Encrypting private key', { mnemonic, salt })

	const encryptedPrivateKeyInfo = await encryptWithAES(
		stringToBuffer(bufferToBase64(await exportRSAKey(privateKey))),
		await mnemonicToPrivateKey(mnemonic, salt),
	)

	logger.debug('Private key encrypted', { encryptedPrivateKeyInfo })

	return {
		encryptedPrivateKey: encryptedPrivateKeyInfo.encryptedContent,
		iv: encryptedPrivateKeyInfo.iv,
		salt,
	}
}

export async function decryptPrivateKey(privateKeyInfo: PrivateKeyInfo, mnemonic: string): Promise<CryptoKey> {
	logger.debug('Decrypting private key', { privateKeyInfo, mnemonic })

	const mnemonicPrivateKey = await mnemonicToPrivateKey(mnemonic, privateKeyInfo.salt)

	const rawPrivateKey = await decryptWithAES(
		privateKeyInfo.encryptedPrivateKey,
		mnemonicPrivateKey,
		{ iv: privateKeyInfo.iv, tagLength: 128 },
	)

	return loadPemKey(atob(bufferToString(new Uint8Array(rawPrivateKey))))
}

async function mnemonicToPrivateKey(mnemonic: string, salt: ArrayBuffer): Promise<CryptoKey> {
	const keyMaterial = await crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(mnemonic.replaceAll(' ', '')),
		{ name: 'PBKDF2' },
		false,
		['deriveKey'],
	)

	return await crypto.subtle.deriveKey(
		{
			name: 'PBKDF2',
			salt,
			hash: 'SHA-1', // TODO: Futur - 'SHA-256'
			iterations: 1024, // TODO: Futur - 600000
		},
		keyMaterial,
		{ name: 'AES-GCM', length: 256 },
		true,
		['decrypt', 'encrypt'],
	)
}

async function loadPemKey(pem: string): Promise<CryptoKey> {
	logger.debug('Loading PEM key', { pem })

	const pemContents = pem
		.substring(
			PEM_HEADER.length,
			pem.length - PEM_FOOTER.length - 1,
		)
		.replace(/\n/g, '')

	return loadRSAPrivateKey(base64ToBuffer(pemContents))
}
