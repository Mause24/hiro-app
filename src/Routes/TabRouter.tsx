import { Home } from "@/Screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"

const renderTabIcon =
    (name: string) =>
    (props: { focused: boolean; color: string; size: number }): JSX.Element =>
        <Icon name={name} size={props.size} color={props.color} />

export const TabRouter = (): JSX.Element => {
    const TabBottomStack = createBottomTabNavigator()

    return (
        <TabBottomStack.Navigator>
            <TabBottomStack.Screen
                options={{ tabBarIcon: renderTabIcon("ticket") }}
                name="Home"
                component={Home}
            />
        </TabBottomStack.Navigator>
    )
}

export default TabRouter
