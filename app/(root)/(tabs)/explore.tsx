import { useEffect } from "react";
import icons from "@/constants/icons";
import Search from "@/components/search";
import { Card } from "@/components/cards";
import Filters from "@/components/filters";
import NoResults from "@/components/noResults";
import { getProperties } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function Explore() {
    const params = useLocalSearchParams<{
        query?: string,
        filter?: string,
    }>()
    const { data: properties, loading, refetch } = useAppwrite({
        fn: getProperties,
        params: { 
            filter: params.filter!,
            query: params.query!, 
            limit: 6,
        },
        skip: true
    })

    const handleCardPress = (id: string) => router.push(`/properties/${id}`)

    useEffect(() => {
        refetch({
            filter: params.filter!,
            query: params.query!,
            limit: 20,
        })
    }, [params.filter, params.query])
  return (
    <SafeAreaView className="bg-white h-full">
        <FlatList 
            data={properties} 
            renderItem={({ item }) => <Card item={item} onPress={() => handleCardPress(item.$id)}/>}
            keyExtractor={(item) => item.toString()}
            numColumns={2}
            contentContainerClassName="pb-32"
            columnWrapperClassName="flex gap-5 px-5"
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
                loading ? (
                    <ActivityIndicator size="large" className="text-primary-300 mt-5" />
                ) : <NoResults />
            }
            ListHeaderComponent={
                <View className="px-5">
                    <View className="flex flex-row justify-between items-center mt-5">
                        <TouchableOpacity 
                            onPress={() => router.back()}
                            className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center "
                        >
                            <Image source={icons.backArrow} className="w-5 h-5" />
                        </TouchableOpacity>
                        <Text className="text-base mr-2 font-rubik-medium text-bold-300 text-center">
                            Search for Your Ideal Home
                        </Text>
                        <Image source={icons.bell } className="w-6 h-6" />
                    </View>
                    <Search />
                    <View className="mt-5">
                        <Filters />
                        <Text className="text-xl font-rubik-bold text-bold-300 mt-5">
                            Found {properties?.length} Properties
                        </Text>
                    </View>
                </View>
            }
        />
      
    </SafeAreaView>
  );
}
