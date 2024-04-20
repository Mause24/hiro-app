import { DARK, LIGHT } from "@/Common"
import { StyleSheet, useColorScheme } from "react-native"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLoginStyles = () => {
    const COLORS = useColorScheme() === "dark" ? DARK : LIGHT

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: "relative",
            justifyContent: "center",
        },
        scrollViewContainer: {
            flex: 0.7,
        },
        scrollView: {
            rowGap: 40,
            justifyContent: "center",
            paddingHorizontal: 20,
        },
        formContainer: {
            rowGap: 15,
        },
        form: {
            rowGap: 30,
        },
        overlay: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        text: {
            color: COLORS.white,
        },
        forgotPassContainer: {
            flexDirection: "row",
            justifyContent: "flex-end",
        },
        buttonsLoginContainer: {
            width: "70%",
            rowGap: 15,
            alignSelf: "center",
            alignItems: "center",
        },
        externalLoginButtonsContainer: {
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
        },
        externalLoginButton: {
            width: 45,
            height: 45,
        },
        loginButton: {
            marginTop: 15,
        },
        registerContainer: {
            flexDirection: "row",
        },
    })

    return { styles, COLORS }
}
