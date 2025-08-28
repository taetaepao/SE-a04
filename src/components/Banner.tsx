import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src="/img/cover2.jpg"
        alt="cover"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
      <div className="text-center text-white px-6 py-6 bg-black/60 rounded-xl max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Where every event finds its venue
          </h1>
          <h3 className="text-lg md:text-xl">
            เราพร้อมให้บริการสถานที่จัดเลี้ยงสำหรับทุกโอกาสสำคัญของคุณ
          </h3>
        </div>
      </div>
    </div>
  );
}
