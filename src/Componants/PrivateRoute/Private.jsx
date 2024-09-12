import React, { useContext } from 'react';
import { context } from '../Authentication';
import { useLocation, useNavigate } from 'react-router-dom';

const Private = ({Children}) => {


  const {user}=useContext(context)

  const location=useLocation()
  console.log(location)
  const navigate=useNavigate()


  if(!user){
    navigate('/login')
  }
  else  return (
        Children
       
    );
};

export default Private;