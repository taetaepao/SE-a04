import Image from "next/image";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div className="w-64 h-80 bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden ">
      <div className="relative w-full h-3/4">
        <Image
          src={imgSrc}
          alt={venueName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 250px"
          className="object-cover"
        />
      </div>
      <div className="p-4 h-1/4 flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-800 text-center">
          {venueName}
        </p>
      </div>
    </div>
  );
}
