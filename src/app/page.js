import Image from "next/image";
import Logo from '../../public/logo.png'
import IconText from "@/components/IconText";
import { MdRailwayAlert } from "react-icons/md";
import { MdCrisisAlert } from "react-icons/md";
import { MdOutlineAddAlert } from "react-icons/md";
import Orders from "@/components/Orders";


export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="w-full h-[10vh] flex p-5">
        <Image 
        className="mr-auto"
        src={Logo}
        width={150}
        height={80}
        alt="Shypbuddy"
        />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
    <Image 
    src={'https://i.postimg.cc/xCfy7fJG/profile-picture-maker-before.webp'}
    className="rounded-full ml-2"
    width={50}
    height={50}
    />
      </div>
      <div className="w-full h-[100vh] flex">
        <div className="w-[10%] h-full flex flex-col justify-start gap-5 bg-blue-300">
         <IconText 
         Icon={MdRailwayAlert}
         text={'Train'}
         />
         <IconText 
         Icon={MdCrisisAlert}
         text={'Alert'}
         />
         <IconText 
         Icon={MdOutlineAddAlert}
         text={'outline alert'}
         />
        </div>
        <div className="w-[90%] h-full  flex justify-center items-center  bg-slate-300">
            {/* <div className="w-[100px] h-[100px]  bg-orange-300 object-center "></div> */}
            <Orders />
        </div>
      </div>
    </main>
  );
}
