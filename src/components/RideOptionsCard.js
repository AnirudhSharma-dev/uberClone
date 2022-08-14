import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { RIDES } from "../constants/data";
import Currency from "react-currency-formatter";
import { selectTravelTimeInformation } from "../features/navSlice/navSlice";
import { useSelector } from "react-redux";

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const SURGE_CHARGE_RATE = 1.5;
  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="items-center">
        <TouchableOpacity
          className="absolute top-2 left-5 p-3 z-50 rounded-full"
          onPress={navigation.goBack}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center text-xl py-5">
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={RIDES}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            activeOpacity={0.7}
            className={`flex-row items-center justify-between px-5 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 80, height: 80, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text className="text-xl">
              <Currency
                currency="GBP"
                quantity={
                  (travelTimeInformation?.duration?.value *
                    SURGE_CHARGE_RATE *
                    multiplier) /
                  100
                }
              />
            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="mt-auto border-t border-gray-300">
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
