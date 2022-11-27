import { atom, useSetRecoilState } from "recoil";
import { UserRole } from "../graphql/generated";

export const userIdState = atom({
  key: "userId",
  default: "9a11cec5-2fd6-43d2-919b-fbe4f4c44184",
});
export const userRole = atom({
  key: "userRole",
  default: UserRole.Guest,
});
