import { Layout, Space } from "antd";
import FilterPanelContainer from "../container/FilterPanelContainer/FilterPanelContainer";
import { PharmacyFooter } from "../components/footer/PharmacyFooter";
import PharmacyHeader from "../components/header/PharmacyHeader";
import { PharmacyListContainer } from "../container/PharmacyListContainer/PharmacyListContainer";

import "./PharmacyListPage.scss";

const { Header, Footer, Content } = Layout;

export const PharmacyListPage = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <PharmacyHeader />
        </Header>
        <Content>
          <Space direction="vertical" style={{ display: "flex" }}>
            <FilterPanelContainer />
            <PharmacyListContainer />
          </Space>
        </Content>
        <Footer>
          <PharmacyFooter />
        </Footer>
      </Layout>
    </>
  );
};
