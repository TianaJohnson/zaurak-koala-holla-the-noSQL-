// this reducer stores all of the koala information from the MongoDB


const koalas = (state = [], action) => {
    switch (action.type) {
        case 'SET_KOALAS':
            return action.payload;
        default:
            return state;
    }
}




export default koalas;