import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from '../../styles'

const FilterView = ({
    onSelect
}) => {

    useEffect(() => {
        setSelected('list')
        onSelect('list')
    }, [])

    const [selected, setSelected] = useState(0)

    const separator = () => {
        return (
            <View style={{ width: 1, backgroundColor: color.g600, marginVertical: 6 }} />
        )
    }

    const renderItem = ({ item }) => {
        const isSelected = item == selected
        return (
            <TouchableWithoutFeedback onPress={() => { setSelected(item); onSelect(item) }}>
                <View style={{ padding: 8 }}>
                    <Icon name={`${item}${isSelected ? "" : "-outline"}`} color={isSelected ? color.primary : color.g500} />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View>
            <FlatList
                data={['list', 'grid']}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={separator}
                style={{ backgroundColor: '#fff', borderRadius: 8 }} />
        </View>
    )
}

export default FilterView