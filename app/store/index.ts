import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dataReducer, DataState } from './reducers/dataReducer';

export interface RootState {
    data: DataState,
}

const rootReducer = combineReducers({
    data: dataReducer.reducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
