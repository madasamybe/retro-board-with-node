import { configureStore } from '@reduxjs/toolkit'
import notesSliceReducer from './reducers';

export default configureStore({
  reducer: {
    retro: notesSliceReducer
  }
})