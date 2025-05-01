
import React from "react";
import { LucideProps, icons } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends LucideProps {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
  className?: string;
}

const Icon = ({ name, fallback = "CircleAlert", className, ...props }: IconProps) => {
  const LucideIcon = icons[name] || icons[fallback];
  
  return (
    <LucideIcon
      className={cn("size-4", className)}
      {...props}
    />
  );
};

export default Icon;
