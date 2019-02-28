import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* fetchKoalas() {
    try {
        const response = yield axios.get(`/api/koala`);
        console.log(response);
        yield put({ type: 'SET_KOALAS', payload: response.data });
    } catch (error) {
        console.log(`error in fetchKoalas`, error);
        alert('something went wrong');
    }
}

function* addKoalas(action) {
    try {
        yield axios.post('/api/koala/addkoala', action.payload);
        const nextAction = {type: 'FETCH_KOALAS'};
        yield put(nextAction);
        
    }catch(error) {
        console.log('there is an error in addKoalas saga', error);
    }
}

function* koalaSaga() {
    yield takeLatest('FETCH_KOALAS', fetchKoalas);
    yield takeEvery('ADD_KOALAS', addKoalas)
}

export default koalaSaga;