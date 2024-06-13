import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineFund } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { RxBackpack } from "react-icons/rx";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { Divider } from "antd";
import { Layout } from "antd";

const AppSider = () => {
  return (
    <>
      <Layout.Sider
        width="6%"
        className="text-center h-full flex flex-col justify-between items-center rounded-bl-2xl bg-slate-900"
        style={{ backgroundColor: "#0F172A" }}
      >
        <div className="flex flex-col h-full justify-between items-center">
          <div className=" flex flex-col gap-6 pt-8">
            <RiAccountCircleLine className="w-8 h-6 text-gray-400 cursor-pointer" />
            <AiOutlineFund className="w-8 h-6 text-gray-400 cursor-pointer" />
            <BiWallet className="w-8 h-6 text-gray-400 cursor-pointer" />
            <RxBackpack className="w-8 h-6 text-gray-400 cursor-pointer" />
            <HiOutlineSwitchHorizontal className="w-8 h-6 text-gray-400 cursor-pointer" />
          </div>
          <div className="pb-8 ">
            <LuSettings className="w-8 h-6 text-gray-400 cursor-pointer" />
          </div>
        </div>
      </Layout.Sider>
      <Divider className="bg-zinc-600 h-full m-0" type="vertical" />
    </>
  );
};

export default AppSider;
