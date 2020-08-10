import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { FavoriteActions } from './favoritesDucks';

export function* favorite({ repository }) {
  try {
    const { data } = yield call(api.get, `repos/${repository}`);

    const response = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
      avatar: data.owner.avatar_url,
    };

    yield put(FavoriteActions.favoriteSuccess(response));
  } catch (err) {
    yield put(FavoriteActions.favoriteFailure('Erro ao adicionar repositório'));
  }
}

export default all([takeLatest('FAVORITE_REQUEST', favorite)]);
