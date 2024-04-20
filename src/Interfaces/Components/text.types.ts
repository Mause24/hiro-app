import { COLORS, FONTS } from "@/Common"
import { Sizes, Variants } from "@/Interfaces"
import { TextProps } from "react-native"

export interface CustomTextProps extends TextProps {
    variant?: Variants
    size?: keyof typeof Sizes
    font?: keyof typeof FONTS
    color?: COLORS
}
