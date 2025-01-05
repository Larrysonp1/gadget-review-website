import uts46 from 'idna-uts46-hx';

// Function to encode a domain name
export function encodeDomain(domain) {
  return uts46.toAscii(domain);
}

// Function to decode a domain name
export function decodeDomain(domain) {
  return uts46.toUnicode(domain);
}