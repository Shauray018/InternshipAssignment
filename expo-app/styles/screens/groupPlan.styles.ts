import {StyleSheet } from 'react-native';

export const groupPlanStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradient: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    headerSection: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 30,
    },
    contentSection: {
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingTop: 20,
      flex: 1,
    },
    schoolLogoContainer: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    schoolLogo: {
      width: 80,
      height: 80,
      resizeMode: 'contain'
    },
    schoolInfoContainer: {
      flex: 1,
    },
    schoolName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 4,
    },
    schoolEmail: {
      fontSize: 16,
      color: 'white',
      opacity: 0.9,
      marginBottom: 12,
    },
    planBadge: {
      backgroundColor: 'white',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
    },
    activeDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#10B981',
      marginRight: 8,
    },
    planName: {
      color: '#333',
      fontSize: 14,
      fontWeight: '500',
    },
    sectionContainer: {
      paddingHorizontal: 16,
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 8,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#F3F4F6',
    },
    menuItemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuItemText: {
      fontSize: 16,
      color: '#374151',
      marginLeft: 12,
    },
  });