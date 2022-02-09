const INCREMENT = "counter/increment";
const DECREMENT = "counter/decrement";

/**
 *
 * @type {{count: number}}
 */
const initialState = {
    count: 0
}

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}