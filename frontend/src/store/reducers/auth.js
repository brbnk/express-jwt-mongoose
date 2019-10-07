const AUTH_STATE = { 
    isAuthenticated: false
}

const authReducer = (state = AUTH_STATE, action) => { 
    switch (action.type) {
        case "AUTHENTICATE": 
            return { isAuthenticated: action.state }
        default:
            return state
    }
}

export default authReducer