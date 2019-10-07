import React, { useState } from 'react'
import api from '../../services/api'

const SignIn = ({ setForm }) => { 
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
       
        await api.post("/auth/register", { name, email, password }, { withCredentials: true })
            .then(res => { 
                setError('')
                setForm('login')
            })
            .catch(err => { 
                const { message } = err.response.data
                setAuth(false)
                setError(message)
            })
    }

    return (
        <form className="auth-form" onSubmit={ handleSubmit }>
            <div>
                <label htmlFor='name'> Name: </label>
                <input 
                    type='text' 
                    id='name' 
                    placeholder='Name'
                    value={ name }
                    onChange={ (e) => setName(e.target.value) } />
            </div>
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
            <button type="submit" className='btn'> Sign In </button>
        </form>
    )
}

export default SignIn