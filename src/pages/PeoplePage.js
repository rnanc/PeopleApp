import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import PeopleList from '../components/PeopleList'

export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoples :[],
      loading: false,
      error: false,
    };
  } 

  componentDidMount(){
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=15')
        .then(response =>{
          const{results} = response.data;
          this.setState({
            peoples: results,
            loading: false
          });
        }).catch( error => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    }, 1500)
  }

  renderLoading() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#6ca2f7"/>;
     }  if (this.state.error){
      return <Text style={style.error}>ERROR</Text>
     } 
     else {
      return <PeopleList 
      peoples={this.state.peoples} 
      onPress= {pageParams => { this.props.navigation.navigate('PeopleDetailPage', pageParams) }} />;
     }
  }
  
  render(){
    return (
      <View style={ style.container }>
        { this.renderLoading() }
      </View>
    );
  } 
};

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },

  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 25,
  },
})