import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

interface PreviousAttemptCardProps {
  title: string;
  score: string;
  date: string;
  highlight?: string;
  onPress: () => void;
}

const PreviousAttemptCard = ({ 
  title, 
  score, 
  date, 
  highlight, 
  onPress 
}: PreviousAttemptCardProps) => {
  return (
    <TouchableOpacity
      className="mx-4 my-2 bg-white rounded-lg border border-gray-200 overflow-hidden"
      onPress={onPress}
    >
      <View className="p-4">
        <View className="flex-row items-center justify-between w-full">
          <View>
            <Text className="text-base font-semibold text-gray-900">{title}</Text>
            <Text className="text-sm text-gray-500 mt-1">
              Score: {score} • {date}
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color="#9CA3AF" />
        </View>
      </View>

      {highlight && (
        <View className="w-full px-4 py-2 bg-[#F9F5FF]">
          <Text className="text-sm text-[#6941C6]">{highlight}</Text>
        </View>
      )}
      </TouchableOpacity>
  );
};

export default PreviousAttemptCard;