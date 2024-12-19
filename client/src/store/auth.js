import { create } from "zustand"

export const useAuthStore = create((set) => ({
    user:null, // save user data here after login

    // save user data on login
    login: (userData) => set({ user: userData }),

    // save useer data on logout
    logout: () => set({ user: null })
}))

