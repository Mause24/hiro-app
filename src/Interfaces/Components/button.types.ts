import { TextStyle, TouchableOpacityProps } from "react-native"

export interface CustomButtonProps extends TouchableOpacityProps {
    title: string
    textStyles?: TextStyle
}
