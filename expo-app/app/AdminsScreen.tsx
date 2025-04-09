import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Header from '@/components/screens/exam/Header';
import { useRouter } from 'expo-router';
import AdminUsersIcon from '@/components/icons/AdminUsersIcon';
import { Actionsheet, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetBackdrop } from "@/components/ui/actionsheet";
import { Button } from "@/components/ui/button";
import GradientSwitch from '@/components/ui/GradientSwitch';
import { adminsStyles as styles } from '@/styles/screens/admins.styles';

interface Admin {
  id: string;
  name: string;
  accessLevel: 'Full Access' | 'Partial Access';
  avatar: any;
}

interface AdminPermissions {
  acceptInvites: boolean;
  billingAccess: boolean;
  removeUsers: boolean;
  renewPlan: boolean;
  changePlanSettings: boolean;
}

const AdminsScreen = () => {
  const router = useRouter();
  const [admins] = React.useState<Admin[]>([
    { 
      id: '1', 
      name: 'John Johnsnon', 
      accessLevel: 'Full Access', 
      avatar: require('../assets/images/try.png') 
    },
    { 
      id: '2', 
      name: 'Jane Cooper', 
      accessLevel: 'Partial Access', 
      avatar: require('../assets/images/try.png') 
    },
    { 
      id: '3', 
      name: 'Alex Smith', 
      accessLevel: 'Partial Access', 
      avatar: require('../assets/images/try.png') 
    },
    { 
      id: '4', 
      name: 'Emily Davis', 
      accessLevel: 'Partial Access', 
      avatar: require('../assets/images/try.png') 
    },
  ]);

  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [permissions, setPermissions] = useState<AdminPermissions>({
    acceptInvites: true,
    billingAccess: true,
    removeUsers: false,
    renewPlan: true,
    changePlanSettings: true,
  });

  const handlePermissionToggle = (permission: keyof AdminPermissions) => {
    setPermissions(prev => ({
      ...prev,
      [permission]: !prev[permission]
    }));
  };

  const handleOpenActionsheet = (admin: Admin) => {
    setSelectedAdmin(admin);
    setShowActionsheet(true);
  };

  const handleClose = () => {
    setShowActionsheet(false);
    setSelectedAdmin(null);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Admins" 
        showBackButton={true} 
        onBackPress={() => router.back()} 
      />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>Admins</Text>
          <View style={styles.statsContainer}>
            <Text style={styles.statNumber}>4</Text>
            <View style={styles.activeStatus}>
              <Text style={styles.activeText}>Active</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <AdminUsersIcon />
          </View>
        </View>
        
        <View style={styles.adminsList}>
          {admins.map(admin => (
            <View key={admin.id} style={styles.adminCard}>
              <View style={styles.adminInfo}>
                <Image source={admin.avatar} style={styles.adminAvatar} />
                <View style={styles.adminDetails}>
                  <Text style={styles.adminName}>{admin.name}</Text>
                  <Text style={[
                    styles.accessLevel,
                    admin.accessLevel === 'Full Access' ? styles.fullAccess : styles.partialAccess
                  ]}>
                    {admin.accessLevel}
                  </Text>
                </View>
              </View>
              <TouchableOpacity 
                style={styles.menuButton}
                onPress={() => handleOpenActionsheet(admin)}
              >
                <Feather name="more-vertical" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        
        <TouchableOpacity style={styles.addButton}>
          <Feather name="plus" size={20} color="#8F65F8" />
          <Text style={styles.addButtonText}>Add Admin</Text>
        </TouchableOpacity>
      </ScrollView>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          
          <View style={styles.actionSheetHeader}>
            <Text style={styles.actionSheetTitle}>Admin Settings</Text>
            <TouchableOpacity onPress={handleClose}>
              <Feather name="x" size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <View style={styles.accessLevelContainer}>
            <Text style={styles.sectionTitle}>Access Level</Text>
            <TouchableOpacity style={styles.accessLevelButton}>
              <Text style={styles.accessLevelText}>Full Access</Text>
              <Feather name="chevron-right" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <View style={styles.permissionsContainer}>
            <Text style={styles.sectionTitle}>Permissions</Text>
            <View style={styles.permissionsList}>
              <View style={styles.permissionItem}>
                <Text style={styles.permissionText}>Accept Invites</Text>
                <GradientSwitch
                  value={permissions.acceptInvites}
                  onValueChange={() => handlePermissionToggle('acceptInvites')}
                />
              </View>
              <View style={styles.permissionItem}>
                <Text style={styles.permissionText}>Billing Access</Text>
                <GradientSwitch
                  value={permissions.billingAccess}
                  onValueChange={() => handlePermissionToggle('billingAccess')}
                />
              </View>
              <View style={styles.permissionItem}>
                <Text style={styles.permissionText}>Remove Users</Text>
                <GradientSwitch
                  value={permissions.removeUsers}
                  onValueChange={() => handlePermissionToggle('removeUsers')}
                />
              </View>
              <View style={styles.permissionItem}>
                <Text style={styles.permissionText}>Renew Plan</Text>
                <GradientSwitch
                  value={permissions.renewPlan}
                  onValueChange={() => handlePermissionToggle('renewPlan')}
                />
              </View>
              <View style={styles.permissionItem}>
                <Text style={styles.permissionText}>Change Plan Settings</Text>
                <GradientSwitch
                  value={permissions.changePlanSettings}
                  onValueChange={() => handlePermissionToggle('changePlanSettings')}
                />
              </View>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default AdminsScreen;