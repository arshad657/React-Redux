export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }  
}

export const decrementCounter = () => {
    return {
        type: DECREMENT
    }  
}

export const resetCounter = () => {
    return {
        type: RESET
    }  
}