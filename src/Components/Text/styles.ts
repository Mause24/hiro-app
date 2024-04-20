import { DARK, LIGHT } from "@/Common"
import { StyleSheet, useColorScheme } from "react-native"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTextStyles = () => {
    const COLORS = useColorScheme() === "dark" ? DARK : LIGHT

    const variants = StyleSheet.create({
        primary: {
            color: COLORS.primary,
        },
        secondary: {
            color: COLORS.secondary,
        },
        white: {
            color: COLORS.white,
        },
        text: {
            color: COLORS.text,
        },
    })

    return {
        variants,
        COLORS,
    }
}
