import React from 'react';
import { encodeDomain, decodeDomain } from '../utils';

function SomeComponent() {
  const domain = 'münich.com';
  const encodedDomain = encodeDomain(domain);
  const decodedDomain = decodeDomain(encodedDomain);

  return (
    <div>
      <p>Original Domain: {domain}</p>
      <p>Encoded Domain: {encodedDomain}</p>
      <p>Decoded Domain: {decodedDomain}</p>
    </div>
  );
}

export default SomeComponent; 