import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function TodoItem(props) {
    console.log(props, "props in item")
    return (
        <View>
            <TouchableOpacity onPress={() => props.pressHandler (props.item.key)}>
            <Text style={styles.item}>{props.item.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    item:{
        padding:16,
        marginTop:16,
        borderColor:"#bbb",
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10,
    }
})