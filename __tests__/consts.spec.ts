/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { Metadata, MetadataInfo, PrivateKeyInfo } from '../src/models'
import { base64ToBuffer } from '../src/services/utils'

export const mnemonic = 'farm toilet escape army regular funny board consider same leaf fiction spray'

export const privateKeyInfo: PrivateKeyInfo = {
	encryptedPrivateKey: base64ToBuffer('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'),
	iv: base64ToBuffer('ZbBpIfMafxwNc9j8'),
	salt: base64ToBuffer('vkO93HhyRAj7D/t37u5b+iLDqShwMRMTAcsR8g0TVqriVUiqslGHtw=='),
}

export const metadata: Metadata = {
	metadata: {
		authenticationTag: "9lHh8Du2Mg/OcSxFtI132Q==",
		ciphertext: "SoLCWKckjiBWIOXXSnLW41LK6qtIVo3aZv6ozko5k0tkzq0IGKC1IB5Gm0hvibq/2UVRB+RjP1IQwg1SlHHnpRoOSih7pMUl9VbH6nAvoyNJz4N3uoS19NRCuD7obWlsULN2tdA8mvuhAPdSssFpJFNk4rjEigYNPTsDIxtrBZ/cFFS3oRQxlgoR9Eta52/cgghufxW9ytX7pGetuWL8+AbtqlKnrA6K5IhkROcK2drm6Snu6a1QdQ/SOO4wWUlWvmHBrUEaYouNPg11X9xBx+MQIQzU2IgrmVBvYIpXrhbWeYepkbRLYeYvXSXklsg4sdK9j0XPU682q1DbhJEYTosj82a5VVZJ5v1agRK3tudxb2enbQtfBQlfagIe9SJA9n/sAjK2n7eIanjNs0yo1MhslYp55zMH4J1kztGuhnHGOJ1ZIr/i36XrESGfoiGruLyhL4kC9lHh8Du2Mg/OcSxFtI132Q==|KTVo3l7fG4jgdi7R4hINcg==",
		nonce: "KTVo3l7fG4jgdi7R4hINcg=="
	},
	users: [
		{
			certificate: "-----BEGIN CERTIFICATE-----\nMIIDkjCCAnqgAwIBAgIBADANBgkqhkiG9w0BAQsFADBiMQswCQYDVQQGEwJERTEb\nMBkGA1UECAwSQmFkZW4tV3VlcnR0ZW1iZXJnMRIwEAYDVQQHDAlTdHV0dGdhcnQx\nEjAQBgNVBAoMCU5leHRjbG91ZDEOMAwGA1UEAwwFYWxpY2UwHhcNMjUwMTA2MTU0\nMDUzWhcNNDUwMTAxMTU0MDUzWjBiMQswCQYDVQQGEwJERTEbMBkGA1UECAwSQmFk\nZW4tV3VlcnR0ZW1iZXJnMRIwEAYDVQQHDAlTdHV0dGdhcnQxEjAQBgNVBAoMCU5l\neHRjbG91ZDEOMAwGA1UEAwwFYWxpY2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\nggEKAoIBAQCJAHLMv5Re7YNU1icw9cG2jyDK69UUo+mCuMpfWCmJBug/FgiD3Vt5\nYq9OlyWVfRe4Sbn2ieQCcLzr/mOuDs9aUUc7CyTEbbrBw/e44WDOxuU0or68Voj3\n0nCS4Nn3l6UM6OgMkA4UFFCtbHhltal7Avr6Pk8vymPr9R9pj+dPUaMjhRHhcfyk\nlwSOKq4bNhyQdBTYmXMximZD6bLoqRRl9rkNJcrm0QtvbohWGRCehtGb+lJ4nPqs\nIHEl/2NSuEq1FQ/XK/6+CSoaXoSKAbvkGBGLe9Zs2M5Fbcav/d6/mjDB792IvQXP\nm9QW7vS0Gdx6x3/ZRtVBIJ43cbs5tOOJAgMBAAGjUzBRMB0GA1UdDgQWBBR9hVB2\nzDl+r5jd5o/8KkSAXCv75jAfBgNVHSMEGDAWgBR9hVB2zDl+r5jd5o/8KkSAXCv7\n5jAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQCiYEY1UY/jWHu+\naDeioZIlbcrkd9l17ABUoxCrksDh38Z0IGBjS5OWA7j7WhJifetmip3qX7ZXXihg\nuaDarP1UhUtEy/cZxRS6wFLe46GXkaN1t/1gkIdYEJHgEggFCWFrRYqrLqp8p8bh\nCyYAAlz5HB10W3rBlbtJF24bBSlcH2wudjGqlHpiV+uXRo5Cgal404LQzq8bxse5\nz1NvuMOyobYlFU20gyn8hAkij86ppy7X52IoMI64PzVe2JVhBbLDu2K5RGP9NGoD\n+ariLvVl2T/zIRcM4I/WszJWzsMPHrGuUYlv+nhWu6PG/APv493eBDQJKvcPhzo+\nUTzPQFOA\n-----END CERTIFICATE-----\n",
			encryptedMetadataKey: "NJEJqsjUI4RLy5IRVuh2oGspCcSxP93x60VcpNQM4h3yEk6krWb9E8e8070UQzOmDAl0NpK6WtUxyL47ZNwbnrHzrHwOYP0WvBTRrtOq5WpLr8tPU4Fg++5DNaA4qzG1fqKIDHaahiBJ90TvD3+whQ+TBfyToIPuz1fyWpVB5OWMWbL+TpVMm18wmyidbvC7nF0NPt0qiZE1XY8TgFBot/8XIZnV2B5fyLpwsOd+DOR3j+rrh5IRgFfwqm0981zMVM0grLE/559pkRLV7NaEKLtS5l2Oj+S0EmhqskjCamw/KSwxI0sqw6R4927J2aICeBhOHAvQyutc3Wi6/pW71w==",
			userId: "alice"
		},
		{
			certificate: "-----BEGIN CERTIFICATE-----\nMIIDkjCCAnqgAwIBAgIBADANBgkqhkiG9w0BAQsFADBiMQswCQYDVQQGEwJERTEb\nMBkGA1UECAwSQmFkZW4tV3VlcnR0ZW1iZXJnMRIwEAYDVQQHDAlTdHV0dGdhcnQx\nEjAQBgNVBAoMCU5leHRjbG91ZDEOMAwGA1UEAwwFYWRtaW4wHhcNMjQxMjA5MTQw\nNTI2WhcNNDQxMjA0MTQwNTI2WjBiMQswCQYDVQQGEwJERTEbMBkGA1UECAwSQmFk\nZW4tV3VlcnR0ZW1iZXJnMRIwEAYDVQQHDAlTdHV0dGdhcnQxEjAQBgNVBAoMCU5l\neHRjbG91ZDEOMAwGA1UEAwwFYWRtaW4wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\nggEKAoIBAQCR5e87QtuM8uyh2W+PVPVklS/7xnpYH6QmkwKgK8lNHkrsGFRdaHP0\nx98FbjlVHM/wandZlqKlyspANX57tGUFoR+Ya3ymYkvyrKeFv34WsbBL/3QDS6nT\nNrl40hgsuhAJVl99JfFmJPrHwb9iU8yM89ktWsAa+xhDH9n37vmADJiBjOR7IW1b\nF0xjpwp2+9SDMkWCK5A2WMPIY45waZLJw9PsaiKikhV+n1q00PTnULKSkDuUrENy\nYdqY4MnHs/k70QkTdynyDLS2LUdmMyHEHyyMktiwaRileqrsGsQf2pErD5pKhvcf\nuIhN1g7sNDyOtPtyB1ioX5DGTg6LuhrJAgMBAAGjUzBRMB0GA1UdDgQWBBQgTmjF\nLB/B3VZ6sYYZTXFKGL245TAfBgNVHSMEGDAWgBQgTmjFLB/B3VZ6sYYZTXFKGL24\n5TAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQABg8Sz2rlkG6/x\nc6GxwWr64EaqrAPfPpi6yUg1HfscokrgGjMuj/g0N6OBXNodkAxQAxOYdaI8LuAe\niqjuiJh0tn1u0yxF0cxUqk3EUZsPmF8YRN4cG55z0hTnXJ/9YxCrYQl/LRUmvP8q\nufnJX+CtRLs5oDVpmCJrEc8hA1rEDaeGYZDy+sfOqk3YjpVKR/ETI+AdQ9ubxFhj\nvUzF4gZNbCyLk1ul0QzwNW1aKV920BVMhYnMaYM9Xaume4pn6wuZoD0k7py+tKCe\nXaemHYSvFS1lY4Q8Ih2cacIan6FgxI/jkanCEOxdUcwtSOTocrn6DL2wmkcLm0Ao\nYovd2rO6\n-----END CERTIFICATE-----\n",
			encryptedMetadataKey: "A+qMBRv2vA936HNUFQLxK5AYA6m8ZsTWU4XrjRg4x47tqjPnRhTV58oqyHDim7ife5CT1XN8jlQEfWUNRxX4ekWxV70f2vaNbzoLMv3LSa0kyww/fagfiOh/6mDHxtp1E1IHgcO1dyb+nOPBbOgPJtkRAYSQw+aaKmld+lNIrCL9xZAZS6nIZLesLdcmRQDZ/BD84mGFY+dCk3zKKsIenKPMBoGmPrBZILLv1UEi2preXm11lvFqcjnG17T2y3wqqqrldDg9iaAUZEOFrIODZsbNjOVTPtD11A5ArbnVPxiv0zOZLDeuGseZjUykLwpTY642PDXOPe95ohBii+qBYQ==",
			userId: "admin"
		}
	],
	version: "2.0"
	}


