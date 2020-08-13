import * as FileSystem from 'expo-file-system';

export class ImageFile {
    static async saveImageFile(uri) {
        const dataUrl = FileSystem.documentDirectory;

        const image = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
        const imageJson = this.makeJson(image);
        await FileSystem.writeAsStringAsync(dataUrl + 'foto1.json', imageJson, { encoding: 'utf8' });

        return dataUrl + 'foto1.json';
    }

    static makeJson(image) {
        const json = {
            "data_de_envio": new Date(),
            "imagem": image
        };
        return JSON.stringify(json);
    }
}
