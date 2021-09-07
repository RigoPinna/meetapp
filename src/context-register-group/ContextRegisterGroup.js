import { createContext } from "react";
import { initialState } from "../reducers/groupReducer";

export const ContextRegisterGroup = createContext( initialState );