import { CustomTextProps } from "@/Interfaces"
import React from "react"
import { Text as NativeText } from "react-native"
import { useText } from "./useText"

export const Text = (props: CustomTextProps): JSX.Element => {
    const { textStyles, rest } = useText(props)

    return <NativeText style={textStyles} {...rest} />
}
