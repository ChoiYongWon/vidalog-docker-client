import {atom} from "recoil"

export const editDate = atom({
    key : "editor/date",
    default : {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
    },
})
