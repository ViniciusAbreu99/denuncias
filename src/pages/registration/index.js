import React, { useEffect } from 'react';
import { View, Picker, TouchableOpacity } from 'react-native';
import { Divider, Text, TextInput, Card, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

import { ImageFile } from '../../util/imageFile.js'
import { Denuncias } from '../../services/denuncias.js'
import { Styles } from './styles.js';

export default function Registration({ navigation }) {
    const [selectedValue, setSelectedValue] = React.useState('');
    const [photoCam, setPhotoCam] = React.useState(null);
    const [data, setData] = React.useState({ email: 'alvesv79@gmail.com', motivo_ocorrencia: '', imagem: '' })
    const [motivoWarning, setMotivoWarning] = React.useState(false);
    const [imageWarning, setImageWarning] = React.useState(false);
    const [warning, setWarning] = React.useState(false);

    async function persistData() {
        await Denuncias.createDenuncia(data);
    }

    useEffect(() => {
        if (data['imagem']) {
            persistData();
        }
    }, [photoCam, data]);

    async function takePicture() {
        let result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            setPhotoCam(result.uri);
        } else {
        }
    }

    return (
        <View style={Styles.Container}>
            <Text style={Styles.Title}>Cadastro de denúncias:</Text>
            <Divider />
            <Picker
                selectedValue={selectedValue}
                style={Styles.Picker}
                onValueChange={(itemValue, itemIndex) => {
                    setMotivoWarning(false);
                    setWarning(false);
                    setSelectedValue(itemValue);
                    setData({ ...data, motivo_ocorrencia: itemValue })
                }}
            >
                <Picker.Item label="Lista de motivos" value="" />
                <Picker.Item label="Roubo" value="ROUBO" />
                <Picker.Item label="Furto" value="FURTO" />
            </Picker>
            {motivoWarning && <Text style={Styles.Warning}>Selecione um motivo</Text>}
            <TextInput
                style={Styles.InputEmail}
                label="Email"
                value={`${data['email']}`}
                disabled={true}
                mode='outlined'
            />
            <Text style={Styles.InfoPhoto}>Toque para tirar uma foto</Text>
            <TouchableOpacity
                onPress={() => {
                    setImageWarning(false);
                    setWarning(false);
                    takePicture();
                }}>
                <Card style={Styles.Image}>
                    {!photoCam && <Card.Cover source={require(`../../../assets/camera.png`)} />}
                    {photoCam && <Card.Cover source={{ uri: photoCam }} />}
                </Card>
            </TouchableOpacity>
            {imageWarning && <Text style={Styles.Warning}>Adicione uma imagem</Text>}
            <Button mode="contained" style={Styles.SaveButton} onPress={async () => {
                if (!data.motivo_ocorrencia) {
                    setMotivoWarning(true);
                    setWarning(true);
                }
                if (!photoCam) {
                    setImageWarning(true);
                    setWarning(true);
                }
                if (warning) {
                    return;
                }
                const fileUri = await ImageFile.saveImageFile(photoCam);
                setData({ ...data, imagem: fileUri });
            }}>
                Salvar dados
            </Button>
        </View>
    );
}