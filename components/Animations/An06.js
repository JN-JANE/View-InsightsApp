import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function An06() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("LucaTab") }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/736x/60/37/2a/60372a9e05cf90b8a0e16945361853a1.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 20 }}>Luca</Text>

            </View>

        </View>


    );
}