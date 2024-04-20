import { stylesSplashScreen } from "./styles"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSplashScreen = () => {
    const { styles } = stylesSplashScreen()

    return {
        styles,
    }
}
