import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';
import AppLogo from "../../../components/appImages/AppLogo.png";
import AccentButton from '../../../components/AccentButton';
import { router } from 'expo-router';
import { googleLogin } from '../../../backend/user-functions';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
    };

    return (
        <View style={styles.container}>
            <Image source={AppLogo} style={styles.logo} resizeMode="contain" />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <AccentButton onPress={handleLogin}>Login</AccentButton>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.registerText}>Don't have an account?</Text>
                <Button title="Register" onPress={googleLogin} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 0,
    },
    registerText: {
        marginTop: 8.7,
        fontSize: 17,
        marginRight: -4
    },
});

export default LoginScreen;