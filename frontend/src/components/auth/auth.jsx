import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import Login from './login'
import SignIn from './signin'

const Auth = ({ history, validation }) => { 
    const [form, setForm] = useState('login')

    const props = useSpring({from: { marginTop: '-500px' }, marginTop: '0px', config: { duration: 500 } })

    return (
        <animated.div style={ props } className="login-container">
            <div className="content">
                <div className="actions"> 
                    <a onClick={ () => setForm('login') }> Login </a>
                    <a onClick={ () => setForm('signin') }> Register </a>
                </div>
                {   form == 'login' ? 
                        <Login history={history} validation={validation}/> :
                        <SignIn setForm={setForm} />
                }
            </div>
        </animated.div>
    )
}

export default Auth