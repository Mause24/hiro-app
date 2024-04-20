import { CustomInputProps } from "@/Interfaces"
import React from "react"
import { TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import { Text } from "../Text"
import { useInput } from "./useInput"

export const Input = (props: CustomInputProps): JSX.Element => {
    const {
        inputStyles,
        error,
        styles,
        icon,
        placeholderTextColor,
        COLORS,
        textColor,
        rest,
    } = useInput(props)
    return (
        <View>
            <View style={styles.inputContainer}>
                {icon && (
                    <View style={styles.iconContainer}>
                        <Icon
                            size={20}
                            color={placeholderTextColor ?? COLORS[textColor]}
                            name={icon}
                        />
                    </View>
                )}
                <TextInput
                    placeholderTextColor={
                        placeholderTextColor ?? COLORS[textColor]
                    }
                    style={inputStyles}
                    {...rest}
                />
            </View>
            {error && (
                <Text
                    font="XpressRoundedRegular"
                    size="sm"
                    style={styles.error}>
                    {error}
                </Text>
            )}
        </View>
    )
}
