import axios from 'axios';
import * as FileSystem from 'expo-file-system';


export class Denuncias {

    static async getAllDenuncias() {
        try {
            const response = await axios.get('http://177.19.131.123:8000/api/ocorrencias');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async createDenuncia(data) {
        console.log(data);

        const formData = new FormData();

        formData.append('email', data['email']);
        formData.append('motivo_ocorrencia', data['motivo_ocorrencia']);
        formData.append('imagem', { uri: data['imagem'], name: 'foto1.json', type: 'text/json' }, 'foto1.json');

        try {
            const response = await axios.post("http://177.19.131.123:8000/api/ocorrencias", formData, {
                headers: {
                    "Content-Type": `multipart/form-data`,
                }
            });

            console.log(response.data);
        } catch (error) {
            console.log(error.message);
            console.log(error.response);
        }

    }
}