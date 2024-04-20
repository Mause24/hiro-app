import { CustomButtonProps } from "@/Interfaces"
import React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "../Text"
import { useButton } from "./useButton"

export const Button = (props: CustomButtonProps): JSX.Element => {
    const { buttonStyles, textButton, title, rest } = useButton(props)

    return (
        <TouchableOpacity style={buttonStyles} {...rest}>
            <Text style={textButton}>{title}</Text>
        </TouchableOpacity>
    )
}
