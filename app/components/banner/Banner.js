import Image from "next/image";
export const Banner = ({ src, alt, tagPosition }) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={800}
        height={600}
        // sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        className={`absolute bg-white bg-opacity-70 p-6 rounded-lg text-2xl ${tagPosition}`}>
        "Palliative care is for everyone."
      </div>
    </div>
  );
};
