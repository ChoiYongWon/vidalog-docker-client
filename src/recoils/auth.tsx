import {atom} from "recoil"

export const auth = atom<boolean>({
    key : "auth",
    default : false,
})