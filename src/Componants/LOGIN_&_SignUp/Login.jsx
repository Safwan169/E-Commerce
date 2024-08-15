import React, { useContext, useState } from 'react';
import { context } from '../Authentication';
import Swal from 'sweetalert2'
import '././style.css'




const Login = () => {
    const [toggle, setToggle] = useState(false)
    const { signIN, signUp } = useContext(context)



    

    const handleSubmitSignin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signIN(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;



                if (user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        }

            const handleSubmitSignUp = (e) => {
                e.preventDefault()
                const email = e.target.email.value
                const password = e.target.password.value
                signUp(email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
    
    
    
                        if (user) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Register",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }

    
    return (
        <>


            <br />
            <br />
            <div className={ toggle ? 'hidden lg:block cont s--signup' : 'hidden lg:block cont'}>
                <form onSubmit={handleSubmitSignin} className="form    sign-in">
                    <h2>Welcome</h2>
                    <label>
                        <span>Email</span>
                        <input

                            name='email'
                            type="email" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input
                            name='password'
                            type="password" />
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <button className="submit">Sign In</button>

                </form>
                <div className="sub-cont">
                    <div className="img ">
                        <div className="img__text m--up">

                            <h3>Don't have an account? Please Sign up!</h3>
                        </div>
                        <div className="img__text m--in">

                            <h3>If you already has an account, just sign in.</h3>
                        </div>
                        <div onClick={() => setToggle(!toggle)} className="img__btn">
                            <span className="m--up ">Sign Up</span>
                            <span className="m--in">Sign In</span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmitSignUp} className="form  ">
                        <h2>Create your Account</h2>
                        <label>
                            <span>Name</span>
                            <input
                                name='name'
                                type="text" />
                        </label>
                        <label>
                            <span>Email</span>
                            <input
                                name='email'
                                type="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input
                                name='password'
                                type="password" />
                        </label>
                        <button type="" className="submit">Sign Up</button>

                    </form >
                </div>
            </div>


            <div className="wrapper mx-auto">
         <div className="title-text">
            <div className="title login">Login Form</div>
            <div className="title signup">Signup Form</div>
         </div>
         <div className="form-container">
            <div className="slide-controls">
               <input type="radio" name="slide" id="login" checked />
               <input type="radio" name="slide" id="signup" />
               <label for="login" className="slide login">Login</label>
               <label for="signup" className="slide signup">Signup</label>
               <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
               <form action="#" className="login">
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
               <form action="#" className="signup">
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


        </>
    );
};

export default Login;