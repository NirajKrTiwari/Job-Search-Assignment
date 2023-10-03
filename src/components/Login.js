import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setLoginStatus} from '../redux/slices/authSlice';
function Login() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    const user = { email, password };
    e.preventDefault();
    dispatch(setLoginStatus(true));
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
