import { COLORS } from "@/Common"
import { TextInputProps } from "react-native"

export interface CustomInputProps extends TextInputProps {
    error?: string
    icon?: string
    textColor?: COLORS
}
