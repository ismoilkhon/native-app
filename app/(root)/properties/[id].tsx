import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const Property: React.FC = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>Property ID: {id}</Text>
        </View>
    );
};

export default Property;