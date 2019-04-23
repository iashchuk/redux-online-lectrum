// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST";
import { uiActions } from "../../../ui/actions";

export function* worker ({ payload: { text }}) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data: info, message } = yield apply(response, response.json, [
            text
        ]);

        if (response.status !== 200) {
            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error.message, "→ worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
