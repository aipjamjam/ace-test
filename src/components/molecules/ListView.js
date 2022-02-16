import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { color } from '../../styles'
import { FlexRow } from '../atoms'

const ListView = ({
    data = [],
}) => {

    const navigation = useNavigation()

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight underlayColor='transparent' style={{ marginVertical: 6 }} onPress={() => navigation.navigate('Detail', { item })}>
                <FlexRow style={{ backgroundColor: '#fff', borderRadius: 8, padding: 8 }}>
                    <Image source={item.src} style={{ height: 60, width: 90, borderRadius: 8 }} />
                    <FlexRow spaceBetween style={{ flex: 1 }}>
                        <View style={{ paddingLeft: 12 }}>
                            <Text style={{ fontSize: 16 }}>{item.event}</Text>
                            <FlexRow>
                                <Icon name='map-marker-alt' size={8} style={{ paddingRight: 4 }} color={color.primary} />
                                <Text style={{ fontSize: 12, color: color.primary }}>{item.place}</Text>
                            </FlexRow>
                        </View>
                        <View style={{ padding: 4, backgroundColor: item.paid == 1 ? color.r100 : color.gr50, paddingHorizontal: 8, borderRadius: 6 }}>
                            <Text style={{ color: item.paid == 1 ? color.r900 : color.gr900 }}>{item.paid == 1 ? 'Paid' : 'Free'}</Text>
                        </View>
                    </FlexRow>
                </FlexRow>
            </TouchableHighlight>
        )
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem} />
    )
}

export default ListView