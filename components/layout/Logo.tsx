import Image from "next/image";

export default function Logo({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={180}
      height={48}
      className="h-9 w-auto object-contain"
    />
  );
}
