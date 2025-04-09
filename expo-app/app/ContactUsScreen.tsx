import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Header from '@/components/screens/exam/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { contactStyles as styles } from '@/styles/screens/contact.styles';
import { useRouter } from 'expo-router';

const ContactUsScreen = ({ navigation }: { navigation: any }) => {
    const router =  useRouter(); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToPolicy: false
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header 
        title="Contact Us" 
        showBackButton={true} 
        onBackPress={() => router.back()} 
      />
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.formTitle}>Please fill out this form.</Text>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>First name <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="First name"
            value={formData.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Last name <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Last name"
            value={formData.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="you@company.com"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.phoneInput}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>US</Text>
              <Feather name="chevron-down" size={16} color="#6B7280" />
            </View>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="+1 (555) 000-0000"
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={(text) => handleChange('phone', text)}
            />
          </View>
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Message <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.textArea}
            placeholder="Write your message here..."
            placeholderTextColor="#717680"
            multiline
            numberOfLines={4}
            value={formData.message}
            onChangeText={(text) => handleChange('message', text)}
          />
        </View>
        
        <View style={styles.checkboxContainer}>
          <TouchableOpacity 
            style={styles.checkbox}
            onPress={() => handleChange('agreeToPolicy', !formData.agreeToPolicy)}
          >
            {formData.agreeToPolicy && (
              <Feather name="check" size={14} color="#111827" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            You agree to our <Text style={styles.policyLink}>privacy policy</Text>.
          </Text>
        </View>
        
        <TouchableOpacity style={styles.submitButtonContainer} onPress={handleSubmit}>
          <LinearGradient
            colors={['#8F65F8', '#483185']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Send message</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ContactUsScreen;