import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import SVG from "@/components/common/SVG";
import CrossCubes from "@/components/icons/CrossCubes";
import Image from "next/image";
import ProfilePicture from "../public/body-photo.png";
import CircleGroup from "@/components/icons/CircleGroup";

export default function Home() {
  return (
    <div className="w-full px-5 md:px-0 flex items-center justify-between flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-start justify-center flex-col gap-5">
        <h1 className="text-3xl">
          Elias is a <span className="text-primary">web designer</span> and <span className="text-primary">front-end developer</span>
        </h1>
        <p className="text-grey text-sm md:w-[80%]">He crafts responsive websites where technologies meet creativity</p>
        <PrimaryButton className="bg-backgroundSecondary border-primary border-2 rounded-none hover:bg-primary20 hover:text-white transition-all" text="Contact me!!" />
      </div>
      <div className="w-full md:w-1/2 relative flex justify-center items-center flex-col">
        <SVG icon={<CrossCubes className="w-full h-full fill-primary" />} className="w-40 h-40 absolute left-20 top-10 -z-10" />     
        <Image src={ProfilePicture} alt="profile picture" className="z-10" width={300} height={300} />
        <SVG icon={<CircleGroup className="w-full h-full fill-primary" />} className="w-15 h-15 absolute right-20 bottom-20 z-10" />     
        <div className="w-[80%] h-15 border-2 border-grey z-20 p-2 flex items-center gap-2">
          <div className="w-5 h-5 bg-primary" /> 
          <p className="text-grey">Currently working on <span className="text-white font-semibold">Portfolio</span></p>
        </div>
      </div>
    </div>
  );
}
