import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Title: {
        marginTop: 10,
        paddingStart: 10,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    List: {
        flex: 1,
    },
    Fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'black'
    },
});