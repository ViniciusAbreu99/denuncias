import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FAB, Avatar, Text, List, Divider, ActivityIndicator } from 'react-native-paper';

import { Denuncias } from '../../services/denuncias.js'
import { Styles } from './styles.js'
import { ScrollView } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getDenuncias() {
        let denuncias = await Denuncias.getAllDenuncias();
        setData(denuncias.dados);
        setLoading(false);
    }

    useEffect(() => {
        getDenuncias();
    }, [data]);

    return (
        <View style={Styles.Container}>
            <Text style={Styles.Title}>Lista de denúncias cadastradas no webservice:</Text>
            <Divider />
            <ScrollView style={Styles.List}>
                {loading && <ActivityIndicator style={Styles.Loading} animating={true} color={'blue'} />}
                {data &&
                    data.map((d) => {
                        return <List.Item key={data.indexOf(d)} style={Styles.ListItem}
                            title={d.email}
                            description={d.motivo_ocorrencia}
                            left={props => <Avatar.Image source={{ uri: 'data:image/png;base64, ' + d.imagem }} />}
                        />
                    })
                }
            </ScrollView>
            <FAB
                style={Styles.Fab}
                icon="file-document-edit-outline"
                color='#fff'
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    );
}