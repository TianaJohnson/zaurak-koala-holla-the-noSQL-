import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchKoalas() {
    try {
        const response = yield axios.get(`/api/koalas`);
        console.log(response);
        yield put({ type: 'SET_KOALAS', payload: response.data });
    } catch (error) {
        console.log(`error in fetchKoalas`, error);
        alert('something went wrong');
    }
}

function* koalaSaga() {
    yield takeLatest('FETCH_KOALAS', fetchKoalas);
}

export default koalaSaga;