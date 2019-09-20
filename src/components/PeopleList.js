import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PeopleListItems from './PeopleListItems'

const PeopleList = props => {
    const { peoples, onPress } = props;

   return (
    <FlatList
        style={style.container}
        data={peoples}
        renderItem={({ item }) => (
            <PeopleListItems
            people={item} 
            onPress={ onPress } />
        )}
        keyExtractor={ item => item.name.first }/>    
    );
};



const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
});

export default PeopleList;