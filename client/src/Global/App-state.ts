import { create } from "zustand";

export interface Appstate {
    isInitialized: boolean | undefined;
    isLoggedIn: boolean | undefined;
    currentUser: string | undefined;
    setIsInitialized: (state: boolean) => void;
    setIsLoggedIn: (state: boolean) => void;
    setCurrentUser: (user: string) => void;
}

export const useAppStore = create<Appstate>((set) => ({
    isInitialized: false,
    currentUser: undefined,
    isLoggedIn: false,
    setIsInitialized: (state) => {
        set({ isInitialized: state });
    },
    setIsLoggedIn: (state) => {
        set({ isLoggedIn: state });
    },
    setCurrentUser: (user) => {
        set({ currentUser: user })
    }
}))