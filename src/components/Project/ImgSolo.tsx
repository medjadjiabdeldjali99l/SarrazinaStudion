import React from "react";
import Image from "next/image";

interface ImgSoloProps {
  image: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ImgSolo({
  image,
  alt,
  width = 1200,
  height = 800,
}: ImgSoloProps): React.JSX.Element {
  return (
    <div className="img-solo">
      <Image src={image} alt={alt} width={width} height={height} />
    </div>
  );
}
