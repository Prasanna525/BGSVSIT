const redux = require('redux');

const BUY_EGG = 'BUY_EGG';

function buyEgg() {
    return {
        type: BUY_EGG,
        info: 'Buying Egg'
    }
}

const initialState = {
    numOfEggs: 100
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_EGG:
            return {
                ...state,
                numOfEggs: state.numOfEggs - 1
            }
        default:
            return state;
    }
}