import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import capitalizeFisrtLetter from '../util/capitalizeFirstLetter'

const PeopleListItems = props => {
    const { people, onPress } = props;
    const { first, last } = people.name;
    return (
        <TouchableOpacity onPress={ () => { onPress() }}>
            <View style={style.line}>
                <Image style={ style.avatar } source={{ uri:people.picture.thumbnail }} />
                <Text style={style.lineText}>
                    {  `${capitalizeFisrtLetter(first)} ${capitalizeFisrtLetter(last)}`}
                </Text>  
            </View>
        </TouchableOpacity>
    );

}

const style = StyleSheet.create ({
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
        flex:6
    },
    
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50,
    }

});
export default PeopleListItems;