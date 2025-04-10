'use client';

import { Users } from 'lucide-react';

export const AdminsStatsCard = () => {
  return (
    <div className="mb-4 p-3 bg-white rounded-xl border  border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Admins</h2>
        <div className="w-[40px] h-[40px] rounded-full bg-purple-100 flex items-center justify-center">
          <Users className="text-purple-500 w-6 h-6" />
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-5">
        <span className="text-3xl font-bold text-gray-900">4</span>
        <div className="bg-white border border-green-600 px-4 py-1 rounded-full">
          <span className="text-green-600 text-sm font-medium">Active</span>
        </div>
      </div>
    </div>
  );
};

export const SeatsStatsCard = () => {
    return (
      <div className="mb-4 p-3 bg-white rounded-xl border  border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Seats</h2>
          <div className="w-[40px] h-[40px] rounded-full bg-purple-100 flex items-center justify-center">
          <Users className="text-purple-500 w-6 h-6" />
        </div>
        </div>
  
        {/* Seats Count */}
        <div className="flex items-center gap-5">
          <span className="text-3xl font-bold text-gray-900">124</span>
          <div className="bg-white border border-green-600 px-4 py-1 rounded-full">
          <span className="text-green-600 text-sm font-medium">Active</span>
        </div>
        </div>
  
        {/* Cost Per User */}
        <div className="flex items-center gap-5 mt-6">
          <span className="text-base text-gray-600">Cost Per User</span>
          <span className="text-lg font-semibold text-gray-900">$199</span>
        </div>
      </div>
    );
  };

