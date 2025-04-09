import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Header from '@/components/screens/exam/Header';
import { subscriptionStyles as styles } from '@/styles/screens/subscriptions.styles';

interface Invoice {
  id: string;
  plan: string;
  amount: number;
  date: string;
}

const SubscriptionScreen = ({ navigation }: { navigation: any }) => {
  const [invoices] = React.useState<Invoice[]>([
    { id: '1', plan: 'Med Group Plan', amount: 2398, date: 'Feb 12, 2025' },
    { id: '2', plan: 'Med Group Plan', amount: 2398, date: 'Jan 11, 2025' },
    { id: '3', plan: 'Med Trial Plan', amount: 0, date: 'Dec 11, 2024' },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header 
        title="Subscription" 
        showBackButton={true} 
        onBackPress={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.planCard}>
          <Text style={styles.planTitle}>Active Plan</Text>
          
          <View style={styles.planRow}>
            <Text style={styles.planLabel}>Admins (5)</Text>
            <Text style={styles.planAmount}>$299</Text>
          </View>
          
          <View style={styles.planRow}>
            <Text style={styles.planLabel}>Seats (120)</Text>
            <Text style={styles.planAmount}>$2099</Text>
          </View>
          
          <View style={styles.planRow}>
            <Text style={styles.planLabel}>Med Group Plan</Text>
            <Text style={styles.planTotal}>$2398</Text>
          </View>
          
          <Text style={styles.nextInvoice}>
            Your next invoice will be issued on 12 Dec 2025
          </Text>
        </View>
        
        <TouchableOpacity style={styles.modifyButton}>
          <Text style={styles.modifyButtonText}>Modify Users</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel Subscription</Text>
        </TouchableOpacity>
        
        <View style={styles.historySection}>
          <Text style={styles.historyTitle}>Payment History</Text>
          
          {invoices.map(invoice => (
            <View key={invoice.id} style={styles.invoiceCard}>
              <View>
                <Text style={styles.invoicePlan}>{invoice.plan}</Text>
                <Text style={styles.invoiceDate}>{invoice.date}</Text>
              </View>
              
              <View style={styles.invoiceRight}>
                <Text style={styles.invoiceAmount}>
                  ${invoice.amount}
                </Text>
                <TouchableOpacity style={styles.downloadButton}>
                  <Feather name="download" size={16} color="#A78BFA" />
                  <Text style={styles.downloadText}>Download Invoice</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        
        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Need Help?</Text>
          
          <TouchableOpacity style={styles.helpItem}>
            <Text style={styles.helpItemText}>Subscription FAQs</Text>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.helpItem}>
            <Text style={styles.helpItemText}>Contact Support</Text>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.helpItem}>
            <Text style={styles.helpItemText}>Cancellation Policy</Text>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SubscriptionScreen;