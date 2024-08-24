import Image from "next/image";
import image from "@/public/avatar.jpg";

export default function HomePage() {
  return (
    <div className="p-5 flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-5xl font-bold text-center lg:w-[980px]">
          Now enjoy <span className="text-purple-600">listening</span> to your
          favorite articles on the go with Echo.
        </h1>
        <p className="lg:w-[800px]">
          With Echo, turn any article into an immersive audio experience.
          Effortlessly convert written content into engaging spoken word, making
          information accessible anytime, anywhere.
        </p>
      </div>
      <div className="flex items-center mt-4">
        <Image
          src={image}
          alt="avatar"
          width={590}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
