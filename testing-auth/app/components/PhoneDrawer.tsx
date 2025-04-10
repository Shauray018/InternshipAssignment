// components/ui/phone-drawer.tsx
"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface PhoneDrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export const PhoneDrawer = ({
  isOpen,
  onClose,
  children,
  className
}: PhoneDrawerProps) => {
  return (
    <div
      className={cn(
        "absolute inset-x-0 bottom-0 z-20 w-full rounded-t-xl bg-white transition-transform duration-300 ease-out shadow-xl",
        isOpen ? "translate-y-0" : "translate-y-full",
        className
      )}
    >
      <div className="w-full p-4">
        {/* Drag handle bar */}
        <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-gray-300" />
        {children}
      </div>

      {/* Optional background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50"
          onClick={onClose}
        />
      )}
    </div>
  )
}
