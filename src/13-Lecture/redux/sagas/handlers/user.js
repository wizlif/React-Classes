import {call, put} from 'redux-saga/effects';
import {requestGetUser} from "../requests/user";
import {setUser} from "../../ducks/user";

export function* handleGetUser(action) {
    try {
        const {data} = yield call(requestGetUser);
        yield put(setUser(data))
    } catch (e) {
        console.log(e);
    }
}