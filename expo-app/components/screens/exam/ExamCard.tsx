import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

interface ExamCardProps {
  number: number;
  title: string;
  questions: number;
  duration: number;
  onPress: () => void;
}

const ExamCard = ({ number, title, questions, duration, onPress }: ExamCardProps) => {
  return (
    <TouchableOpacity
      className="mx-4 my-2 p-4 bg-white rounded-lg border border-gray-200 flex-row items-center"
      onPress={onPress}
    >
      <View className="h-12 w-12 rounded-full bg-lavender items-center justify-center mr-4">
        <Text className="text-xl font-bold text-primary">{number}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-base font-semibold">{title}</Text>
        <View className="flex-row items-center mt-1">
          <Feather name="file-text" size={14} color="#9CA3AF" />
          <Text className="text-sm text-gray-500 ml-1">{questions} Questions</Text>
          <Feather name="clock" size={14} color="#9CA3AF" className="ml-2" />
          <Text className="text-sm text-gray-500 ml-1">{duration} mins</Text>
        </View>
      </View>
      <Feather name="chevron-right" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
};

export default ExamCard;