import react, { createRef } from 'react'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { color, style } from '../../styles'

const Input = ({
    label,
    onPress,
    textLeft,
    value,
    onChangeText = () => { },
    password = false,
    keyboardType,
    placeholder = 'placeholder',
    reset,
    iconLeft,
    iconRight,
    iconRightColor,
    subtitle,
    error,
}) => {

    const resets = createRef()

    const handleReset = () => {
        resets.current.clear()
    }

    return (
        <View style={{ paddingVertical: 8 }}>
            {
                label && <Text style={[style.title, { paddingBottom: 8 }]}>{label}</Text>
            }
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={[styles.wrapper, { paddingLeft: (textLeft || iconLeft) && 0 }]}>
                    {
                        textLeft &&
                        <View style={styles.textLeft}>
                            <Text style={{ color: color.g900 }}>{textLeft}</Text>
                        </View>
                    }
                    {
                        iconLeft &&
                        <View style={styles.textLeft}>
                            <Icon name={iconLeft} size={20} color={color.primary} />
                        </View>
                    }
                    <TextInput
                        value={value}
                        ref={resets}
                        onChangeText={onChangeText}
                        secureTextEntry={password}
                        keyboardType={keyboardType}
                        style={[styles.input, { paddingLeft: (textLeft || iconLeft) && 10 }]}
                        placeholder={placeholder} />
                    {
                        reset && resets &&
                        <Icon name='close-circle' size={24} onPress={handleReset} color={color.g500} style={{ paddingRight: iconRight && 6 }} />
                    }
                    {
                        iconRight &&
                        <Icon name={iconRight} size={28} color={iconRightColor ?? color.g700} />
                    }
                </View>
            </TouchableWithoutFeedback>
            {
                subtitle &&
                <View style={{ paddingTop: 4 }}>
                    <Text style={[styles.subtitle, { color: error ? color.r700 : color.g600 }]} >{subtitle}</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 50,
        // paddingHorizontal: 10,
        color: color.g900,
        paddingLeft: 8
    },
    label: {
        fontWeight: '600'
    },
    subtitle: {
        fontSize: 12,
    },
    textLeft: {
        height: 50,
        backgroundColor: color.p16,
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        paddingHorizontal: 16,
        justifyContent: 'center'
    },
    wrapper: {
        // paddingVertical: 18,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: color.p8,
    }
})

export default Input