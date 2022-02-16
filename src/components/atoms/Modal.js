import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FlexRow from './FlexRow'

const Modal = ({
    title,
    children,
}) => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Pressable onPress={() => navigation.goBack()} style={{ width: '35%', height: '100%' }} />
            <View style={{ width: '65%', height: '100%', backgroundColor: '#fff', alignSelf: 'flex-end', padding: 24, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                {
                    title &&
                    <FlexRow style={{ paddingBottom: 16 }}>
                        <Icon name='close-outline' size={24} style={{ paddingRight: 4 }} onPress={() => navigation.goBack()} />
                        <Text style={{ fontSize: 18 }}>{title}</Text>
                    </FlexRow>
                }
                {
                    children
                }
            </View>
        </View>
    )
}

export default Modal