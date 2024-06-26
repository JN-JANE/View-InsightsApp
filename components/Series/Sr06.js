import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sr06() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("AllOfUsAreDeadTab") }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/96/83/a8/9683a8f98b4dc21687e348c3aa68defd.jpg' }}
                style={{ width: 400, height: 500, borderRadius: 15 }}
            />
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 20 }}>All Of Us Are Dead</Text>

            </View>

        </View>


    );
}