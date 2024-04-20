import { LinkProps } from "@/Interfaces"
import { Alert, Linking, StyleProp, TextStyle } from "react-native"
import { useStylesLink } from "./styles"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLink = (props: LinkProps) => {
    const { url = "", style, onPress, children, ...rest } = props
    const { styles } = useStylesLink()

    const linkStyles: StyleProp<TextStyle>[] = [styles.link, style]

    const handlePressLink = async (): Promise<void> => {
        try {
            await Linking.openURL(url)
        } catch (error) {
            Alert.alert(error as string)
        }
    }

    return {
        children,
        linkStyles,
        onPressLink: onPress ?? handlePressLink,
        rest,
    }
}
