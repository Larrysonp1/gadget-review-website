import React, { useState } from 'react';

function Compare() {
  const [selectedPhones, setSelectedPhones] = useState([]);

  const phones = [
    { id: 1, name: 'Phone A', specs: 'Specs for Phone A' },
    { id: 2, name: 'Phone B', specs: 'Specs for Phone B' },
    { id: 3, name: 'Phone C', specs: 'Specs for Phone C' },
  ];

  const handleSelect = (phone) => {
    setSelectedPhones((prevSelected) =>
      prevSelected.includes(phone)
        ? prevSelected.filter((p) => p !== phone)
        : [...prevSelected, phone]
    );
  };

  return (
    <div>
      <h1>Compare Phones</h1>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedPhones.includes(phone)}
                onChange={() => handleSelect(phone)}
              />
              {phone.name}
            </label>
          </li>
        ))}
      </ul>
      <h2>Selected Phones</h2>
      <ul>
        {selectedPhones.map((phone) => (
          <li key={phone.id}>{phone.name}: {phone.specs}</li>
        ))}
      </ul>
    </div>
  );
}

export default Compare; 