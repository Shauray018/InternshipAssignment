"use client";

import { MoreVertical, UserPlus } from "lucide-react";
import { useState } from "react";
import { Feather } from 'lucide-react';
import AdminCard from "../components/Cards/AdminCard";
import { PhoneDrawer } from "../components/PhoneDrawer";
import AdminSettingsDialog from "../components/AdminSetting";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerClose,
    DrawerFooter
  } from '@/components/ui/drawer';
  import { useRouter } from "next/navigation";
  import { PhoneFrame } from "../components/PhoneFrame";


const GradientSwitch = ({ value, onValueChange }: { value: boolean; onValueChange: (value: boolean) => void }) => {
    return (
      <Switch
        checked={value}
        onCheckedChange={onValueChange}
        className={`${value ? 'bg-gradient-to-r from-[#8F65F8] to-[#483185]' : ''}`}
      />
    );
  };
const AdminsScreen = () => {
  const router = useRouter();

    const [admins] = useState([
        { 
          id: '1', 
          name: 'John Johnsnon', 
          accessLevel: 'Full Access', 
          avatar: '/images/try.png'
        },
        { 
          id: '2', 
          name: 'Jane Cooper', 
          accessLevel: 'Partial Access', 
          avatar: '/images/try.png'
        },
        { 
          id: '3', 
          name: 'Alex Smith', 
          accessLevel: 'Partial Access', 
          avatar: '/images/try.png'
        },
        { 
          id: '4', 
          name: 'Emily Davis', 
          accessLevel: 'Partial Access', 
          avatar: '/images/try.png'
        },
      ]);

      
      const [selectedAdmin, setSelectedAdmin] = useState<number | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const permissions = [
      { id: "invites", label: "Accept user invites" },
      { id: "billing", label: "Billing access" },
      { id: "users", label: "Remove users" },
      { id: "renew", label: "Renew plan" },
      { id: "change_plan", label: "Change plan settings" }
    ];


  const handleOpenDrawer = (admin: any) => {
    setSelectedAdmin(admin);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const openAdminSettings = (index: number) => {
    setSelectedAdmin(index);
  };

  const closeAdminSettings = () => {
    setSelectedAdmin(null);
  };

  
  return (
    <PhoneFrame
      title="Admins"
      showBackButton
      onBack={() => router.back()}
    >
      <div className="p-5">
        <div className="flex items-center justify-between my-4">
        <AdminCard />
        </div>

        <div className="space-y-4 mt-8">
          {admins.map((admin, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={admin.avatar}
                  alt={admin.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{admin.name}</h3>
                  <p className={`${admin.accessLevel === "Full Access" ? "text-transparent bg-clip-text bg-gradient-to-r from-[#8F65F8] to-[#483185]" : "text-gray-500"}`}>
                    {admin.accessLevel}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => handleOpenDrawer(admin)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Admin settings"
              >
                <MoreVertical className="opacity-70" />
              </button>
            </div>
          ))}
        </div>

        <button className="w-full mt-8 py-4 rounded-xl border border-[#8F65F8] text-transparent bg-clip-text bg-gradient-to-r from-[#8F65F8] to-[#483185] flex items-center justify-center">
          <UserPlus className="mr-2 text-[#8F65F8]" />
          <span className="text-lg">Add Admin</span>
        </button>
        {/* Black overlay inside phone when drawer is open */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
              onClick={() => setDrawerOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Drawer */}
        <AnimatePresence>
  {drawerOpen && (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 shadow-lg max-h-[85vh] overflow-y-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3">
        <h3 className="text-lg font-semibold">Admin Settings</h3>
        <button onClick={handleCloseDrawer}>
          <Feather name="x" size={24} color="#6B7280" />
        </button>
      </div>

      {/* Access Level */}
      <div className="overflow-y-auto flex-1  ">
            <h2 className="py-3">John Johnson</h2>
            <div className="flex justify-between items-center mb-6">
              <div className="text-lg font-medium">Admin Controls</div>
              <Select defaultValue={"Full Access"}>
                <SelectTrigger className="w-[160px] border border-gray-300 rounded-md bg-white">
                  <SelectValue placeholder="Select Access" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full Access">Full Access</SelectItem>
                  <SelectItem value="Partial Access">Partial Access</SelectItem>
                  <SelectItem value="Limited Access">Limited Access</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Permissions</h3>
              <div className="space-y-6">
                {permissions.map((permission) => (
                  <div key={permission.id} className="flex justify-between items-center">
                    <span className="text-gray-700">{permission.label}</span>
                    <Switch className="bg-[#8F65F8]/20 data-[state=checked]:bg-gradient-to-r from-[#8F65F8] to-[#483185]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pb-2 pt-4 flex gap-4 border-t border-gray-200">
            <Button 
              variant="outline" 
              className="flex-1 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              Remove User
            </Button>
            <Button 
              className="flex-1 bg-gradient-to-r from-[#8F65F8] to-[#483185] text-white hover:opacity-90"
            >
              Update Access
            </Button>
          </div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </PhoneFrame>
  );
};

export default AdminsScreen;