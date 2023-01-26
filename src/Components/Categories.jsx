import React from 'react'
import styled from 'styled-components'
import {categoriesItems} from "../data"
import CategoriesItem from "./CategoriesItem";
import {mobile} from "../responsive"


const Container=styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile ({flexDirection:"column",padding:"0px",})}
`
const Categories = () => {
  return (
<Container>
    {
        categoriesItems.map((item)=>(
            <CategoriesItem item={item} key={item.id} />
        ))
    }

</Container>
  )
}

export default Categories