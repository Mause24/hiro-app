import { useSessionStore } from "@/stores"
import { NavigationContainer } from "@react-navigation/native"
import { isEmpty } from "lodash"
import React from "react"
import { AuthRouter, GeneralRouter } from "./Routes"

const Router = (): JSX.Element => {
    const { session } = useSessionStore()

    return (
        <NavigationContainer>
            {!isEmpty(session) ? <GeneralRouter /> : <AuthRouter />}
        </NavigationContainer>
    )
}

export default Router
