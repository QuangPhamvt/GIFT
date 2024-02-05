import { atom } from "recoil";

export const rejectState = atom<number>({
  key: "rejectStateAtom",
  default: 0,
})
export const acceptState = atom<boolean>({
  key: "acceptStateAtom",
  default: false,
})
