import React, { Suspense } from "react"
import { SplashScreen } from "./src/Components"
import Router from "./src/Router"

const App = (): JSX.Element => {
    return (
        <Suspense fallback={<SplashScreen />}>
            <Router />
        </Suspense>
    )
}

export default App
