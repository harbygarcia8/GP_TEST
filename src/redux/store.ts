import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";

export interface AppStore {
    people: Person[];
}

export default configureStore<AppStore>({
    reducer: {
        people: (state: Person[] = [], action) => {
            switch (action.type) {
                case "SET_PEOPLE":
                    return action.payload;
                default:
                    return state;
            }
        }
    }
})