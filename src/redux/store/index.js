import { configureStore } from '@reduxjs/toolkit'
import PersonSlice from '../reducers/PersonSlice'



const store = configureStore({
  reducer: {
    person: PersonSlice,
  }
})

export default store