import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: "#2B2B2B",
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingEnd: 20,
        paddingStart: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    textLogin: {
        color: "white",
        fontSize: 38,
        fontWeight: "800",
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
        position: 'relative',
    },
    input: {
        backgroundColor: "#D9D9D9",
        borderRadius: 7,
        height: 50,
        paddingLeft: 15,
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    linksContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    link: {
        marginVertical: 50,
    },
    linkText: {
        color: '#FF0000',
        fontSize: 20,
    },
    linkHighlight: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default styles;