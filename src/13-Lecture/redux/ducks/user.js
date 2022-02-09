const base = 'user';
export const GET_USER = `${base}/getUser`
const SET_USER = `${base}/setUser`

const initialState = {
    user: undefined
}

export const getUser = () => ({type: GET_USER})
export const setUser = (user) => ({type: SET_USER, user})

/**
 *
 * @param state
 * @param {{type:string,user?:any}} action
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {...state}
        case SET_USER:
            const {user} = action;
            return {...state, user}
        default:
            return state
    }
}