export const subfolderMetadata: Metadata = {
	metadata: {
		authenticationTag: "5q86PhjjuWscvKj4figExw==",
		ciphertext: "EbQAm5B562Y1HM2kifucksL2OXN/T7IQc/pvYltGyRVZFCLqygNr1y9wpZSl0hhdIfOML/46drof4+tk0SDr6WvBtx2SAvE19sWHtO4NFhfD80e2jszAiWlR2975yeFA4xYJYmY59iL6I54xjzQmCbClk4ciOQzENnEgwWOp/ICWMgs7G8yTs6Itjtvdjx+sJXls8yIb4lJ49Xrlg/nzG3zT2ed9e2/yL4QICCpvh83miznTUKTWI1Ev/q0qy1wZT9QwIOthKn8PMBqNQMhO2SP8Y9DyrEoQKFQxgPH0MDsefcNT2fjjbP4ZjpFkjkUKj4rIu2/HkaxJbU1h5yT5sw/WvzWLUNreP6fQ6OhuBIjGCI5GnygU6/DoQhl+MRFW+tNB0SczyhWR5IQOcPZCPwW87XPXtX+tN5nNA3lJfE5hVouPh7Q1EluYIJZhuv55Z1YdWiRyY5wviFsFajGogumY7RhJR3p04GVgflcGEn5jHQ9pLuo3J+e9wh5DxTNuwhd+45yXQDkLASSUdOTMTuWkXK2k3su6nn5D3jw1QJjkRl19IFQLn7iNhHhmROavOj4Y47lrHLyo+H4oBMc=|Neov3q1Ar5jHp/0cfPwxcA==",
		nonce: "Neov3q1Ar5jHp/0cfPwxcA=="
	},
	version: "2.0"
}

