import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useLocation } from 'react-router-dom'

import Login from './login'
import SignIn from './signin'

const Auth = ({ validation }) => { 
    const [form, setForm] = useState('login')
    
    const props = useSpring({
        from: { opacity: 0 }, 
        opacity: 1, 
        config: { duration: 1000 } 
    })

    const tag = useSpring({
        from: { opacity: 1 },
        opacity: 0,
        config: { duration: 6000 }
    })

    const { state } = useLocation()

    return (
        <animated.div style={ props } className="login-container container">
            <h1> Authentication </h1>
            <div className="content">
                <div className="actions"> 
                    <a onClick={ () => setForm('login') }> Login </a>
                    <a onClick={ () => setForm('signin') }> Register </a>
                </div>
                {   form == 'login' ? 
                        <Login validation={validation}/> :
                        <SignIn setForm={setForm} />
                    }
            </div>
            <animated.div id="tag" style={tag}> { state != undefined ? state.message : null } </animated.div>
        </animated.div>
    )
}

export default Auth