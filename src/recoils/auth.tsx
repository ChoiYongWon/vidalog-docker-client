import {atom} from "recoil"
import {Auth, Role} from "../types/Auth";

export const authenticate = atom<number>({
    key : "auth",
    default : Auth.LOGOUT,
})

export const role = atom<number>({
    key : "role",
    default : Role.GUEST,
})
