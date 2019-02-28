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

function* updateKoala(action) {
    try {
        yield axios.put(`/api/koala/updateKoala/${action.payload.id}`, action.payload);
        yield alert('Koala Set to Transfer');
        yield put({ type: 'FETCH_KOALA'});
    }catch(error){
        console.log('Unable to transfer koala', error);
        alert('Unable to transfer koala', error);
    }
}

function* koalaSaga() {
    yield takeLatest('UPDATE_KOALA', updateKoala)
    yield takeLatest('FETCH_KOALAS', fetchKoalas);
    yield takeEvery('ADD_KOALAS', addKoalas)
}

export default koalaSaga;