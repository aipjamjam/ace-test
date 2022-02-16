import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Button, FlexRow, Header } from '../../components/atoms'
import { color, style } from '../../styles'

import * as actionsUser from '../../store/user/actions'
import { connect } from 'react-redux'

const { width } = Dimensions.get('window')

const DetailEvent = (props) => {

    const {
        events,
        addEvent,
    } = props

    useEffect(() => {
        handleCheck()
    }, [])

    const item = props.route.params.item

    const [exist, setExist] = useState(false)

    const handleCheck = () => {
        const x = events.find(e => e === item)
        if (x) {
            setExist(true)
        }
    }

    const handleAddWishlist = (v) => {
        var index = events.indexOf(v)
        if (index > -1) {
            events.splice(index, 1)
            addEvent(events)
            setExist(false)
        } else {
            const data = [v, ...events]
            addEvent(data)
            setExist(true)
        }
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <Header title='Detail Event' transparent />
                <Image source={item.src} style={{ width: width, height: width / 1.2 }} />
                <View style={style.body}>
                    <FlexRow spaceBetween>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: color.g800 }}>{item.event}</Text>
                            <FlexRow>
                                <Icon name='map-marker-alt' size={10} style={{ paddingRight: 4 }} color={color.primary} />
                                <Text style={{ color: color.primary }}>{item.place}</Text>
                            </FlexRow>
                        </View>
                        <View style={{ padding: 4, backgroundColor: item.paid == 1 ? color.r100 : color.gr50, paddingHorizontal: 8, borderRadius: 6 }}>
                            <Text style={{ color: item.paid == 1 ? color.r900 : color.gr900 }}>{item.paid == 1 ? 'Paid' : 'Free'}</Text>
                        </View>
                    </FlexRow>
                    <View style={{ paddingTop: 24 }} />
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: color.g800 }}>Description</Text>
                    <Text style={{ color: color.g700 }}>{item.detail}</Text>
                </View>
            </ScrollView>
            <View style={{ padding: 4, paddingHorizontal: 24 }}>
                <Button title={exist ? 'Remove from Wishlist' : 'Add to Wishlist'} added={exist} onPress={() => handleAddWishlist(item)} />
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    const { userReducer } = state
    return {
        events: userReducer.events,
    }
}

const mapDispatchToProps = dispatch => ({
    addEvent: (item) => dispatch(actionsUser.addEvent(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailEvent)