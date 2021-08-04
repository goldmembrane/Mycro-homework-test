import React from 'react'
import _ from 'lodash'
import '../css/PageNumber.css'

const PageNumber = (props) => {

    const { total, change } = props

    const pages = _.range(1, total + 1)
    return (
       <nav>
           <ul>
               {pages.map((page) => (
                   <li key = {page} className = 'page-number'><a onClick = {() => change(page - 1)}>{page}</a></li>
               ))}
           </ul>
       </nav>
    )
}

export default PageNumber