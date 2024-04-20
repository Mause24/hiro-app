import { GestureResponderEvent, TextStyle } from "react-native"
import { CustomTextProps } from "./text.types"

export interface LinkProps extends CustomTextProps {
    url?: string
    children: string
    style?: TextStyle
    onPress?: (event: GestureResponderEvent) => void
}
