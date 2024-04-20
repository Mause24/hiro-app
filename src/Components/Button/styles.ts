import { DARK, LIGHT } from "@/Common"
import { StyleSheet, useColorScheme } from "react-native"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useButtonStyles = () => {
    const COLORS = useColorScheme() === "dark" ? DARK : LIGHT

    const styles = StyleSheet.create({
        button: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.white,
            borderRadius: 18,
            paddingVertical: 15,
        },
        text: {},
    })

    return {
        styles,
    }
}
