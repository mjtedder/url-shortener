import { takeLatest } from 'redux-saga/effects';
import { handleGetUrl } from './handlers/url';

export default function* watcherSaga() {
    yield takeLatest('GET_URL', handleGetUrl)
};