import React, { useState } from 'react'
import api from '../../services/api'

const Login = ({ history, validation }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')
    const { authorized, unauthorized } = validation 

    async function handleSubmit(e) {
        e.preventDefault();
       
        await api.post("/auth/login", { email, password }, { withCredentials: true })
            .then(_ => { 
                setError('')
                authorized()
                history.push('/protected')
            })
            .catch(err => { 
                setError(err.response.data.message)
                unauthorized()
            })
    }

    return(
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
            <button type="submit" className='btn'> Login </button>
        </form>
    )
}

export default Login