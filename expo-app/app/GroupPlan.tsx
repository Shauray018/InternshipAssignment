import React from 'react';
import { View, Text, Image, TouchableOpacity,  ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, Ionicons } from '@expo/vector-icons';
import Header from '@/components/screens/exam/Header';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { groupPlanStyles as styles } from '@/styles/screens/groupPlan.styles';

export default function GroupPlanScreen() {
  const navigateTo = (screen: string) => {
    router.push(`/${screen}` as any);
  };

  return (
    <View style={styles.container}>
        <Header 
          title="Group Plan" 
          showBackButton={true} 
          onBackPress={() => {}} 
        />
        <ScrollView style={styles.scrollView}>
      <LinearGradient
        colors={['#EEAAFD', '#8F65F8', '#483185']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.6 }}
        style={styles.gradient}
      >
        
          {/* Header with School Info */}
          <View style={styles.headerSection}>
            <View style={styles.schoolLogoContainer}>
              <Image 
                source={require('../assets/images/newSchool.png')} 
                style={styles.schoolLogo}
              />
            </View>
            <View style={styles.schoolInfoContainer}>
              <Text style={styles.schoolName}>AB Med School</Text>
              <Text style={styles.schoolEmail}>university@abgrad.com</Text>
              <View style={styles.planBadge}>
                <View style={styles.activeDot} />
                <Text style={styles.planName}>Group Comprehensive Plan</Text>
              </View>
            </View>
          </View>

          {/* Content Section */}
          <View style={styles.contentSection}>
            {/* Team Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Team</Text>
              
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigateTo('AdminsScreen')}
              >
                <View style={styles.menuItemLeft}>
                  <Feather name="users" size={22} color="#333" />
                  <Text style={styles.menuItemText}>Admins</Text>
                </View>
                <Feather name="chevron-right" size={22} color="#9CA3AF" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('SeatsScreen')}>
                <View style={styles.menuItemLeft}>
                  <Ionicons name="people-outline" size={22} color="#333" />
                  <Text style={styles.menuItemText}>Seats</Text>
                </View>
                <Feather name="chevron-right" size={22} color="#9CA3AF" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('AddUserScreen')}>
                <View style={styles.menuItemLeft}>
                  <Feather name="user-plus" size={22} color="#333" />
                  <Text style={styles.menuItemText}>Add User</Text>
                </View>
                <Feather name="chevron-right" size={22} color="#9CA3AF" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('GroupStatisticsScreen')}>
                <View style={styles.menuItemLeft}>
                  <Feather name="bar-chart-2" size={22} color="#333" />
                  <Text style={styles.menuItemText}>Group Statistics</Text>
                </View>
                <Feather name="chevron-right" size={22} color="#9CA3AF" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('UsageScreen')}>
                <View style={styles.menuItemLeft}>
                  <Feather name="clock" size={22} color="#333" />
                  <Text style={styles.menuItemText}>Usage</Text>
                </View>
                <Feather name="chevron-right" size={22} color="#9CA3AF" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('SubscriptionsScreen')}>
                <View style={styles.menuItemLeft}>
                  <Feather name="credit-card" size={22} color="#333" />
                  <Text style={styles.menuItemText}>Subscription</Text>
                </View>
                <Feather name="chevron-right" size={22} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
            
            {/* More Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>More</Text>
              
              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('SettingsScreen')}>
                <View style={styles.menuItemLeft}>
                  <Feather name="settings" size={22} color="#333" />
                  <Text style={styles.menuItemText}>Settings</Text>
                </View>
                <Feather name="chevron-right" size={22} color="#9CA3AF" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('ContactUsScreen')}>
                <View style={styles.menuItemLeft}>
                  <Feather name="help-circle" size={22} color="#333" />
                  <Text style={styles.menuItemText}>Contact Us</Text>
                </View>
                <Feather name="chevron-right" size={22} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>
      </LinearGradient>
        </ScrollView>
    </View>
  );
}

