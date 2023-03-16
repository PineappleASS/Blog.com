import React from "react";
import Zoom from "react-medium-image-zoom";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
}

const ImageBlock = ({ src, alt, caption }: ImageProps) => {

    const convertImage = (w: number, h: number) => `
      <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#333" offset="20%" />
            <stop stop-color="#222" offset="50%" />
            <stop stop-color="#333" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#333" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
      </svg>`;

    const toBase64 = (str: string) =>
      typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str);

  return (
    <div className="flex justify-center mb-4">
        <figure className="w-auto flex flex-col justify-center">
            <Zoom>
              <Image
                src={src}
                alt={alt}
                className="w-auto h-auto rounded-lg"
                width={1600}
                height={1200}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(800, 600))}`}
              />
            </Zoom>
          <figcaption className="mt-2 text-md italic font-semibold text-center text-gray-500 dark:text-gray-400-400">
            {caption}
          </figcaption>
        </figure>
    </div>
  );
};

export default ImageBlock;
