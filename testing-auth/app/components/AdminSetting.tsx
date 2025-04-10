import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface AdminSettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  admin: {
    name: string;
    image: string;
    access: string;
  };
}

const AdminSettingsDialog = ({ isOpen, onClose, admin }: AdminSettingsDialogProps) => {
  const permissions = [
    { id: "invites", label: "Accept user invites" },
    { id: "billing", label: "Billing access" },
    { id: "users", label: "Remove users" },
    { id: "renew", label: "Renew plan" },
    { id: "change_plan", label: "Change plan settings" }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="p-0 w-full max-w-md rounded-t-xl sm:max-w-md" side="bottom">
        <div className="h-full flex flex-col">
          <SheetHeader className="px-6 py-4 border-b border-gray-200 flex flex-row justify-between items-center">
            <SheetTitle className="text-xl font-bold">Admin settings</SheetTitle>
            <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
          </SheetHeader>

          <div className="overflow-y-auto flex-1 px-6 py-5">
            <h2 className="text-xl font-bold mb-4">{admin.name}</h2>
            
            <div className="flex justify-between items-center mb-6">
              <div className="text-lg font-medium">Admin Controls</div>
              <Select defaultValue={admin.access}>
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
                    <Switch className="bg-purple-100 data-[state=checked]:bg-purple-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-4 flex gap-4 border-t border-gray-200">
            <Button 
              variant="outline" 
              className="flex-1 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              Remove User
            </Button>
            <Button 
              className="flex-1 bg-purple-500 text-white hover:bg-purple-600"
            >
              Update Access
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AdminSettingsDialog;