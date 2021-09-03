import { createContext } from "react";
import { initialState } from "../reducers/registerReducer";

export const ContextRegister = createContext( initialState );