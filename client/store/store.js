import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import carReducer from "./carFetch";
import agencyReducer from "./agencySlice";
import location from "./locationSlice";
import chatRoomReducer from "./chatSlice";


import bookingReducer from "./bookingSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
    agency: agencyReducer,
    location: location,
    booking: bookingReducer,
    chatRoom:chatRoomReducer
  },
});

export default store;
