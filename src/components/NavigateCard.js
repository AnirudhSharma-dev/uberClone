import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { BLACK, TEXT_INPUT, WHITE } from "../constants/colors";
import { useDispatch } from "react-redux";
import { setDestination } from "../features/navSlice/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Anirudh</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            minLength={2}
            fetchDetails={true}
            placeholder="Where to?"
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            enablePoweredByContainer={false}
            returnKeyType={"search"}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          className="bg-black flex justify-between flex-row w-24 px-4 py-3 rounded-full items-center shadow-sm "
        >
          <Icon name="car" type="font-awesome" color={WHITE} size={16} />
          <Text className="text-center text-white">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white flex justify-between flex-row w-24 px-4 py-3 rounded-full border-2 border-black items-center  shadow-sm ">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color={BLACK}
            size={16}
          />
          <Text className="text-center text-black">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});
