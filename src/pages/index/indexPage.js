import React from 'react'
import Cards from '../../components/cards/cards'
import './indexPage.scss'

const IndexPage = props => {
 
  return (
<div className='main-content'>
  <div className='inner-content'>

    <div className='card-inner-content'>
    <div className='scrollable'><Cards pathName={props.location.pathname}/></div>
    </div>
  
  </div>
</div>
  )
}

export default IndexPage
