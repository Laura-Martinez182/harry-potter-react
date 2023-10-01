import { createSlice } from '@reduxjs/toolkit'

const PersonSlice = createSlice({
    name: 'person',
    initialState: {
        person: null
    },

    reducers: {
        login: (state, action) => {
            state.person = {...action.payload};
        },

        logout: (state) => {
            state.person = null
        }
    }

})

export const { login, logout } = PersonSlice.actions
export const selectPerson = (state) => state.person.person
export default PersonSlice.reducer