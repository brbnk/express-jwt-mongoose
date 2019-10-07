import { createStore } from 'redux'
import auth from './reducers/auth'

export const store = createStore(auth)
