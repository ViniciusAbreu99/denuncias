import React from 'react';
import { View, Picker, TouchableOpacity } from 'react-native';
import { Divider, Text, TextInput, Card, Button } from 'react-native-paper';

import { Styles } from './styles.js';

export default function Registration({ navigation }) {
    const [selectedValue, setSelectedValue] = React.useState('');


    return (
        <View style={Styles.Container}>
            <Text style={Styles.Title}>Cadastro de denúncias:</Text>
            <Divider />
            <Picker
                selectedValue={selectedValue}
                style={Styles.Picker}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);
                    console.log(itemValue);
                }}
            >
                <Picker.Item label="Selecione uma opção" value="" />
                <Picker.Item label="Roubo" value="ROUBO" />
                <Picker.Item label="Furto" value="FURTO" />
            </Picker>
            <TextInput
                label="Email"
                value='email@email.com'
                disabled={true}
                mode='outlined'
            />
            <Text style={Styles.InfoPhoto}>Toque para tirar uma foto</Text>
            <TouchableOpacity>
                <Card style={Styles.Image}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                </Card>
            </TouchableOpacity>
            <Button mode="contained" style={Styles.SaveButton} onPress={() => {
                console.log('Pressed')
            }}>
                Salvar dados
            </Button>
        </View>
    );
}