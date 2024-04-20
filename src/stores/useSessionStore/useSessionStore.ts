import { UserLogin } from "@/Interfaces"
import { create } from "zustand"
import { SessionStoreInterface } from "./useSessionStore.types"

export const useSessionStore = create<SessionStoreInterface>(setter => {
    const setSession = (newSession: UserLogin): void => {
        setter({ session: newSession })
    }

    const logOut = (): void => {
        setter({ session: undefined })
    }

    return {
        session: undefined,
        logOut,
        setSession,
    }
})
