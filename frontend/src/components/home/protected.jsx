import React from 'react'
import { useHistory } from 'react-router-dom' 
import { useDispatch } from 'react-redux'
import { useSpring, animated } from 'react-spring'

const Protected = () => { 
    const history = useHistory()
    const dispatch = useDispatch()

    const props = useSpring({ 
        from: { opacity: 0 },
        opacity: 1,
        config: { 
            duration: 500
        }
    })

    function logout() { 
        dispatch({ 
            type: "AUTHENTICATE", 
            state: false 
        })
        history.push('/')
    }

    return (
        <animated.div style={props} className="protected-container container">
            <a href="#" onClick={ () => logout() }> Logout </a>
            <h1> Protected Container </h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Top_secret.png" />
        </animated.div>
    )
}

export default Protected