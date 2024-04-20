import { IMAGES } from "@/Common"
import { Button, Input, Link, Text } from "@/Components"
import { Formik } from "formik"
import React from "react"
import {
    Alert,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native"
import { useLogin } from "./useLogin"

export const Login = (): JSX.Element => {
    const { styles, onHandleSubmit, initialState } = useLogin()

    return (
        <ImageBackground
            resizeMethod="resize"
            resizeMode="cover"
            source={{
                uri: "https://wallpaperslinks.com/app/king-include/uploads/2022/10/384135-city_aerial_view_night_166013_1080x1920.jpg",
            }}
            style={styles.container}>
            <View style={styles.overlay} />
            <View style={styles.scrollViewContainer}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Text font="XpressRoundedHeavy" variant="white" size="3xl">
                        Inicio de Sesión
                    </Text>
                    <Formik
                        onSubmit={values => onHandleSubmit(values)}
                        initialValues={initialState}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                        }) => (
                            <View style={styles.formContainer}>
                                <View style={styles.form}>
                                    <Input
                                        onChangeText={handleChange("username")}
                                        onBlur={handleBlur("username")}
                                        value={values.username}
                                        icon="user"
                                        placeholder="Ingrese su usuario"
                                    />
                                    <Input
                                        secureTextEntry
                                        onChangeText={handleChange("password")}
                                        onBlur={handleBlur("password")}
                                        value={values.password}
                                        icon="lock"
                                        placeholder="Ingrese su contraseña"
                                    />
                                </View>
                                <View style={styles.forgotPassContainer}>
                                    <Link
                                        size="sm"
                                        variant="white"
                                        onPress={() =>
                                            Alert.alert("Pues recuérdala")
                                        }>
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </View>
                                <View style={styles.buttonsLoginContainer}>
                                    <Button
                                        style={styles.loginButton}
                                        title="Iniciar Sesión"
                                        onPress={() => handleSubmit()}
                                    />
                                    <Text variant="white" size="xl">
                                        o
                                    </Text>
                                    <View
                                        style={
                                            styles.externalLoginButtonsContainer
                                        }>
                                        <TouchableOpacity
                                            onPress={() =>
                                                Alert.alert("Google")
                                            }>
                                            <Image
                                                resizeMethod="resize"
                                                resizeMode="contain"
                                                style={
                                                    styles.externalLoginButton
                                                }
                                                source={IMAGES.googleLogo}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() =>
                                                Alert.alert("Facebook")
                                            }>
                                            <Image
                                                resizeMethod="resize"
                                                resizeMode="contain"
                                                style={
                                                    styles.externalLoginButton
                                                }
                                                source={IMAGES.facebookLogo}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => Alert.alert("X")}>
                                            <Image
                                                resizeMethod="resize"
                                                resizeMode="contain"
                                                style={
                                                    styles.externalLoginButton
                                                }
                                                source={IMAGES.xLogo}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    </Formik>
                    <View style={styles.registerContainer}>
                        <Text variant="white" size="sm">
                            ¿Aún no eres parte de nuestra comunidad?,
                        </Text>
                        <Link
                            onPress={() => Alert.alert("¡Regístrate!")}
                            variant="white"
                            size="sm">
                            ¡ÚNETE!
                        </Link>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
