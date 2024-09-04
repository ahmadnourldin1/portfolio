import PrimaryButton from "@/components/common/buttons/PrimaryButton";

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
      <div className="w-full md:w-1/2"></div>
    </div>
  );
}
