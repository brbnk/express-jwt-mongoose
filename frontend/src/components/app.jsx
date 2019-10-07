import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Login from './auth/login'

const App = () => { 
    return (
        <BrowserRouter> 
            <Login />
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

export default App
