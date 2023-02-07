import { Layout, Space } from "antd";
import FilterPanelContainer from "../container/FilterPanelContainer/FilterPanelContainer";
import { PharmacyFooter } from "../components/footer/PharmacyFooter";
import PharmacyHeader from "../components/header/PharmacyHeader";
import { PharmacyList } from "../components/pharmacyList/PharmacyList";

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
            <PharmacyList />
          </Space>
        </Content>
        <Footer>
          <PharmacyFooter />
        </Footer>
      </Layout>
    </>
  );
};
