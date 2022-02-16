import React, { useState } from 'react'
import { View, Text, FlatList, TouchableHighlight, Image, Pressable } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'

import { Modal, FlexRow, Button } from '../../components/atoms'
import { color } from '../../styles'

import * as actionsUser from '../../store/user/actions'

const Wishlist = (props) => {

    const {
        events,
        addEvent,
    } = props

    const [extraData, setExtraData] = useState(true)

    const handleReset = () => {
        let x = []
        addEvent(x)
        setExtraData(v => !v)
    }

    const handleRemove = (v) => {
        var index = events.indexOf(v)
        if (index > -1) {
            events.splice(index, 1)
            addEvent(events)
            setExtraData(v => !v)
        }
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight underlayColor='transparent' onPress={() => props.navigation.navigate('Detail', { item })}>
                <FlexRow style={{ backgroundColor: '#fff', paddingVertical: 8 }}>
                    <FlexRow style={{ flex: 1 }}>
                        <Image source={item.src} style={{ height: 26, width: 30, borderRadius: 4 }} />
                        <View style={{ paddingLeft: 12 }}>
                            <Text style={{ fontSize: 16 }}>{item.event}</Text>
                            <FlexRow>
                                <Icon name='map-marker-alt' size={8} style={{ paddingRight: 4 }} color={color.primary} />
                                <Text style={{ fontSize: 12, color: color.primary }}>{item.place}</Text>
                            </FlexRow>
                        </View>
                    </FlexRow>
                    <Icon2 name='trash-outline' size={16} color={color.g600} onPress={() => handleRemove(item)} />
                </FlexRow>
            </TouchableHighlight>
        )
    }

    return (
        <Modal
            title='My Wishlist'>
            <FlatList
                data={events}
                extraData={extraData}
                ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: color.g300 }} />}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem} />
            <Button secondary title='Clear My Wishlist' iconLeft='refresh' itemColor={color.primary} onPress={handleReset} />
        </Modal>
    )
}

const mapStateToProps = state => {
    const { userReducer } = state
    return {
        events: userReducer.events
    }
}

const mapDispatchToProps = dispatch => ({
    addEvent: (item) => dispatch(actionsUser.addEvent(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)