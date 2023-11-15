import { combineReducers } from 'redux'
import { demoReduxReducer } from './demoRedux/reducer'
import { BTPhoneReducer } from './BTPhone/reducer'
import { btMovieBookingReducer } from './BTMovieBooking/slice'
import { btFormReducer } from './BTForm/slice'
import { animalReducer } from "./Animals/slice";

export const rootReducer = combineReducers({
    demoRedux: demoReduxReducer,
    btPhone:BTPhoneReducer,
    btMovieBooking: btMovieBookingReducer,
    btForm:btFormReducer,
    animal: animalReducer,
})
