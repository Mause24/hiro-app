import { DARK, FONTS, LIGHT } from "@/Common"
import { Sizes } from "@/Interfaces"
import { StyleSheet, useColorScheme } from "react-native"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useInputStyles = () => {
    const COLORS = useColorScheme() === "dark" ? DARK : LIGHT

    const styles = StyleSheet.create({
        inputContainer: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: COLORS.gray50,
            borderRadius: 8,
        },
        iconContainer: {
            flexDirection: "row",
            flex: 0.13,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },

        input: {
            color: COLORS.white,
            flex: 1,
            fontFamily: FONTS.XpressRoundedRegular,
            fontSize: Sizes.base,
        },
        error: {
            color: COLORS.red,
            paddingTop: 5,
            paddingLeft: 5,
        },
    })

    return {
        styles,
        COLORS,
    }
}
