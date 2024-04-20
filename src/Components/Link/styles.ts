import { StyleSheet } from "react-native"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useStylesLink = () => {
    const styles = StyleSheet.create({
        link: {
            textDecorationStyle: "solid",
            textDecorationLine: "underline",
        },
    })

    return {
        styles,
    }
}
