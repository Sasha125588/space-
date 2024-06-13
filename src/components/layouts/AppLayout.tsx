import { Layout } from "antd";
import AppSider from "./AppSider";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

const { Content } = Layout;

const AppLayout: React.FC = () => {
  return (
    <>
      <div>
        <Layout className="h-screen w-screen p-8 px-16 bg-slate-500">
          <AppHeader />
          <Layout className=" bg-slate-900 rounded-b-2xl ">
            <AppSider />

            <Content className="rounded-br-2xl bg-slate-900">
              <AppContent />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default AppLayout;
