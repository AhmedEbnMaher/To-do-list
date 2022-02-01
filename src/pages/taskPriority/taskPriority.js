import React from 'react'
import Cards from '../../components/cards/cards'
import '../index/indexPage.scss'

const TaskPriority = props => {
  return (
<div className='inner-content'>

<div className='card-inner-content'>
<div className='scrollable'><Cards pathName={props.location.pathname}/></div>
</div>

</div>
  )
}

export default TaskPriority
