import { Login } from "@/Screens/Login"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

export const AuthRouter = (): JSX.Element => {
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRouter
