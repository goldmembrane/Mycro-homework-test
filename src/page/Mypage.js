import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../component/Item'

const Mypage = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const itemData = await axios.get('https://mycroft-test-api.herokuapp.com/order')

        setData(itemData.data.content)
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
            </div>
        </>
    )
}

export default Mypage