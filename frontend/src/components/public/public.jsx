import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

const PublicComponent = () => { 

    const props = useSpring({ 
        from: { opacity: 0 },
        opacity: 1,
        config: { 
            duration: 1000
        }
    })

    return (
        <animated.div style={props} className="public-container container">
            <h1> Welcome! </h1>
            <div>
                <Link to="/protected"> Protected Route </Link>
                <Link to="/Auth"> Login </Link>
            </div>
        </animated.div>
    )
}

export default PublicComponent