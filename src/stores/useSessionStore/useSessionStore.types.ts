import { UserLogin } from "@/Interfaces"

export interface SessionStoreInterface {
    session?: UserLogin
    logOut: () => void
    setSession: (newState: UserLogin) => void
}
