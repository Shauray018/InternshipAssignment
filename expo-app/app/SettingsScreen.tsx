import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/screens/exam/Header';
import GradientSwitch from '@/components/ui/GradientSwitch';
import { settingsStyles as styles } from '@/styles/screens/settings.styles';

interface SettingOption {
  id: string;
  title: string;
  enabled: boolean;
  category: 'permissions' | 'notifications';
}

const SettingsScreen = ({ navigation }: { navigation: any }) => {
  const [settings, setSettings] = useState<SettingOption[]>([
    { id: '1', title: 'Admins may accept user invites', enabled: true, category: 'permissions' },
    { id: '2', title: 'Let users renew plan', enabled: false, category: 'permissions' },
    { id: '3', title: 'Marketing Updates', enabled: true, category: 'notifications' },
    { id: '4', title: 'Subscription Lapse', enabled: true, category: 'notifications' },
    { id: '5', title: 'New User Added', enabled: true, category: 'notifications' },
  ]);

  const toggleSwitch = (id: string) => {
    setSettings(settings.map((setting: SettingOption) => 
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ));
  };

  const permissionSettings = settings.filter((s: SettingOption) => s.category === 'permissions');
  const notificationSettings = settings.filter((s: SettingOption) => s.category === 'notifications');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header 
        title="Group Settings" 
        showBackButton={true} 
        onBackPress={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Permissions</Text>
          
          {permissionSettings.map((setting: SettingOption) => (
            <View key={setting.id} style={styles.settingRow}>
              <Text style={styles.settingTitle}>{setting.title}</Text>
              <GradientSwitch
                value={setting.enabled}
                onValueChange={() => toggleSwitch(setting.id)}
              />
            </View>
          ))}
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Email notifications</Text>
          
          {notificationSettings.map((setting: SettingOption) => (
            <View key={setting.id} style={styles.settingRow}>
              <Text style={styles.settingTitle}>{setting.title}</Text>
              <GradientSwitch
                value={setting.enabled}
                onValueChange={() => toggleSwitch(setting.id)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;