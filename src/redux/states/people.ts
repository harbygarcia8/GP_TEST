import { createSlice } from "@reduxjs/toolkit";

const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
}

export const peopleSlice = createSlice({
    name: "people",
    initialState: getLocalStorage("people") ? JSON.parse(getLocalStorage("people") as string) : [],
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage('people', state)
            return action.payload
        }        
    }
})