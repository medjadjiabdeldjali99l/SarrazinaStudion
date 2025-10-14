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
}: ImgSoloProps): React.JSX.Element {
  return (
    // <div className="img-solo">
    //   <Image src={image} alt={alt} width={0} height={0} sizes="90vw" />
    // </div>
    <div className="img-solo">
      <Image src={image} alt={alt} width={19000} height={0} />
    </div>
  );
}
