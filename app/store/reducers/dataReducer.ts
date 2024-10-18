import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherCodes, WeatherDesc } from '../../constants';

export interface DataState {
    time: string;
    temperature: number;
    is_day: 0 | 1;
    weathercode: number;
    tempUnit: string;
    iconPath: string;
}

const INITIAL_STATE: DataState = {
    time: '',
    temperature: 0,
    is_day: 1,
    weathercode: 0,
    tempUnit: '',
    iconPath: './weather-images/sun/26.png',
};

export const dataReducer = createSlice({
    name: 'data',
    initialState: INITIAL_STATE,
    reducers: {
        setData: (state, action: PayloadAction<any>) => {
            // ideally would be better typed, but assuming always have consistent data
            const img =
                WeatherCodes[action.payload.weathercode][action.payload.is_day];
            const imgPath = `./weather-images${img}.png`;
            state.time = action.payload.time;
            state.temperature = action.payload.temperature;
            state.is_day = action.payload.is_day;
            state.weathercode = action.payload.weathercode;
            state.tempUnit = action.payload.unit;
            state.iconPath = imgPath;
        },
    },
});

export const { setData } = dataReducer.actions;
