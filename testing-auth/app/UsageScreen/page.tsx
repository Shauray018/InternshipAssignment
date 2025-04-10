"use client"

import React from "react";
import { ChevronRight, Users, User, BarChart } from "lucide-react";
import { PhoneFrame } from "../components/PhoneFrame";
import { useRouter } from "next/navigation";
import { AdminsStatsCard, SeatsStatsCard } from "../components/Cards/UsageCards";

const UsageScreen = () => {
  const router = useRouter();

  return (
    <PhoneFrame
      title="Usage Details"
      showBackButton
      onBack={() => router.back()}
    >
      <div className="p-5 space-y-6 mt-10 ">
        {/* Admins section */}
<div className="border-b border-gray-200 pb-2">

        <AdminsStatsCard />
</div>
        <div className="border-b border-gray-200 pb-2">

        {/* Seats section */}
        <SeatsStatsCard />
        </div>
        
        {/* Group Statistics link */}
        <div 
          className="bg-purple-50 rounded-lg p-6 flex items-center justify-between cursor-pointer"
          onClick={() => {/* Navigate to group statistics */}}
        >
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full mr-4">
              <BarChart className="text-purple-400 h-6 w-6" />
            </div>
            <span className="text-xl font-semibold">Group Statistics</span>
          </div>
          <ChevronRight className="text-purple-400" />
        </div>
      </div>
    </PhoneFrame>
  );
};

export default UsageScreen;