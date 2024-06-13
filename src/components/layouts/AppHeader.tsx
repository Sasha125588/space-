import { Divider } from "antd";
import { Layout } from "antd";
import { BiLogoBitcoin } from "react-icons/bi";
import { Typography } from "antd";
import { IoNotifications } from "react-icons/io5";
import { TreeSelect } from "antd";
import { useState } from "react";

const { Title } = Typography;

const AppHeader: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Layout.Header className="px-4 h-[72px] text-center flex items-center justify-between rounded-t-2xl bg-slate-900">
        <div className="flex items-center text-center justify-center">
          <BiLogoBitcoin style={{ color: "#d4d6d6" }} className="w-12 h-12" />

          <Title
            className="text-white"
            style={{ marginBottom: 0, marginLeft: 8, color: "#d4d6d6" }}
            level={3}
          >
            CoinFusion
          </Title>
        </div>
        <div className="flex items-center text-center justify-center">
          <TreeSelect
            showSearch
            style={{ width: "200px", marginRight: "18px" }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Search..."
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
          />
          <IoNotifications className="w-8 h-6 text-gray-400 cursor-pointer" />
        </div>
      </Layout.Header>
      <Divider className="bg-zinc-600  m-0" />
    </>
  );
};

export default AppHeader;
