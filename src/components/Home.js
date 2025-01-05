import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [phones, setPhones] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/phones')
      .then(response => response.json())
      .then(data => setPhones(data))
      .catch(error => console.error('Error fetching phones:', error));
  }, []);

  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Welcome to the Gadget Review Website</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <input
        type="text"
        placeholder="Search phones..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h2>Featured Phones</h2>
      <ul>
        {filteredPhones.map(phone => (
          <li key={phone.id}>{phone.name}</li>
        ))}
      </ul>
      {/* Add sections for Latest Reviews, etc. */}
    </div>
  );
}

export default Home;