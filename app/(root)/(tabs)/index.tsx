import { Card, FeaturedCard } from "@/componets/cards";
import Search from "@/componets/search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justfy-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Ismoil Baxromov
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>

        <Search />
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className=" text-lx font-rubik-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className="text-base text-primary-300 font-rubik-bold">
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FeaturedCard />
        <Card />
      </View>
    </SafeAreaView>
  );
}
