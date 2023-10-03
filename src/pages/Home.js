import React, { useState } from 'react';
import JobList from './JobList';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Home() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [language, setLanguage] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(false)
  const handleSearch = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5209d67708msh2b4c4487ee24df4p1a9455jsn60b60f48436e',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    };

    let url = `https://jsearch.p.rapidapi.com/search?query=${language}`;
    try {
      setloading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      setJobs(data.data);
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 ">
  {
    isLogin ?
    (
      <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Job Search</h2>
      <div className="flex mb-4 w-1/2 min-w-1/2 items-center justify-center mx-auto">
        <input
          type="text"
          placeholder="Enter programming language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-r-lg"
        >
          Search
        </button>
      </div>
      <div>
        {!loading ? (
          jobs.map((job) => (
            <JobList key={job.job_id} job={job} />
          ))
        ) : (
          <div className="text-gray-600 text-center text-2xl">Loading.....</div>
        )}
      </div>
    </div>
    )
    :
    (
      <div className='flex items-center justify-center h-screen'>
      <Link to="/"><button className='bg-blue-700 text-white px-8 py-2 rounded-xl'>Please Login</button></Link>
      </div>
    )
  }
    </div>
  );
}

export default Home;
