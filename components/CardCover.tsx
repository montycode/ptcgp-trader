"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
//import { IKImage } from "imagekitio-next";

type CardCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<CardCoverVariant, string> = {
  extraSmall: "card-cover_extra_small",
  small: "card-cover_small",
  medium: "card-cover_medium",
  regular: "card-cover_regular",
  wide: "card-cover_wide",
};

interface Props {
  className?: string;
  variant?: CardCoverVariant;
  coverImage: string;
  alt: string;
}

const CardCover = ({
  className,
  variant = "regular",
  coverImage = "https://placehold.co/400x600.png",
  alt,
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <div className="absolute z-10" style={{ width: "100%", height: "100%" }}>
        <Image
          src={coverImage}
          alt={alt}
          fill
          className="rounded-sm object-fill"
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default CardCover;
