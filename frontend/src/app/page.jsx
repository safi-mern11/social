import { CircleUserRound } from "lucide-react";
import Post from "./components/home/Post";

export default function Page() {
  return (
    <>
      {/* <h1 className="text-[24px] font-semibold leading-[28px] text-center mt-[30px]">Home</h1> */}
      <div className="pb-[30px]  mt-[20px]">
        <div className="flex items-center justify-between w-full mx-auto py-[16px] max-w-[650px]  border-b border-[#000] dark:border-[#ddd]/60">
          <div className="flex gap-[10px] items-center w-fit">
            <CircleUserRound className="w-[36px] h-[36px]" strokeWidth={0.95} />
            <p className="text-[#999999]">Start a thread...</p>
          </div>
          <button className="py-[5px] px-[18px] border rounded-[6px] font-medium border-[#000] dark:border-[#ddd]/60">Post</button>
        </div>


        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
    </>
  );
}
