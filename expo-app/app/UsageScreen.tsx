import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Header from '@/components/screens/exam/Header';
import { usageStyles as styles } from '@/styles/screens/usage.styles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const UsageScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header 
        title="Usage Details" 
        showBackButton={true} 
        onBackPress={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.scrollView}>
        <View className='flex mb-4 border-b border-[#E5E7EB] '> 
        <View style={styles.statsCard}>
          <View style={styles.statsHeader}>
            <Text style={styles.statsTitle}>Admins</Text>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="account-key-outline" size={24} color="#A78BFA" />
            </View>
          </View>
          <View className='flex-1 flex-row items-center gap-5 justify-start align-center'>
            <Text style={styles.statsNumber}>4</Text>
            <View style={styles.activeStatus}>
              <Text style={styles.activeText}>Active</Text>
            </View>
          </View>
        </View>
            </View>
        
        <View style={styles.statsCard}>
          <View style={styles.statsHeader}>
            <Text style={styles.statsTitle}>Seats</Text>
            <View style={styles.iconContainer}>
              <Feather name="users" size={24} color="#A78BFA" />
            </View>
          </View>
          
          <View className='flex-1 flex-row items-center gap-5 justify-start align-center'>
            <Text style={styles.statsNumber}>124</Text>
            <View style={styles.activeStatus}>
              <Text style={styles.activeText}>Active</Text>
            </View>
          </View>
          <View className='flex-1 flex-row items-center gap-5 justify-start align-center mt-6'>
            <Text style={styles.costLabel}>Cost Per User</Text>
            <Text style={styles.costValue}>$199</Text>
          </View>
        </View>
        
        <View className='flex mt-1 border-t pt-4 border-[#E5E7EB]'>

        <TouchableOpacity 
          style={styles.statsButton}
          onPress={() => navigation.navigate('GroupStatisticsScreen')}
          >
          <View style={styles.statsButtonLeft}>
            <View style={styles.statsButtonIcon}>
              <Feather name="bar-chart-2" size={24} color="#A78BFA" />
            </View>
            <Text style={styles.statsButtonText}>Group Statistics</Text>
          </View>
          <AntDesign name="arrowright" size={24} color="#8F65F8" />
        </TouchableOpacity>
            </View>
      </ScrollView>
    </View>
  );
};

export default UsageScreen;