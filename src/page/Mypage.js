import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import Item from '../component/Item'
import PageNumber from '../component/PageNumber'

const Mypage = () => {

    const [data, setData] = useState([])

    const [page, setPage] = useState(0)

    const getData = async () => {
        const url = changePage()
        const itemData = await axios.get(url)

        setData(itemData.data.content)
        setPage(itemData.data.totalPages)
    }

    const changePage = () => {
        const url = 'https://mycroft-test-api.herokuapp.com/order'
        
        return url
    }

    const manyItems = data.map((item, i) => (
        <Item key = {i} item = {item} />
    ))

    useEffect(() => {
        getData()
    }, [])
    return(
        <>
            <div className = 'mypage-wrap'>
                <div className = 'order-list'>
                    {manyItems}
                </div>
                <PageNumber total = {page} change = {changePage}/>
            </div>
        </>
    )
}

export default Mypage