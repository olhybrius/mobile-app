import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity} from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
}

const MyButton = ({title, onPress}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.view}>
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 44,
        borderRadius: 12,
        width: 252,
        backgroundColor: '#fdd000',
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color: '#ffffff'
    }
})

export default MyButton;
