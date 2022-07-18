import { Layout } from 'antd';
import { PharmacyFooter } from '../components/footer/PharmacyFooter';
import { PharmacyList } from '../components/pharmacyList/PharmacyList';
import {useFetchPharmacy} from '../hooks/useFetch'

import 'antd/dist/antd.css';
import './PharmacyListPage.scss'

const { Header, Footer, Content } = Layout;

export const PharmacyListPage = () => {
    const pharmacy = useFetchPharmacy();
    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Content><PharmacyList pharmacyList={pharmacy.data} /></Content>
                <Footer><PharmacyFooter /></Footer>
            </Layout>
        </>
    )
}