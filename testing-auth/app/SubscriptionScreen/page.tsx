"use client"

import React from "react";
import { ChevronRight, Download } from "lucide-react";
import { PhoneFrame } from "../components/PhoneFrame";
import { useRouter } from "next/navigation";

const SubscriptionScreen = () => {
  const router = useRouter();

  return (
    <PhoneFrame
      title="Subscription"
      showBackButton
      onBack={() => router.back()}
    >
      <div className="p-5 mt-10">
        {/* Active plan */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h2 className="text-xl font-medium mb-4">Active Plan</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Admins (5)</span>
              <span className="font-medium">$299</span>
            </div>
            
            <div className="flex justify-between">
              <span>Seats (120)</span>
              <span className="font-medium">$2099</span>
            </div>
            
            <div className="flex justify-between  mt-2">
              <span className="font-medium">Med Group Plan</span>
              <span className="font-semibold text-green-600 ">$2398</span>
            </div>
          </div>
          
          <p className="text-[#414651] text-xs mt-4">
            Your next invoice will be issued on 12 Dec 2025
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="space-y-3 my-4">
          <button className="w-full border border-[#8F65F8] text-transparent bg-clip-text bg-gradient-to-r from-[#8F65F8] to-[#483185] font-medium py-3 rounded-lg">
            Modify Users
          </button>
          
          <button className="w-full border border-red-500 text-red-500 font-medium py-3 rounded-lg">
            Cancel Subscription
          </button>
        </div>
        
        {/* Payment history */}
        <div className="mt-8 border-t pt-4">
        <h2 className="text-xl font-medium mb-4">Payment History</h2>
          
          <div className="space-y-3">
            {/* Invoice 1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Med Group Plan</span>
                <span className="font-medium">$2398</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Feb 12, 2025</span>
                <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#8F65F8] to-[#483185]">
                  <Download className="h-4 w-4 mr-1 text-[#8F65F8]" />
                  <span>Download Invoice</span>
                </div>
              </div>
            </div>
            
            {/* Invoice 2 */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Med Group Plan</span>
                <span className="font-medium">$2398</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Jan 11, 2025</span>
                <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#8F65F8] to-[#483185]">
                  <Download className="h-4 w-4 mr-1 text-[#8F65F8]" />
                  <span>Download Invoice</span>
                </div>
              </div>
            </div>
            
            {/* Invoice 3 */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Med Trial Plan</span>
                <span className="font-medium">$0</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Dec 11, 2024</span>
                <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#8F65F8] to-[#483185]">
                  <Download className="h-4 w-4 mr-1 text-[#8F65F8]" />
                  <span>Download Invoice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Help section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Need Help?</h2>
          
          <div className="divide-y">
            <div className="py-4 flex justify-between items-center">
              <span className="text-gray-700">Subscription FAQs</span>
              <ChevronRight className="opacity-50" />
            </div>
            
            <div className="py-4 flex justify-between items-center">
              <span className="text-gray-700">Contact Support</span>
              <ChevronRight className="opacity-50" />
            </div>
            
            <div className="py-4 flex justify-between items-center">
              <span className="text-gray-700">Cancellation Policy</span>
              <ChevronRight className="opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default SubscriptionScreen;