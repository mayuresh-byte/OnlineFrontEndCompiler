import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    fullCode: {
        html: "html code",
        css: "css code",
        javascript: "js code",
    },
    currentLanguage: "html",
    currentCode: ""
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<string>) => {
            state.currentLanguage = action.payload;
        },

        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload;
        },

        updateFullCode:(state, action:PayloadAction<any>) => {
            state.fullCode = action.payload;
        }
    }
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue, updateFullCode } = compilerSlice.actions;
