import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({ configInicial: 'Configuração Inicial' });

export const HANDLERS = {};

export default createReducer(INITIAL_STATE, HANDLERS);
