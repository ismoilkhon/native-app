import React from 'react';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global.provider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Redirect } from 'expo-router';

const SignIn: React.FC = () => {
    const {refetch, loading, isLoggedIn} = useGlobalContext()
    if (!loading && isLoggedIn) return <Redirect href={'/'} />

    const handleLogin = async () => {
        const result = await login()

        if (result) {
            refetch()
        } else {
            Alert.alert('Login Failed')
        }
    }
    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerClassName='h-full'>
                <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain'/>
                <View className='px-10'>
                    <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to LSL SCHOOL</Text>
                    <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
                        Let's Get You Closer to {"\n"}
                        <Text className='text-primary-300'>Your Ideal School</Text>
                    </Text>
                    <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
                        Login to LSL SCHOOL with Google
                    </Text>
                    <TouchableOpacity onPress={ handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 '>
                        <View className='flex flex-row justify-center items-center'>
                        <Image 
                            source={icons.google}
                            className='w-7 h-7'
                        />
                        <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>        
        </SafeAreaView>
    );
};



export default SignIn;