import { StyleSheet } from "react-native"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const stylesSplashScreen = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
        },
    })

    return { styles }
}
