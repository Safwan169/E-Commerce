import React, { useState } from 'react';
// import './index'
import './style.css'




const Register = () => {


   const [toggle2,setToggle2]=useState(false)



   return (
      <div className="wrapper mx-auto">
         <div className="title-text">
           { toggle2? <div className=" title signup">Signup Form</div>:<div className="title login">Login Form</div>}
         </div>
         <div className="form-container">
            <div className="slide-controls">
               <input type="radio" name="slide" id="login" checked />
               <input type="radio" name="slide" id="signup" />
               <label onClick={()=>setToggle2(false)} for="login" className="slide login">Login</label>
               <label onClick={()=>setToggle2(true)} for="signup" className="slide signup">Signup</label>
               <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
               <form action="#" className={ toggle2?'login  -ml-[50%]':'login  -ml-[0%]' }>
                  <div className="field">
                     <input className='text-left' type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field ">
                     <input className='text-left' type="password" placeholder="Password" required />
                  </div>
                  <div className="pass-link"><a href="#">Forgot password?</a></div>
                  <div className="field btn">
                     <div className="btn-layer"></div>
                     <input type="submit" value="Login" />
                  </div>
                  <div className="signup-link">Not a member? <a href="">Signup now</a></div>
               </form>
               <form action="#" className="signup ">
                  <div className="field">
                     <input className='text-left' type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                     <input className='text-left' type="password" placeholder="Password" required />
                  </div>
                  <div className="field">
                     <input type="password" placeholder="Confirm password" required />
                  </div>
                  <div className="field btn">
                     <div className="btn-layer"></div>
                     <input type="submit" value="Signup" />
                  </div>
               </form>
            </div>
         </div>
      </div>

   );
}





export default Register;