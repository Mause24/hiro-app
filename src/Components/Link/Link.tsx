import { LinkProps } from "@/Interfaces"
import React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "../Text"
import { useLink } from "./useLink"

export const Link = (props: LinkProps): JSX.Element => {
    const { linkStyles, onPressLink, children, rest } = useLink(props)

    return (
        <TouchableOpacity onPress={onPressLink}>
            <Text style={linkStyles} {...rest}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}
