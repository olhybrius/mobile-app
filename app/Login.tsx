import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import Button from './Button';
import Logo from "./Logo";
import R from 'res/R';

interface LoginProps {
    onLoginSuccessful: () => void
}


const Login = ({onLoginSuccessful}: LoginProps) => {
    const [username, setUsername] = useState("");
    const [emptyUserName, setEmptyUsername] = useState(false);
    const [password, setPassword] = useState("");
    const [emptyPassword, setEmptyPassword] = useState(false);


    const onLoginButtonPress = () => {
        if (username === 'admin' && password === 'admin') {
            onLoginSuccessful();
        }
    }

    const checkUsernameNotEmpty = () => {
        if (username === '') setEmptyUsername(true);
    }

    const checkPasswordNotEmpty = () => {
        if (password === '') setEmptyPassword(true);
    }


    return (
        <ScrollView contentContainerStyle={styles.view}>
            <View style={{alignItems: 'center', marginBottom: 20}}>
                <Logo size={200}/>
            </View>
            <View style={{marginBottom: 20}}>
                <TextInput style={emptyUserName ? styles.errorTextInput : styles.textInput}
                           value={username} placeholder="Nom d'utilisateur"
                           onChangeText={(text => setUsername(text))}
                           onBlur={checkUsernameNotEmpty}
                           onFocus={() => setEmptyUsername(false)}/>
                {emptyUserName && <Text style={{color: 'red'}}>Nom d'utilisateur requis !</Text>}
            </View>
            <View style={{marginBottom: 20}}>
                <TextInput style={emptyPassword ? styles.errorTextInput : styles.textInput}
                           value={password} placeholder="Mot de passe"
                           onChangeText={(text => setPassword(text))}
                           onBlur={checkPasswordNotEmpty}
                           onFocus={() => setEmptyPassword(false)}/>
                {emptyPassword && <Text style={{color: 'red'}}>Mot de passe requis !</Text>}
            </View>
            <View style={{alignItems: 'center'}}>
                <Button title={R.i18n.t('login.button')} onPress={() => onLoginButtonPress()}/>
            </View>
        </ScrollView>)


}
export default Login;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center" ,
        marginHorizontal: 20
    },
    textInput: {
        borderWidth: 2,
        borderColor: 'lightgrey',
        paddingLeft: 10,
        height: 75,
    },
    errorTextInput: {
        borderWidth: 2,
        borderColor: 'red',
        paddingLeft: 10,
        height: 75,
    }
})
