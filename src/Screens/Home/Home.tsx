import { Text } from "@/Components"
import { useSessionStore } from "@/stores"
import React from "react"
import { Button, View } from "react-native"

export const Home = (): JSX.Element => {
    // const { styles } = useHome()

    const { logOut } = useSessionStore()

    return (
        <View>
            <Text>Home</Text>
            <Button title="Press me" onPress={logOut} />
        </View>
    )
}
