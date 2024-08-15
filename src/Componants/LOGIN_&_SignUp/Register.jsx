import React from 'react';

const Register = () => {
    return (
        <div>
            <section></section>
            <section className="loginOrSignupField anim03 anim04c">
                <aside className="loginOrSignupFieldInner anim03 anim04c">

                    <div className="switchButtonField">
                        <div className="switchButtonOuter">
                            <div className="switchButtonInner anim03 anim04c"></div>
                        </div>
                    </div>

                    <form className="emailForm" method="post" action="musabProje">
                        <input type="text" id="email" className="input" value="" placeholder="E-mail">
                            <input type="password" id="password" className="input" value="" placeholder="Password">
                                <div id="rememberMeField">
                                    <label>
                                        <input type="checkbox" id="rememberMe" />
                                        <span></span>
                                    </label>
                                </div>
                                <input type="submit" id="submit" value="Join" />
                    </form>

                            <a href="#" className="socialButton facebook" target="_blank">Facebook</a>
                            <a href="#" className="socialButton twitter" target="_blank">Twitter</a>
                            <a href="#" className="socialButton googleplus" target="_blank">Google +</a>

                </aside>

                        <nav className="navigations">
                            <ul>
                                <li>
                                    <span className="normal">normal</span>
                                </li>
                                <li>
                                    <span className="mode01">mode 2</span>
                                </li>
                                <li>
                                    <span className="mode02">mode 3</span>
                                </li>
                                <li className="designer">
                                    <a href="https://creativemarket.com/mselmany" target="_blank">
                                        <img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/t5/1117447_100001638983788_1284464661_q.jpg" alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
            </section>
        </div>
                );
};

                export default Register;