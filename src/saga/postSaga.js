import { call, put, takeEvery } from "redux-saga/effects";
import { getPostSuccess } from "../redux/slice/postslice";

function* postFetch() {
  const postResponse = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/posts")
  );
  const formattedPost = yield postResponse.json();
  yield put(getPostSuccess(formattedPost));
}

function* postSaga() {
  yield takeEvery("posts/getPostFetch", postFetch);
}

export default postSaga;
