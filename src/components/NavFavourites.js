import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FAV_DATA } from "../constants/data";
import { Icon } from "react-native-elements";
import { WHITE } from "../constants/colors";

const NavFavourites = () => {
  return (
    <FlatList
      data={FAV_DATA}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View className="bg-gray-200" style={{ height: 0.5 }} />
      )}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            className="mr-4 rounded-full bg-gray-300 p-3"
            name={icon}
            type="ionicon"
            color={WHITE}
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg ">{location}</Text>
            <Text className="text-gray-500 ">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
