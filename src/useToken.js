import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const adminToken = JSON.parse(tokenString);
    return adminToken?.token
  }

  const [token, setToken] = useState(getToken());
  
  const saveToken = (adminToken) =>{
    localStorage.setItem('token', JSON.stringify(adminToken));
    setToken(adminToken.token);
  }

  return {
    setToken : saveToken,
    token
  }
  
}