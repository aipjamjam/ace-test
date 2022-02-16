import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, FlatList, Image, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { color, style } from '../../styles'
import { FlexRow } from '../atoms'

const { width, height } = Dimensions.get('window')

const GridView = ({
    data = [],
}) => {

    const numColumn = 2
    const navigation = useNavigation()

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight style={{ marginRight: 16, marginBottom: 16 }} underlayColor='transparent' onPress={() => navigation.navigate('Detail', { item })}>
                <View style={[style.shadowLong, { backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }]}>
                    <View style={{ width: (width - 76) / numColumn, height: width / numColumn }}>
                        <Image style={{ width: (width - 76) / numColumn, height: width / numColumn, position: 'absolute' }} source={item.src} />
                        <View style={{ padding: 4, backgroundColor: item.paid == 1 ? color.r100 : color.gr50, paddingHorizontal: 8, borderRadius: 6, position: 'absolute', right: 0, margin: 8 }}>
                            <Text style={{ color: item.paid == 1 ? color.r900 : color.gr900 }}>{item.paid == 1 ? 'Paid' : 'Free'}</Text>
                        </View>
                    </View>
                    <View style={{ padding: 8 }}>
                        <Text>{item.event}</Text>
                        <FlexRow>
                            <Icon name='map-marker-alt' size={8} style={{ paddingRight: 4 }} color={color.primary} />
                            <Text style={{ fontSize: 12, color: color.primary }}>{item.place}</Text>
                        </FlexRow>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={numColumn}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            style={{ flexDirection: 'row', flexWrap: 'wrap' }} />
    )
}

export default GridView