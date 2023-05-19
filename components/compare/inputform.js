import React, { useState } from 'react';

const CompareForm = ({ onSubmit }) => {
  const [username1, setUsername1] = useState('');
  const [username2, setUsername2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username1, username2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <label htmlFor="username1" className="text-lg font-medium">
          Username 1
        </label>
        <input
          type="text"
          id="username1"
          value={username1}
          onChange={(e) => setUsername1(e.target.value)}
          className="border-2 border-gray-300 rounded-lg p-2"
        />
        <label htmlFor="username2" className="text-lg font-medium">
          Username 2
        </label>
        <input
          type="text"
          id="username2"
          value={username2}
          onChange={(e) => setUsername2(e.target.value)}
          className="border-2 border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-blue-500  rounded-lg py-2 px-4 hover:bg-blue-600"
        >
          Compare
        </button>
      </div>
    </form>
  );
};

export default CompareForm;
