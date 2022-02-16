import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dimensions, Image, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Button, Input } from '../../components/atoms'
import { style } from '../../styles'

import * as actionsUser from '../../store/user/actions'
import { connect } from 'react-redux'

const { width } = Dimensions.get('screen')

const Login = (props) => {

    const {
        setLoading
    } = props

    const [name, setName] = useState('')

    const login = async () => {
        setLoading(true)
        await AsyncStorage.setItem('user', name)
    }

    return (
        <View style={[style.container, { padding: 24, justifyContent: 'center' }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image source={require('../../assets/illustrations/login.png')} style={{ height: width / 1.5, width: width - 50, resizeMode: 'contain' }} />
            </View>
            <Input
                iconLeft='person'
                placeholder='Input your name...'
                label='Input your name before start the app'
                onChangeText={v => setName(v)}
                reset />
            <Button title='Next' iconRight='arrow-forward' disabled={!name} onPress={login} />
        </View>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({
    setLoading: (bool) => dispatch(actionsUser.setLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)