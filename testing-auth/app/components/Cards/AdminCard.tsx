'use client'

import React from 'react'
import AdminUsersIcon from '../icons/AdminUserIcon'

export default function AdminCard() {
  return (
    <div className="relative bg-[#FCFAFF] rounded-2xl px-5 py-6 overflow-hidden w-full mt-4">
      <h2 className="text-2xl font-bold text-[#111827] mb-2">Admins</h2>
      <div className="flex items-center">
        <span className="text-4xl font-bold text-[#111827] mr-4">4</span>
        <div className="bg-white border border-[#039855] px-4 py-2 rounded-full">
          <span className="text-[#039855] font-medium">Active</span>
        </div>
      </div>
      <div className="absolute top-5 -right-5 bg-[#F9F5FF] p-5 rounded-full w-[129px] h-[129px] flex justify-center items-center">
        <AdminUsersIcon />
      </div>
    </div>
  )
}
