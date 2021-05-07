import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import axios from 'axios';
import {parse} from '@babel/core';

export class UbahProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.route.params.id,
      nama: this.props.route.params.nama,
      email: this.props.route.params.email,
      telp: this.props.route.params.telp,
      alamat: this.props.route.params.alamat,
    };
  }

  handleUpdate() {
    // console.log(this.state)
    axios
      .put(
        `http://192.168.0.103:3010/profil/ubahProfil/${this.state.id}`,
        this.state,
      )
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
        <Text style={styles.title}> Ubah Nama </Text>
        <TextInput value={this.state.nama}
          placeholder="Nama"
          onChangeText={data => {
            this.setState({nama: data});
          }}
        />
        <Text style={styles.title}> Ubah Email</Text>
        <TextInput
          value={this.state.email}
          placeholder="Email"
          onChangeText={data => {
            this.setState({email: data });
          }}
        />
        <Text style={styles.title}> Ubah No. Telp </Text>
        <TextInput
          value={this.state.telp}
          placeholder="No. Telp"
          onChangeText={data => {
            this.setState({telp: data});
          }}
        />
        <Text style={styles.title}> Ubah Alamat </Text>
        <TextInput
          value={this.state.alamat}
          placeholder="Alamat"
          onChangeText={data => {
            this.setState({alamat: data});
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleUpdate.bind(this)}>
          <Text style={styles.title}>Ubah Profil</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity> */}
      </View>
    );
  }
}

export default UbahProfil;

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