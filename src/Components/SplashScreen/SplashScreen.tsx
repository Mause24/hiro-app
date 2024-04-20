import React from "react"
import { View } from "react-native"
import { Text } from "../Text"
import { useSplashScreen } from "./useSplashScreen"

export const SplashScreen = (): JSX.Element => {
    const { styles } = useSplashScreen()

    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    )
}
