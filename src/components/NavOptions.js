import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { DATA } from "../constants/data";
import { Icon } from "react-native-elements";
import { WHITE } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../features/navSlice/navSlice";

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={DATA}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          disabled={!origin}
          onPress={() => {
            navigation.navigate(item.screen);
          }}
          activeOpacity={0.7}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 shadow-sm"
        >
          <View className={`${!origin && "opacity-20"}`}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              className="p-2 bg-black rounded-full w-10 mt-4"
              type="antdesign"
              color={WHITE}
              name="arrowright"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
