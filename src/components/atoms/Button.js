import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { color } from '../../styles'

const Button = ({
    onPress = () => { },
    outStyle,
    title = 'button',
    iconRight,
    itemColor = '#fff',
    secondary,
    iconLeft,
    disabled,
    added,
}) => {
    return (
        <TouchableHighlight underlayColor='transparent' disabled={disabled} onPress={onPress} style={[outStyle, styles.outStyle]}>
            <View style={[styles.wrapper, { backgroundColor: added ? color.secondary : disabled ? color.g400 : secondary ? color.p8 : color.primary, }]}>
                {
                    iconLeft &&
                    <Icon name={iconLeft} size={18} style={{ paddingRight: 8 }} color={itemColor} />
                }
                <Text style={{ color: itemColor, fontWeight: 'bold' }}>{title}</Text>
                {
                    iconRight &&
                    <Icon name={iconRight} size={18} style={{ paddingLeft: 8 }} color={itemColor} />
                }
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 50,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outStyle: {
        marginVertical: 8
    }
})

export default Button