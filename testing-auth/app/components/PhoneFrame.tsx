"use client";

import { Battery, Signal, Wifi } from "lucide-react";
import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}


export const PhoneFrame = ({
    children,
    title,
    showBackButton = false,
    onBack
  }: PhoneFrameProps) => {
    return (
      <div className="flex justify-center items-center">
  
      <div className="h-[900px] w-[390px]   overflow-hidden relative shadow-[0_8px_24px_rgba(0,0,0,0.15),0_2px_6px_rgba(0,0,0,0.1),0_0_1px_rgba(0,0,0,0.2)]">
        <div className="h-full w-full border-[1px] border-black  overflow-hidden relative bg-white">
          {/* Notch */}
          <div className="phone-notch"></div>
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-11 px-5 flex justify-between items-center z-10 bg-white">
            {/* Time */}
            <div className="text-sm font-semibold">11:27 PM</div>
            
            {/* Status Icons */}
            <div className="flex items-center space-x-1">
              <Signal className="h-4 w-4" />
              <Wifi className="h-4 w-4" />
              <Battery className="h-4 w-5 fill-black" />
            </div>
          </div>
          
          {/* Header with Title and Back Button */}
          {title && (
            <div className="sticky top-11 left-0 right-0 h-14 px-4 flex items-center border-b border-gray-200 bg-white z-10">
              {showBackButton && (
                <button onClick={onBack} className="mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              )}
              <h1 className="text-l font-medium">{title}</h1>
            </div>
          )}
          
          {/* Page Content */}
          <div className="phone-content h-[calc(100%-5.5rem)] overflow-y-scroll no-scrollbar">
            {children}
          </div>
        </div>
      </div>
      </div>
    );
  };
  