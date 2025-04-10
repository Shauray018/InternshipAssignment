"use client"

import React from "react";
import { ChevronRight, Users, User, UserPlus, BarChart, Clock, CreditCard, Settings, HelpCircle } from "lucide-react";
import { PhoneFrame } from "./components/PhoneFrame";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <PhoneFrame
      title="Group Plan"
      showBackButton
      onBack={() => router.back()}
    >
      {/* Header with med school info */}
      <div className="bg-gradient-to-r from-[#8F65F8] to-[#483185] p-6 pb-12 mt-10">

        <div className="flex items-center">
          <div className="bg-white rounded-full p-3 mr-4">
            <img
              src='/images/newSchool.png'
              alt="Medical School"
              className="w-12 h-12"
            />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-bold">AB Med School</h2>
            <p className="opacity-90">university@abgrad.com</p>
            <div className="bg-white/20 rounded-full px-3 py-1 mt-2 inline-flex items-center">
              <div className="bg-green-400 w-2.5 h-2.5 rounded-full mr-2"></div>
              <span className="text-sm">Group Comprehensive Plan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white -mt-6 rounded-t-3xl">
        <div className="p-5">
          <h3 className="text-xl font-bold mb-4">Team</h3>
          
          <div className="divide-y">
            <Link href="/AdminsScreen">
            <div 
              className="py-4 flex justify-between items-center cursor-pointer"
              >
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-4 opacity-70" />
                <span className="text-lg">Admins</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
                </Link>
            
            <div className="py-4 flex justify-between items-center cursor-pointer">
              <div className="flex items-center">
                <User className="w-6 h-6 mr-4 opacity-70" />
                <span className="text-lg">Seats</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
            
            <div className="py-4 flex justify-between items-center cursor-pointer border-b ">
              <div className="flex items-center">
                <UserPlus className="w-6 h-6 mr-4 opacity-70" />
                <span className="text-lg">Add User</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
            
            <div className="py-4 flex justify-between items-center cursor-pointer border-b ">
              <div className="flex items-center ">
                <BarChart className="w-6 h-6 mr-4 opacity-70" />
                <span className="text-lg">Group Statistics</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
            <Link href="/UsageScreen">
            <div 
              className="py-4 flex justify-between items-center cursor-pointer border-b "
            >
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-4 opacity-70" />
                <span className="text-lg">Usage</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
            </Link>
            
            <Link href="/SubscriptionScreen">
            <div 
              className="py-4 flex justify-between items-center cursor-pointer border-b " 
            >
              <div className="flex items-center">
                <CreditCard className="w-6 h-6 mr-4 opacity-70" />
                <span className="text-lg">Subscription</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
            </Link>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-4">More</h3>
          
          <div className="divide-y">
            <Link href="/SettingsScreen">
            <div 
              className="py-4 flex justify-between items-center cursor-pointer border-b "
            >
              <div className="flex items-center">
                <Settings className="w-6 h-6 mr-4 opacity-70 " />
                <span className="text-lg">Settings</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
            </Link>
            
            <Link href="/ContactScreen">
            <div 
              className="py-4 flex justify-between items-center cursor-pointer"
            >
              <div className="flex items-center">
                <HelpCircle className="w-6 h-6 mr-4 opacity-70" />
                <span className="text-lg">Contact Us</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-50" />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Home