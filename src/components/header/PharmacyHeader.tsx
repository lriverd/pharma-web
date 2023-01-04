import {Input} from 'antd'

const { Search } = Input;

const onSearch = () => {
    alert("Nones")
}

const PharmacyHeader = () => {
    return <>
    <Search
      placeholder="Nombre de farmacia"
      allowClear
      enterButton="Search"
      style={{ width: 304 }}
      onSearch={onSearch}
    />
    </>
}

export default PharmacyHeader