import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function JobList({ jobId, job }) {
  const navigate = useNavigate();
  const [jobTitle, setjobTitle] = useState(job.job_title)
  function handleApply(event) {
    navigate("/form",{ state: { jobTitle: jobTitle } });
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h5 className="text-2xl font-semibold mb-2">{job.job_title}</h5>
      <div className="mb-2">
        <p className="text-gray-600">{job.employer_name}</p>
        <p className="text-gray-600">Country: {job.job_country}</p>
      </div>
      <div className="mb-2">
        <p className="text-gray-700">{job.job_description.substring(0, 250)}...</p>
      </div>
      <div className='flex flex-row justify-between'>
        <a
        href={job.job_apply_link}
        target="_blank"
        >
        <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Description
        </button>
        </a>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        onClick={handleApply}
      >
        Apply
      </button>
      </div>
      
    </div>
  );
}

export default JobList;
