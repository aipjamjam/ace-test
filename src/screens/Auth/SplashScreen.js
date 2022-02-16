import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { color } from '../../styles'

import * as actionsUser from '../../store/user/actions'
import { connect } from 'react-redux'

const SplashScreen = (props) => {

    const {
        saveUser,
        setLoading
    } = props

    useEffect(() => {
        loading()
    }, [])

    const loading = () => {
        AsyncStorage.getItem('user')
            .then(async val => {
                await saveUser(val)
                const time = await splashScreenTime()
                if (time !== null) {
                    setLoading(false)
                }
            })
    }

    const splashScreenTime = async () => {
        return new Promise((v) =>
            setTimeout(
                () => { v('result') },
                3000
            )
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.p16 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: color.primary }}>Kawanlama Group</Text>
        </View>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({
    saveUser: (user) => dispatch(actionsUser.saveUser(user)),
    setLoading: (bool) => dispatch(actionsUser.setLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)