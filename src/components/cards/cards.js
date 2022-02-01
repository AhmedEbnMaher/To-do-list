import React from 'react'
import IndexCards from './indexCards'
import DateCards from './dateCards'
import PriorityCards from './priorityCards'
import StatusCards from './statusCards'
import './cards.scss'

const Cards = props => {

 
if(props.pathName==='/my-tasks/index') 
{
  return (
<div>
<IndexCards/>
</div>
  )
}else if(props.pathName==='/my-tasks/task-date'){
  return (
    <div>
    <DateCards/>
    </div>)
}
else if(props.pathName==='/my-tasks/task-priority'){
  return (
    <div>
    <PriorityCards/>
    </div>)
}
else{
  return (
    <div>
    <StatusCards/>
    </div>)
}
}



export default Cards
