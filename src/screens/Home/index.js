import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button, FlexRow } from '../../components/atoms'

import * as actionsUser from '../../store/user/actions'
import { color, style } from '../../styles'
import { FilterView, GridView, ListView } from '../../components/molecules'
import { dataDummy } from '../../data'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = (props) => {

    const {
        user,
        setLoading,
    } = props

    const currentTime = new Date().getHours()
    const [filter, setFilter] = useState(0)

    const logout = () => {
        AsyncStorage.clear()
        setLoading(true)
    }

    return (
        <View style={[{ padding: 24, paddingBottom: 0, flex: 1, }]}>
            <FlexRow spaceBetween style={{ paddingTop: 16 }}>
                <View>
                    <Text style={styles.title}>Hello, {user}</Text>
                    <Text style={styles.title}>{(currentTime < 12 ? 'Good Morning' : currentTime < 15 ? 'Good Afternoon' : currentTime < 18 ? 'Good Evening' : 'Good Night') + ' :)'}</Text>
                </View>
                <Pressable onPress={logout}>
                    <FlexRow style={{ backgroundColor: color.p16, padding: 8, paddingHorizontal: 14, borderRadius: 8 }}>
                        <Text style={{ fontWeight: 'bold', color: color.primary }}>Logout</Text>
                        <Icon name='log-out-outline' size={20} color={color.primary} style={{ paddingLeft: 8 }} />
                    </FlexRow>
                </Pressable>
            </FlexRow>
            <View style={{ paddingTop: 16 }} />
            <FlexRow spaceBetween style={{ paddingBottom: 8 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: color.g800 }}>Our Events</Text>
                <FlexRow>
                    <Pressable style={{ marginRight: 8 }} onPress={() => props.navigation.navigate('Wishlist')}>
                        <FlexRow style={{ padding: 8, backgroundColor: '#fff', borderRadius: 8 }}>
                            <Text style={{ color: color.g700 }}>Wishlist</Text>
                            <Icon name='heart' color={color.r600} style={{ paddingLeft: 4 }} />
                        </FlexRow>
                    </Pressable>
                    <FilterView onSelect={(v) => setFilter(v)} />
                </FlexRow>
            </FlexRow>
            {
                filter == 'list' ? <ListView data={dataDummy} /> : <GridView data={dataDummy} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: color.g800,
        fontSize: 26,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
})

const mapStateToProps = state => {
    const { userReducer } = state
    return {
        user: userReducer.user
    }
}

const mapDispatchToProps = dispatch => ({
    setLoading: (bool) => dispatch(actionsUser.setLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)