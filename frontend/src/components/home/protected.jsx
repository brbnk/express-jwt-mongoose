import React from 'react'

const Protected = ({ logout }) => { 
    return (
        <>
            <h1> ProtectedContainer </h1>
            <a onClick={ () => logout() }> Logout </a>
        </>
    )
}

export default Protected