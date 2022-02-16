import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import Home from '../screens/Home'
import DetailEvent from '../screens/Home/DetailEvent'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Detail' component={DetailEvent} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AppNavigator