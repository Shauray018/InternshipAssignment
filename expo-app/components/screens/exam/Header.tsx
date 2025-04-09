import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showRightIcon?: boolean;
  iconName?: string;
  onRightIconPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress = () => {},
  showRightIcon = false,
  iconName = "more-vertical",
  onRightIconPress = () => {}
}) => {
  return (
    <View style={{ 
      height: 72, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      paddingHorizontal: 16, 
      paddingVertical: 12,
      borderBottomWidth: 1, 
      borderBottomColor: '#E5E7EB', 
      marginTop: 36, 
      backgroundColor: "#fff"
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {showBackButton && (
          <TouchableOpacity onPress={onBackPress} style={{ marginRight: 16 }}>
            <Feather name="arrow-left" size={24} color="#111827" />
          </TouchableOpacity>
        )}
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#111827' }}>{title}</Text>
      </View>
      
      {showRightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <Feather name={iconName as any} size={24} color="#111827" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