export const metadataInfo = {
	counter: 5,
	files: {
		ad3b12554e0d4364854ae3e21b170152: {
			authenticationTag: 'nJHAcpZwSS1BCIkGbmtbNg==',
			filename: 'test.txt',
			key: 'Hj+q7e53ZeQdHKPyF7FKeg==',
			mimetype: 'text/plain',
			nonce: 'sqqtY0eRjhuwf+qTv5Kg2g==',
		},
	},
	folders: { fa666d819a6c4315abba421172f0a0b1: 'Test' },
	keyChecksums: [
		'9a60be9846978884033fcdfb978fbdd428221b20583bca6bfcb425f1b540152a',
		"19f63c2ace5a9e2253e5e9ca4bfc0c7f510b544724688ff6ad728a93c9e9eb57",
	],
}

export const subfolderMetadataInfo: MetadataInfo = {
	counter: 5,
	files: {
		"5244e6768c70400c964d91056c750670": {
			authenticationTag: "swfNcKdIcM6y1AYj3LgOpg==",
			filename: "07-09-2018 11.40.15.jpg",
			key: "aeDBvHvfTyWTU0u0OrbzkQ==",
			mimetype: "image/jpeg",
			nonce: "r5Nfe0Mm1BKfo1Vf/Hva2w==",
		},
		"638e4fa2de864c57b29c314f97893809":  {
			authenticationTag: "g2r6iLASJ67/KUzoKju9JQ==",
			filename: "subtest.txt",
			key: "lcyO0qqwkEXuycW77rV/oA==",
			mimetype: "text/plain",
			nonce: "5ZeFEHxcmccd5muVjB48fQ==",
		},
		"c2b37010a2b74f7484bede9d7ed177b2":  {
			authenticationTag: "69rSQH2U6wHcZwg9sNa1CA==",
			filename: "test.txt",
			key: "qPDus8B+41GJ3/spuvH22g==",
			mimetype: "text/plain",
			nonce: "frsXpvPw0H/BTock9aZlXQ==",
		},
	},
	folders: {},
}

