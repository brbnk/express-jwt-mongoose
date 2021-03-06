import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../services/api'

import Auth from '../auth/auth'
import Protected from '../home/protected'
import PublicComponent from '../public/public'

const Routes = () => { 
    const { isAuthenticated } = useSelector(state => state)
    const dispatch = useDispatch()
    
    const authorized = () => { 
        dispatch({ type: "AUTHENTICATE", state: true })
    }

    const unauthorized = () => { 
        dispatch({ type: "AUTHENTICATE", state: false })
    }

    useEffect(() => { 
        (async () => { 
            await api.post('/auth/token_validation')
                .then(_ => authorized())
                .catch(_ => unauthorized())
        })()
    }, []) 
   
    return (
        <BrowserRouter> 
            <Switch>
                <Route path='/'
                    exact
                    component={ PublicComponent }
                /> 
                <Route 
                    path='/protected' 
                    render={ () => isAuthenticated ? <Protected /> : <Redirect to={{ pathname: '/auth', state: { message: "Não autorizado!" }}} /> } 
                />
                <Route 
                    path='/auth' 
                    render={ (props) => <Auth history={props.history} validation={{ authorized, unauthorized }} /> }
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes