import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import axios from 'axios';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      email: '',
      telp: '',
      alamat: '',
    };
  }

  handleAdd() {
    // console.log(this.state)
    axios
      .post('http://192.168.0.103:3010/profil/register', this.state)
      .then(response => {
        // console.log(response)
        alert(response.data);
        this.props.navigation.navigate('App');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}> Input Nama </Text>
        <TextInput
          placeholder="Nama"
          onChangeText={data => {
            this.setState({nama: data});
          }}
        />
        <Text style={styles.title}> Input Email </Text>
        <TextInput
          placeholder="Email"
          onChangeText={data => {
            this.setState({email: data});
          }}
        />
        <Text style={styles.title}> Input No. Telp </Text>
        <TextInput
          placeholder="No. Telp"
          onChangeText={data => {
            this.setState({telp: data});
          }}
        />
        <Text style={styles.title}> Input Alamat </Text>
        <TextInput
          placeholder="Alamat"
          onChangeText={data => {
            this.setState({alamat: data});
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleAdd.bind(this)}>
          <Text style={styles.title}>Register</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity> */}
      </View>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});