import {StyleSheet} from 'react-native';

export const textoStyle = StyleSheet.create({
    h1: {
        fontSize: 30,
        position: 'absolute',
        top: 30,
        left: 30,
        fontWeight: 'bold',
    },
    registro: {
        fontSize: 16,
        textAlign: 'center',
        color: '#5E5E5E'
    },
    more: {
        paddingTop: 40,
        fontSize: 16,
        color: '#5E5E5E',
        textAlign: 'center',
    }
})

export const imgStyles = StyleSheet.create({
    img: {
        width: 120,
        height: 80,
        left: 220,
        top: 10
    },
    fondo: {
        width: '100%',
        height: '100%'
    },
    user: {
        width: 30,
        height: 30,
        bottom: 20
    },
    pass: {
        width: 25,
        height: 27,
        left: 30,
        bottom: 10
    }
})

export const formStyles = StyleSheet.create({
    form: {
        backgroundColor: '#fff',
        width: 350,
        height: 550,
        borderRadius: 20,
        position: 'absolute',
    },
    log: {
        top: 30,
        display: 'flex',
        alignItems: 'baseline',
        paddingBottom: 10,
        flexDirection: 'row',
        gap: 10,
        left: 10
    }
})

export const inputStyles = StyleSheet.create({
    login: {
        backgroundColor: '#FFF6A9',
        width: 270,
        height: 40,
        borderRadius: 10,
        padding: 8
    },
    btn: {
        top: 200,
        alignItems: 'center',
    },
    btn2: {
        top: 80,
        alignItems: 'center',
    },
})

export const btnStyles = StyleSheet.create({
    ButtonRound: {
        width: 150,
        height: 50,
        backgroundColor: '#F5E62D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export const styles = StyleSheet.create({
    container: {
    flex: 1, 
    backgroundColor: '#FFf',
    alignItems: 'center',
    justifyContent: 'center',
    }
})