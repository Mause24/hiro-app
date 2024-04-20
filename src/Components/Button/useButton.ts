import { CustomButtonProps } from "@/Interfaces"
import { StyleSheet } from "react-native"
import { useButtonStyles } from "./styles"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useButton = (props: CustomButtonProps) => {
    const { title, textStyles, style, ...rest } = props
    const { styles } = useButtonStyles()

    const buttonStyles = StyleSheet.compose(styles.button, style)

    const textButton = StyleSheet.compose(styles.text, textStyles)

    return {
        buttonStyles,
        textButton,
        title,
        rest,
    }
}
