import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Mv07() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/df/0c/5b/df0c5bf46508ed59e1783e22cdcf8ec5.jpg' }}
                style={{ width: 400, height: 250, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Forest Gump</Text>

            </View>

        </View>


    );
}