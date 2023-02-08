//import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

import PushNotification from "react-native-push-notification";
import globalStyles from "../utils/globalStyles";


export default function Splash({ navigation }) {

    useEffect(() => {
        createChannels();
        setTimeout(() => {
            navigation.replace('My Task')
        }, 2000);
    }, []);

    const createChannels = () => {
        PushNotification.createChannel({
            channelId: "task-channel",
            channelName: "Task Channel"
        });
    }

    return (
        <View
            style={styles.body}
        >
            <Image
                style={styles.logo}
                source={require('../../assets/wpcatltoast.png')}
            />
            <Text style={[
                globalStyles.CustomFontBig,
                styles.text
            ]}
            >
                Mash To-Do list
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 150,
        height: 150,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        padding: 50,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
    },
})