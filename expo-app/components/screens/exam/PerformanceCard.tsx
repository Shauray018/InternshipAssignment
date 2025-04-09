import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

interface PerformanceCardProps {
  onPress: () => void;
}

const PerformanceCard = ({ onPress }: PerformanceCardProps) => {
  return (
    <TouchableOpacity
      className="mx-4 my-3 p-4 bg-lavender rounded-lg flex-row items-center"
      onPress={onPress}
    >
      <View className="h-12 w-12 rounded-full bg-white items-center justify-center mr-4">
        <Feather name="clock" size={24} color="#6C63FF" />
      </View>
      <View className="flex-1">
        <Text className="text-base font-semibold">View your Predictor Exam Performance</Text>
      </View>
      <Feather name="arrow-right" size={20} color="#6C63FF" />
    </TouchableOpacity>
  );
};

export default PerformanceCard;