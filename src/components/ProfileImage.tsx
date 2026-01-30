import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-16 h-16 text-lg",
  md: "w-24 h-24 text-2xl",
  lg: "w-32 h-32 md:w-40 md:h-40 text-4xl",
};

export function ProfileImage({ size = "md", className }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !personalInfo.profileImage) {
    // Placeholder com iniciais
    return (
      <div
        className={cn(
          "rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground shadow-card",
          sizeClasses[size],
          className
        )}
      >
        {personalInfo.initials}
      </div>
    );
  }

  return (
    <img
      src={personalInfo.profileImage}
      alt={`Foto de ${personalInfo.name}`}
      onError={() => setImageError(true)}
      className={cn(
        "rounded-full object-cover shadow-card ring-4 ring-primary/20",
        sizeClasses[size],
        className
      )}
    />
  );
}
