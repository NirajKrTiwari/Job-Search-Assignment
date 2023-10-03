import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cover_letter: '',
    resume: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, resume: file });
  };
  const location = useLocation();
  const { jobTitle } = location.state || {};
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate('/success', { state: { applicationData: formData,jobTitle:jobTitle } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Apply for Job</h2>
        <h4 className='text-l text-center mb-5'>Job Title: {jobTitle}</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              name="cover_letter"
              placeholder="Cover Letter"
              value={formData.cover_letter}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              type="submit"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
