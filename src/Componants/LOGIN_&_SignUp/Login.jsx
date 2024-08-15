import React, { useContext, useState } from 'react';
import { context } from '../Authentication';
import Swal from 'sweetalert2'

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
            <div className={toggle ? 'cont s--signup' : 'cont'}>
                <form onSubmit={handleSubmitSignin} className="form sign-in">
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
                    <div className="img">
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
                    <form onSubmit={handleSubmitSignUp} className="form sign-up">
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


        </>
    );
};

export default Login;