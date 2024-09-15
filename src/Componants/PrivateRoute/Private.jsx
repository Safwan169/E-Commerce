import React, { useContext } from 'react';
import { context } from '../Authentication';
import { useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animation from '../../../public/loading.json'


const Private = ({ children }) => {


  const { user, loading1 } = useContext(context)

  const location = useLocation()
  console.log(location)
  if (loading1) {

    return (

      <div className=' '>
        <Lottie className='w-1/3 h-1/2 mx-auto   ' animationData={animation}></Lottie>
      </div>
    )

  }


  else return (

    children
  );
};

export default Private;