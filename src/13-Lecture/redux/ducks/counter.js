const base = 'counter';
const INCREMENT = `${base}/increment`
const DECREMENT = `${base}/decrement`

const initialState = {
    count: 0
}

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})

/**
 *
 * @param state
 * @param {{type:string}} action
 */
export default (state = initialState,action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state,count:state.count+1}
        case DECREMENT:
            return {...state,count:state.count-1}
        default:
            return state
    }
}