export const encryptedFileContent = 'O13d2Y5O7qYDTerGfZyRwHKWcEktQQiJBm5rWzY='

export const propFindResponse = `<?xml version="1.0"?>
<d:multistatus xmlns:d="DAV:" xmlns:s="http://sabredav.org/ns" xmlns:oc="http://owncloud.org/ns"
	xmlns:nc="http://nextcloud.org/ns">
	<d:response>
		<d:href>/remote.php/dav/files/admin/New%20folder/</d:href>
		<d:propstat>
			<d:prop>
				<d:getetag>&quot;675b116c6ef35&quot;</d:getetag>
				<d:getlastmodified>Thu, 12 Dec 2024 16:38:04 GMT</d:getlastmodified>
				<d:creationdate>1970-01-01T00:00:00+00:00</d:creationdate>
				<d:displayname>New folder</d:displayname>
				<d:quota-available-bytes>-3</d:quota-available-bytes>
				<d:resourcetype>
					<d:collection />
				</d:resourcetype>
				<nc:has-preview>false</nc:has-preview>
				<nc:is-encrypted>1</nc:is-encrypted>
				<nc:mount-type></nc:mount-type>
				<oc:comments-unread>0</oc:comments-unread>
				<oc:favorite>0</oc:favorite>
				<oc:fileid>89</oc:fileid>
				<oc:owner-display-name>admin</oc:owner-display-name>
				<oc:owner-id>admin</oc:owner-id>
				<oc:permissions>RGDNVCK</oc:permissions>
				<oc:size>29</oc:size>
				<nc:hidden>false</nc:hidden>
				<nc:is-mount-root>false</nc:is-mount-root>
				<nc:reminder-due-date></nc:reminder-due-date>
				<nc:sharees />
				<nc:share-attributes>[]</nc:share-attributes>
				<oc:share-types />
				<x1:share-permissions xmlns:x1="http://open-collaboration-services.org/ns">31</x1:share-permissions>
				<nc:system-tags />
				<nc:rich-workspace></nc:rich-workspace>
				<nc:rich-workspace-file></nc:rich-workspace-file>
			</d:prop>
			<d:status>HTTP/1.1 200 OK</d:status>
		</d:propstat>
		<d:propstat>
			<d:prop>
				<d:getcontentlength />
				<d:getcontenttype />
				<nc:metadata-blurhash />
				<nc:metadata-files-live-photo />
				<nc:note />
			</d:prop>
			<d:status>HTTP/1.1 404 Not Found</d:status>
		</d:propstat>
	</d:response>
	<d:response>
		<d:href>/remote.php/dav/files/admin/New%20folder/ad3b12554e0d4364854ae3e21b170152</d:href>
		<d:propstat>
			<d:prop>
				<d:getcontentlength>29</d:getcontentlength>
				<d:getcontenttype>application/octet-stream</d:getcontenttype>
				<d:getetag>&quot;f8797cf9677cd6d24d405c97784710dc&quot;</d:getetag>
				<d:getlastmodified>Thu, 12 Dec 2024 15:36:40 GMT</d:getlastmodified>
				<d:creationdate>1970-01-01T00:00:00+00:00</d:creationdate>
				<d:displayname>ad3b12554e0d4364854ae3e21b170152</d:displayname>
				<d:resourcetype />
				<nc:has-preview>false</nc:has-preview>
				<nc:mount-type></nc:mount-type>
				<oc:comments-unread>0</oc:comments-unread>
				<oc:favorite>0</oc:favorite>
				<oc:fileid>237</oc:fileid>
				<oc:owner-display-name>admin</oc:owner-display-name>
				<oc:owner-id>admin</oc:owner-id>
				<oc:permissions>RGDNVW</oc:permissions>
				<oc:size>29</oc:size>
				<nc:hidden>false</nc:hidden>
				<nc:is-mount-root>false</nc:is-mount-root>
				<nc:reminder-due-date></nc:reminder-due-date>
				<nc:sharees />
				<nc:share-attributes>[]</nc:share-attributes>
				<oc:share-types />
				<x1:share-permissions xmlns:x1="http://open-collaboration-services.org/ns">19</x1:share-permissions>
				<nc:system-tags />
			</d:prop>
			<d:status>HTTP/1.1 200 OK</d:status>
		</d:propstat>
		<d:propstat>
			<d:prop>
				<d:quota-available-bytes />
				<nc:is-encrypted />
				<nc:metadata-blurhash />
				<nc:metadata-files-live-photo />
				<nc:note />
				<nc:rich-workspace />
				<nc:rich-workspace-file />
			</d:prop>
			<d:status>HTTP/1.1 404 Not Found</d:status>
		</d:propstat>
	</d:response>
	<d:response>
		<d:href>/remote.php/dav/files/admin/New%20folder/fa666d819a6c4315abba421172f0a0b1/</d:href>
		<d:propstat>
			<d:prop>
				<d:getetag>&quot;675b116ba88f8&quot;</d:getetag>
				<d:getlastmodified>Thu, 12 Dec 2024 16:38:03 GMT</d:getlastmodified>
				<d:creationdate>1970-01-01T00:00:00+00:00</d:creationdate>
				<d:displayname>fa666d819a6c4315abba421172f0a0b1</d:displayname>
				<d:quota-available-bytes>-3</d:quota-available-bytes>
				<d:resourcetype>
					<d:collection />
				</d:resourcetype>
				<nc:has-preview>false</nc:has-preview>
				<nc:is-encrypted>1</nc:is-encrypted>
				<nc:mount-type></nc:mount-type>
				<oc:comments-unread>0</oc:comments-unread>
				<oc:favorite>0</oc:favorite>
				<oc:fileid>266</oc:fileid>
				<oc:owner-display-name>admin</oc:owner-display-name>
				<oc:owner-id>admin</oc:owner-id>
				<oc:permissions>RGDNVCK</oc:permissions>
				<oc:size>0</oc:size>
				<nc:hidden>false</nc:hidden>
				<nc:is-mount-root>false</nc:is-mount-root>
				<nc:reminder-due-date></nc:reminder-due-date>
				<nc:sharees />
				<nc:share-attributes>[]</nc:share-attributes>
				<oc:share-types />
				<x1:share-permissions xmlns:x1="http://open-collaboration-services.org/ns">31</x1:share-permissions>
				<nc:system-tags />
				<nc:rich-workspace></nc:rich-workspace>
				<nc:rich-workspace-file></nc:rich-workspace-file>
			</d:prop>
			<d:status>HTTP/1.1 200 OK</d:status>
		</d:propstat>
		<d:propstat>
			<d:prop>
				<d:getcontentlength />
				<d:getcontenttype />
				<nc:metadata-blurhash />
				<nc:metadata-files-live-photo />
				<nc:note />
			</d:prop>
			<d:status>HTTP/1.1 404 Not Found</d:status>
		</d:propstat>
	</d:response>
</d:multistatus>`

export const serverPublicKey = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuj4493+bYHI1eZ549pm1
FzmowDT/pKKnn2+MbBCSNtYhmVZubL8kkZEFGB4YJ0bA4CH223t8r4qHyfQJh/lS
ZkY3NDzGcsl2YqFD+v8WSoDu2T0pJP+AXos2ZQ3bwhBFAVwSDPPYmKXy0IMKrAU4
TkRych5Upu9342n715DUgoAk96wUMo7ldEGI71Fb4mUNOMXSfIhdjGkULZKqQfGc
ecEvVNv8vFqYIFt/phpb07Wzr51xopL7S0gQ9tQoEtU0kgYIQzoy+LsU7aH35XPJ
neuDa51Wp/trnmzxGplx6NPEU/fThRHNHTPVYZnM8pImNYW89zHZH6BVAvVgXk7R
jQIDAQAB
-----END PUBLIC KEY-----`