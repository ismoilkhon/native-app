import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Explore: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Explore Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Explore;