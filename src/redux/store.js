import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-propmis-middleware'

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            break;
    }
    return state
}

// const store = createStore(reducer, 1)

// store.dispatch({
//     type: "ADD",
//     payload: 
// })