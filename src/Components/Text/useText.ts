import { FONTS } from "@/Common"
import { CustomTextProps, Sizes } from "@/Interfaces"
import { StyleProp, TextStyle } from "react-native"
import { useTextStyles } from "./styles"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useText = (props: CustomTextProps) => {
    const { variants, COLORS } = useTextStyles()
    const {
        variant = "primary",
        size = "base",
        style,
        font = "XpressRoundedHeavy",
        color,
        ...rest
    } = props

    const textStyles: StyleProp<TextStyle>[] = [
        variants[variant],
        {
            fontSize: Sizes[size],
            fontFamily: FONTS[font],
        },
        color && { color: COLORS[color] },
        style,
    ]

    return {
        textStyles,
        rest,
    }
}
