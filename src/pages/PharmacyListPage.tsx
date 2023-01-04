import { Layout } from 'antd';
import { PharmacyFooter } from '../components/footer/PharmacyFooter';
import PharmacyHeader from '../components/header/PharmacyHeader';
import { PharmacyList } from '../components/pharmacyList/PharmacyList';
import {useFetchPharmacy} from '../hooks/useFetch'

//import './PharmacyListPage.scss'

const { Header, Footer, Content } = Layout;

export const PharmacyListPage = () => {
    const pharmacy = useFetchPharmacy();
    return (
        <>
            <Layout className='layout'>
                <Header><PharmacyHeader /></Header>
                <Content><PharmacyList pharmacyList={pharmacy.data} /></Content>
                <Footer><PharmacyFooter /></Footer>
            </Layout>
        </>
    )
}