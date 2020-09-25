import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { firebase } from '@react-native-firebase/crashlytics';

import Login from "./Login";
import Home from "./Home";
import MyButton from "./Button";

const App = () => {

    const LOGGED_STORAGE_KEY = '@logged';

    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState<boolean|null>(false);

    const storeData = async (storageKey: string, value: string) => {
        try {
            firebase.crashlytics().log('Enregistrement en cours...');
            await AsyncStorage.setItem(storageKey, value)
        } catch (e) {
            // saving error
        }
    }

    useEffect(() => {(async () => {
        if (logged !== null) {
            await storeData(LOGGED_STORAGE_KEY, logged.toString());
        }
    })();
    }, [logged]);

    useEffect(() => {
        (async () => {
            const previousLoggedValue = await AsyncStorage.getItem(LOGGED_STORAGE_KEY);
            if (previousLoggedValue != null) {
                setLogged(JSON.parse(previousLoggedValue));
            }
        })();
    }, [])

    return (
        logged !== null ?
            <View style={{flex:1, backgroundColor: 'black'}}>
                <View style={{height: 75, backgroundColor: '#2196F3'}}>
                    <Text>Header</Text>
                </View>
                {logged ? <Home onLogout={() =>  {
                    setLogged(false);
                }
                }/> : <Login onLoginSuccessful={async () =>  {
                    setLogged(true)
                }}/> }
                <MyButton title="CRASH" onPress={() => firebase.crashlytics().crash()}/>
            </View> : <View><Text>Loading...</Text></View>
    );
};

export default App;
