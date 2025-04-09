import React from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

const StatusBar = () => {
  return (
    <View className="h-8 flex-row items-center justify-between px-4">
      <Text className="text-xs font-medium">11:27 PM</Text>
      <View className="flex-row items-center space-x-1">
        <Feather name="wifi" size={12} />
        <Feather name="battery" size={12} />
      </View>
    </View>
  );
};

export default StatusBar;