"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Asegúrate de que esta ruta sea correcta en tu proyecto
import "@/components/ui/warcraftcn/styles/warcraft.css";

const avatarVariants = cva("fantasy relative shrink-0 inline-block", {
  variants: {
    faction: {
      default: "wc-avatar-default",
      orc: "wc-avatar-orc",
      elf: "wc-avatar-elf",
      human: "wc-avatar-human",
      undead: "wc-avatar-undead",
    },
    size: {
      xs: "w-10 h-10",
      sm: "w-16 h-16 md:w-24 md:h-24",
      md: "w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40",
      lg: "w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72",
    },
  },
  defaultVariants: {
    faction: "default",
    size: "md",
  },
});

export interface AvatarProps
  extends
    Omit<React.ComponentProps<"div">, "children">,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = "", fallback, faction, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ faction, size }), className)}
        {...props}
      >
        <div className="absolute inset-[18%] overflow-hidden rounded-full bg-black/40">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover transition-transform hover:scale-110"
              draggable={false}
              loading="lazy"
            />
          ) : fallback ? (
            <div className="flex h-full w-full items-center justify-center text-xs font-bold uppercase text-yellow-500/80 select-none">
              {fallback}
            </div>
          ) : null}
        </div>
        <div
          className="pointer-events-none absolute inset-0 scale-[1.1] wc-avatar-frame drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          aria-hidden="true"
        />
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
