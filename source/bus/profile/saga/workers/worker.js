// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST";
import { uiActions } from "../../../ui/actions";

export function* worker () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply();

        if (response.status !== 200) {
            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error.message, "→ worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
