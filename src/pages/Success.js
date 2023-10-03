import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Success() {
  const location = useLocation();
  const { applicationData } = location.state || {};
  const {jobTitle}=location.state||{};

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Application Submitted</h2>
        {applicationData ? (
          <div className='flex justify-center flex-col items-center gap-4'>
            <p>
              <strong>Job Title:</strong>{jobTitle}
            </p>
            <p>
              <strong>Name:</strong> {applicationData.name}
            </p>
            <p>
              <strong>Email:</strong> {applicationData.email}
            </p>
            <p>
              <strong>Cover Letter:</strong> {applicationData.cover_letter}
            </p>
            <p>
              <strong>Resume:</strong> {applicationData.resume ? applicationData.resume.name : 'Not provided'}
            </p>
            <Link to="/home"><button className='bg-blue-700 text-white px-8 py-2 rounded-xl'>Home</button></Link>
          </div>
        ) : (
          <p className="text-red-500">No application data found.</p>
        )}
      </div>
    </div>
  );
}

export default Success;
