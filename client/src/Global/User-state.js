import { create } from 'zustand';
import { useAppStore } from './App-state';

export const useUserStore = create((set) => ({
    fullName: undefined,
    phone: undefined,
    email: undefined,
    password: undefined,
    setUserDetails: (fullName, phone, email, password) => {
        set({ fullName: fullName, phone: phone, email: email, password: password })
        useAppStore.setState({ isLoggedIn: true })
        useAppStore.setState({ currentUser: fullName })
    },
    setUserLogout: () => {
        set({ fullName: undefined, phone: undefined, email: undefined, password: undefined })
        useAppStore.setState({ isLoggedIn: false })
        useAppStore.setState({ currentUser: undefined })

    }
}));