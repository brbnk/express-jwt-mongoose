import React, { useState } from 'react'
import api from '../../services/api'

const Login = () => { 
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ authenticated, setAuthenticated ] = useState(false)
    const [ error, setError ] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
       
        await api.post("/auth/login", { email, password }, { withCredentials: true })
            .then(res => { 
                setError('')
                setAuthenticated(true)
            })
            .catch(err => { 
                const { message } = err.response.data
                setError(message)
                setAuthenticated(false)
            })

        // await api.get("/home/users")
        //     .then(res => console.log(res))
        //     .catch(error => console.log(error.response))
    }

    return (
        <div className="login-container">
            <div className="content">
                <h1> Login </h1>
                <form className="auth-form" onSubmit={ handleSubmit }>
                    <div>
                        <label htmlFor='email'> Email: </label>
                        <input 
                            type='text' 
                            id='email' 
                            placeholder='Email'
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) } />
                    </div>

                    <div>
                        <label htmlFor='password'> Password: </label>
                        <input 
                            type="password" 
                            id='password'
                            value={ password } 
                            placeholder='Senha' 
                            onChange={ (e) => setPassword(e.target.value) }/>
                    </div>
                    <p> { error } </p>
                    { authenticated ? <span> Authenticated! </span> : null }
                    <button type="submit" className='btn'> Login </button>
                </form>
            </div>
        </div>
    )
}

export default Login