import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Line = ({ label = "", content = "" }) => {
    return(        
            <View style={ style.line }>
                <Text style={ [style.cell, {fontWeight: 'bold'}, { flex: 1 }, label.length > 10 ? style.longLabel : null ]}>{ label }</Text>
                <Text style={ [style.cell, { flex: 3 } ] }>{ content }</Text>
            </View>
    )
}

const style = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    
    cell: {
        fontSize: 18,
        paddingLeft: 5,
        borderWidth: 1,
    },

    longLabel: {
        fontSize:13,
    }
})

export default Line;