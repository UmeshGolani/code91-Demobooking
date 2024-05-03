// EntryForm.js (React Component)

import React, { useState } from 'react';
import axios from 'axios';

const EntryForm = () => {
  const [parentName, setParentName] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [grade, setGrade] = useState('');
  const [classesMode, setClassesMode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://code91-demobooking-backend.onrender.com/api/entries', {
        parentName,
        parentContact,
        grade,
        classesMode
      });
      console.log('Data sent successfully:', response.data);
      // Reset form fields after successful submission
      setParentName('');
      setParentContact('');
      setGrade('');
      setClassesMode('');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 shadow">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Parent's Name:
          <input
            type="text"
            value={parentName}
            placeholder="Parent's Name"
            onChange={(e) => setParentName(e.target.value)}
            className="mt-1 p-2 border-b-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Parent's Contact No:
          <input
            type="text"
            value={parentContact}
            placeholder="Parent's Contact No"
            onChange={(e) => setParentContact(e.target.value)}
            className="mt-1 p-2 border-b-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Grade:
          <input
            type="text"
            value={grade}
            placeholder="Grade"
            onChange={(e) => setGrade(e.target.value)}
            className="mt-1 p-2 border-b-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Classes Mode:
          <select
            value={classesMode}
            onChange={(e) => setClassesMode(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Mode</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </label>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book Demo
        </button>
      </div>
    </form>
  );
};

export default EntryForm;

////////////////////////////////////////////////////////////////////
{/* import React, { useState } from 'react';

const EntryForm = () => {
  const [parentName, setParentName] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [grade, setGrade] = useState('');
  const [classesMode, setClassesMode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your backend
    const formData = {
      parentName,
      parentContact,
      grade,
      classesMode
    };
    console.log(formData); // You can replace this with your API call
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 shadow">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Parent's Name:
          <input
            type="text"
            value={parentName}
            placeholder="Parent's Name"
            onChange={(e) => setParentName(e.target.value)}
            className="mt-1 p-2 border-b-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Parent's Contact No:
          <input
            type="text"
            value={parentContact}
            placeholder="Parent's Contact No"
            onChange={(e) => setParentContact(e.target.value)}
            className="mt-1 p-2 border-b-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Grade:
          <input
            type="text"
            value={grade}
            placeholder="Grade"
            onChange={(e) => setGrade(e.target.value)}
            className="mt-1 p-2 border-b-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Classes Mode:
          <select
            value={classesMode}
            onChange={(e) => setClassesMode(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Mode</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </label>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book Demo
        </button>
      </div>
    </form>
  );
};

export default EntryForm; */}
