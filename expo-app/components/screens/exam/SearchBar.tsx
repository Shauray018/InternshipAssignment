import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View className="mx-4 my-4 h-12 flex-row items-center px-4 border-2 border-radius-[2px] border-[#DED8E1] rounded-lg">
      <Feather name="search" size={20} color="#9CA3AF" />
      <TextInput
        className="flex-1 ml-2 mb-1 text-base"
        placeholder="Search"
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
};

export default SearchBar;