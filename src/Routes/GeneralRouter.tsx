import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import TabRouter from "./TabRouter"

export const GeneralRouter = (): JSX.Element => {
    const GeneralStack = createStackNavigator()

    return (
        <GeneralStack.Navigator>
            <GeneralStack.Screen
                options={{ headerShown: false }}
                name="Tabs"
                component={TabRouter}
            />
        </GeneralStack.Navigator>
    )
}
