import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PeopleListItems from './PeopleListItems'

const PeopleList = props => {
    const { peoples, onPress } = props;
    const items = peoples.map(people => {
        return (
            <PeopleListItems key={ people.name.first } people={ people } onPress={ onPress } />
            );
    });
   return (
    <View style={style.container}>
        {items}
    </View>
    )
};



const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
});

export default PeopleList;