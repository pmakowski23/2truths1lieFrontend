import { createContext } from "react";

export const IsAdminContext = createContext([false, () => {}]);
export const UserContext = createContext([null, () => {}]);
