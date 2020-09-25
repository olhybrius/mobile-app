import {Button, View} from "react-native";
import React from "react";

interface LogoutProps {
    onLogout: () => void
}

const Home = ({onLogout}: LogoutProps) => {
    return (
        <View style={{flex:1, justifyContent: 'center', marginHorizontal: 20}}>
            <Button title="Se déconnecter" onPress={onLogout}/>
        </View>
    )
}

export default Home;
