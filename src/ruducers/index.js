import {combinReducers} from 'redux';
import conter from './counter';
import ui from './ui';

const reducers = combinReducers ({
    counter, ui
});

export default reducers;
