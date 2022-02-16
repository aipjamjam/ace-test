import React from 'react'
import { View } from 'react-native'

const FlexRow = ({
    children,
    center,
    spaceBetween,
    spaceAround,
    flexEnd,
    style,
}) => {
    return (
        <View
            style={[style, {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:
                    center ? 'center' :
                        spaceBetween ? 'space-between' :
                            spaceAround ? 'space-around' :
                                flexEnd ? 'flex-end' : "flex-start"
            }]}>
            {children}
        </View>
    )
}

export default FlexRow