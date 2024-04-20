import { SvgProps } from "react-native-svg"
import { Variants } from "../Hooks"

export interface IconProps extends SvgProps {
    src: string
    uri?: string
    color?: string
    size?: number
    height?: number
    width?: number
    variant?: Variants
}
