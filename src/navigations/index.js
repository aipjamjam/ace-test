import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import * as actionsUser from '../store/user/actions'
import SplashScreen from '../screens/Auth/SplashScreen'
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'
import Icon from 'react-native-vector-icons/Ionicons'
import { forSlide } from '../styles'
import Wishlist from '../screens/Home/Wishlist'

Icon.loadFont()
const Stack = createStackNavigator()

const AppContainer = (props) => {

    const {
        user,
        loading,
        setLoading,
    } = props

    useEffect(async () => {
        console.disableYellowBox = true
        const time = await splashScreenTime()
        if (time !== null) {
            setLoading(false)
        }
    }, [])

    const splashScreenTime = async () => {
        return new Promise((v) =>
            setTimeout(
                () => { v('result') },
                3000
            )
        )
    }

    if (loading) {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}>
                    <Stack.Screen name='Midleware' component={SplashScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}>
                {
                    user ?
                        <Stack.Screen name='Midleware' component={AppNavigator} options={{ headerShown: false }} /> :
                        <Stack.Screen name='Auth' component={AuthNavigator} options={{ headerShown: false }} />
                }
                {/* <Stack.Group screenOptions={{ presentation: 'transparentModal' }}> */}
                <Stack.Screen
                    name='Wishlist'
                    component={Wishlist}
                    options={{
                        presentation: 'transparentModal',
                        gestureDirection: 'horizontal',
                        cardOverlayEnabled: true,
                        cardStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
                        cardStyleInterpolator: forSlide,
                        headerShown: false,
                    }} />
                {/* </Stack.Group> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = state => {
    const { userReducer } = state
    return {
        user: userReducer.user,
        loading: userReducer.loading,
    }
}

const mapDispatchToProps = dispatch => ({
    setLoading: (bool) => dispatch(actionsUser.setLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)