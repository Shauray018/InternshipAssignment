"use client"

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { PhoneFrame } from "../components/PhoneFrame";
import { useRouter } from "next/navigation";

const SettingsScreen = () => {
  const router = useRouter();   
  const [settings, setSettings] = useState({
    acceptInvites: true,
    renewPlan: true,
    marketing: true,
    subscriptionLapse: true,
    newUser: true
  });

  const toggleSetting = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <PhoneFrame
      title="Group Settings"
      showBackButton
      onBack={() => router.back()}
    >
      <div className="p-5 mt-12">
        <h2 className="text-xl font-medium text-[#414651] mb-6">Permissons</h2>

        <div className="space-y-6">
          <div className="flex items-center justify-between py-1">
            <span className="text-lg text-gray-700">Admins may accept user invites</span>
            <Switch 
              checked={settings.acceptInvites} 
              onCheckedChange={() => toggleSetting('acceptInvites')}
                className="bg-purple-200 data-[state=checked]:bg-[linear-gradient(to_right,_#8F65F8,_#483185)] transition-colors duration-300"

            />
          </div>

          <div className="flex items-center justify-between pb-6 border-b">
            <span className="text-lg text-gray-700">Let users renew plan</span>
            <Switch 
              checked={settings.renewPlan} 
              onCheckedChange={() => toggleSetting('renewPlan')}
                className="bg-purple-200 data-[state=checked]:bg-[linear-gradient(to_right,_#8F65F8,_#483185)] transition-colors duration-300"

            />
          </div>
        </div>

        <h2 className="text-xl font-medium text-[#414651] my-6 ">Email notifications</h2>

        <div className="space-y-6">
          <div className="flex items-center justify-between py-1">
            <span className="text-lg text-gray-700">Marketing Updates</span>
            <Switch 
              checked={settings.marketing} 
              onCheckedChange={() => toggleSetting('marketing')}
                className="bg-purple-200 data-[state=checked]:bg-[linear-gradient(to_right,_#8F65F8,_#483185)] transition-colors duration-300"

            />
          </div>

          <div className="flex items-center justify-between py-1 ">
            <span className="text-lg text-gray-700">Subscription Lapse</span>
            <Switch 
              checked={settings.subscriptionLapse} 
              onCheckedChange={() => toggleSetting('subscriptionLapse')}
                className="bg-purple-200 data-[state=checked]:bg-[linear-gradient(to_right,_#8F65F8,_#483185)] transition-colors duration-300"

            />
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-lg text-gray-700">New User Added</span>
            <Switch 
              checked={settings.newUser} 
              onCheckedChange={() => toggleSetting('newUser')}
              className="bg-purple-200 data-[state=checked]:bg-[linear-gradient(to_right,_#8F65F8,_#483185)] transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default SettingsScreen;