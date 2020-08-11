import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    Title: {
        alignSelf: 'center',
        marginTop: 10,
        paddingStart: 10,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    Picker: {
        marginTop: 6,
        marginBottom: 6,
        color: 'grey'
    },
    Image: {
        marginTop: 10,
        width: '60%',
        alignSelf: 'center',
    },
    InfoPhoto: {
        marginTop: 20,
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    SaveButton: {
        marginTop: 40,
        alignSelf: 'center',
        width: '90%',
        color: '#fff',
        backgroundColor: '#c8a2c8',
    },
});