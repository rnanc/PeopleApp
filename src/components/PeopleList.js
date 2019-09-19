import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PeopleList = props => {
    const {people} = props;
    const textElements = people.map(people => {
        const {first} = people.name;
        return (
            <View key={first} style={style.line}>
        <Text style={style.lineText}>{first}</Text>
            </View>
        );
    })
   return (
    <View style={style.container}>
        {textElements}
    </View>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },

    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row',
    },

    lineText: {
        fontSize: 20,
        paddingLeft: 15,
    }
});

export default PeopleList;