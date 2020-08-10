import React from 'react';
import { View } from 'react-native';
import { FAB, Avatar, Text, List, Divider } from 'react-native-paper';

import { Styles } from './styles.js'

export default function Home({ navigation }) {
    return (
        <View style={Styles.Container}>
            <Text style={Styles.Title}>Lista de denúncias cadastradas no webservice:</Text>
            <Divider />
            <List.Item style={Styles.List}
                title="Email@email.com"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                left={props => <Avatar.Icon icon="file-image" />}
            />

            <FAB
                style={Styles.Fab}
                icon="file-document-edit-outline"
                color='#fff'
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    );
}