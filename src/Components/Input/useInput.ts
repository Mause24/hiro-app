import { CustomInputProps } from "@/Interfaces"
import { StyleSheet } from "react-native"
import { useInputStyles } from "./styles"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useInput = (props: CustomInputProps) => {
    const { styles, COLORS } = useInputStyles()
    const {
        error,
        style,
        icon,
        placeholderTextColor,
        textColor = "white",
        ...rest
    } = props
    const inputStyles = StyleSheet.compose(styles.input, style)

    return {
        inputStyles,
        styles,
        icon,
        error,
        placeholderTextColor,
        textColor,
        COLORS,
        rest,
    }
}
