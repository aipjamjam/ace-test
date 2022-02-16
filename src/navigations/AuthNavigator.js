import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import Login from '../screens/Auth/Login'

const Stack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthNavigator