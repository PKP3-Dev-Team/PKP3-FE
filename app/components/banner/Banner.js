"use client";
import { IKImage } from "imagekitio-next";
export const Banner = ({ path, alt, tagPosition, urlEndpoint }) => {
  return (
    <div className="relative min-h-80">
      <IKImage
        urlEndpoint={urlEndpoint}
        path={path}
        alt={alt}
        fill
        className="object-cover"
        loading="lazy"
      />
      <div
        className={`absolute bg-white bg-opacity-70 p-6 rounded-lg text-2xl ${tagPosition}`}>
        "Palliative care is for everyone."
      </div>
    </div>
  );
};
