import { categories } from '@/constants/data';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Filters = () => {
    const params = useLocalSearchParams<{filter?: string}>()

    const filters = ['All', 'Completed', 'Pending'];
    const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All');
    const handleFilter = (filter: string) => {
        if (filter === selectedCategory) {
            setSelectedCategory('All');
            router.setParams({filter: 'All'})
            return
        }
        setSelectedCategory(filter);
        router.setParams({filter})
    }

    return (
       <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            className='mt-3 mb-2'
        >
            {categories.map((item, index) => (
                <TouchableOpacity
                    onPress={() => handleFilter(item.category)} 
                    key={index}
                    className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${selectedCategory === item.category ? 'bg-primary-300' : 'bg-primary-100 border border-primary-200'}`}
                >
                    <Text className={`text-sm ${selectedCategory === item.category ? 'text-white font-rubik-bold mt-0.5' : 'text-black-300 font-rubik'}`}>{item.title}</Text>
                </TouchableOpacity>
            ))}
       </ScrollView>
    );
};

export default Filters;