import { useHomeStyles } from "./styles"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useHome = () => {
    const styles = useHomeStyles()

    return {
        styles,
    }
}
