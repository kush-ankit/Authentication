import { create } from 'zustand'

export const useAppStore = create((set) => ({
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