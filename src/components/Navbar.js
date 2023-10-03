
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setLoginStatus} from '../redux/slices/authSlice'; // Import the action
import { Link } from 'react-router-dom';
function Navbar() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLoginStatus(false));
  };

  return (
        <div className='flex flex-row bg-black text-white items-center py-3 justify-around w-screen'>
            <h1 className='text-2xl'>Job Search</h1>
            <div className='flex flex-row text-xl gap-3 items-center'>
                <div>
                    <Link to="/home">Home</Link>
                </div>
            </div>
            <div>
                {
                    isLogin ?
                    <Link to="/"><button className='bg-gray-700 text-white p-2 rounded-xl' onClick={handleLogout}>Logout</button></Link>
                    :
                    <Link to="/"><button className='bg-gray-700 text-white p-2 rounded-xl'>Login</button></Link>
                }
            </div>
        </div>
  );
}

export default Navbar;
