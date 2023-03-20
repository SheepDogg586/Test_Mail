import React, { useState } from 'react';

export function SearchBar() {
  const [selectedOption, setSelectedOption] = useState('General');
  const handleSearch = () => {
    console.log(`Searching for ${searchTerm} in ${selectedOption}`);
  };
  return (
    <div className='container' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} style={{width:'600px', marginTop: '30px'}}>
        <option value="General">General</option>
        <option value="Fishing">Fishing/Boating</option>
        <option value="Boarding">Boarding/Kayaking</option>
        <option value="Scuba">Scuba/Snorkel</option>
      </select>
      <button onClick={handleSearch} style={{width:'150px', borderRadius: '15px', border: 'none', marginTop: '30px'}}>Search</button>
    </div>
  );
}
