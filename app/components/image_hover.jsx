"use client";
import Image from "next/image";
import Link from "next/link";
export default function ImageHover({ width, height, imageOne, imageTwo, altText="icon that changes when hovered over" }) {
  return (
    <>
      
        <Image
          onMouseEnter={(e) => {
            e.target.src = imageTwo;
          }}
          onMouseLeave={(e) => {
            e.target.src = imageOne;
          }}
          src={imageOne}
          width={width}
          height={height}
          alt={altText}
        ></Image>
      
    </>
  );
}
