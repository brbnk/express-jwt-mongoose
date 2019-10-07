import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { store } from '../store/index'
import { Provider } from 'react-redux'

import Routes from './routes/routes'

const App = () => { 
    return (
        <Provider store={ store } > 
            <Routes />
        </Provider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

export default App
