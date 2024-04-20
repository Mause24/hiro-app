import { StateFormLogin } from "@/Interfaces"
import { useSessionStore } from "@/stores"
import { useLoginStyles } from "./styles"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLogin = () => {
    const initialState: StateFormLogin = {
        username: "",
        password: "",
    }
    // STATES
    const { styles, COLORS } = useLoginStyles()
    const { setSession } = useSessionStore()

    //FUNCTIONS

    const onHandleSubmit = (form: StateFormLogin): void => {
        setSession(form)
    }
    //RETURNS

    return {
        styles,
        initialState,
        onHandleSubmit,
        COLORS,
    }
}
