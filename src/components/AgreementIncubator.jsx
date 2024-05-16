import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AgreementIncubator = () => {
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    fetchAgreements();
  }, []);

  const fetchAgreements = async () => {
    try {
      const response = await axios.get('/api/agreements');
      setAgreements(response.data);
    } catch (error) {
      console.error('Error fetching agreements:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Agreement Incubator</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">Drafts</h2>
        {agreements.filter(agreement => agreement.status === 'draft').map((agreement, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <p>{agreement.title}</p>
            <p className="text-gray-600">Drafted {agreement.drafted_date}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">In Progress</h2>
        {agreements.filter(agreement => agreement.status === 'in_progress').map((agreement, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <p>{agreement.title}</p>
            <p className="text-gray-600">Last edited {agreement.edited_date}</p>
          </div>
        ))}
      </div>
      <button className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full">+</button>
    </div>
  );
};

export default AgreementIncubator;
