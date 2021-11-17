import { call, put } from 'redux-saga/effects';
import { setUrl } from '../../actions';
import { requestGetUrl } from '../requests/url';
import "regenerator-runtime/runtime";

export function* handleGetUrl(action) {
    try {
        const response = yield call(requestGetUrl, action.url);
        console.log(response.data);
        yield put(setUrl(response.data.result_url));
    } catch (error) {
        console.log(error);
    }
}