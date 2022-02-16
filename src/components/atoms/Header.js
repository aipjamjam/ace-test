import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import Icon from 'react-native-vector-icons/Ionicons'
import { color, style } from '../../styles'

const Header = ({
    transparent,
    shadow,
    title,
    iconLeft = 'arrow-back',
    iconRight = '',
    iconColor = transparent ? '#fff' : color.g800,
    iconLeftPress,
    iconRightPress = () => { },
}) => {
    const navigation = useNavigation()
    return (
        <View style={[styles.wrapper, { backgroundColor: transparent ? null : '#fff', zIndex: transparent && 1, position: transparent && 'absolute', width: '100%' }]}>
            <Icon name={iconLeft} onPress={iconLeftPress ?? (() => navigation.goBack())} style={styles.icon} size={24} color={iconColor} />
            <Text style={{ color: transparent ? '#fff' : color.g800, textTransform: 'uppercase', fontWeight: 'bold', }}>{title}</Text>
            <Icon name={iconRight} onPress={iconRightPress} style={styles.icon} size={30} color={iconColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
        paddingVertical: 18,
        paddingTop: Platform.OS == 'ios' ? isIphoneX() ? 54 : 18 : 18
    },
    icon: {
        width: 30,
        height: 30
    }
})

export default Header