import React from 'react'
import {BiHomeSmile ,BiStats,BiPlus,BiTime,BiBrightness} from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import './footer.scss'

const Footer = props => {
  const history = useHistory()
  return (
<div className='footer'>
  <div className='container'>
  <ul>
    
  <li className={props.pathName==='/my-tasks/index'?'active':''}   onClick={() => {
                  history.push('/my-tasks/index')
                }}><div className='icon-list'><BiHomeSmile/></div><span>My Tasks</span></li>
                 <li className={props.pathName==='/my-tasks/new-task'?'active':''} onClick={() => {
                  history.push('/my-tasks/new-task')
                }}><div className='icon-list'><BiPlus/></div><span>Add Task</span> </li>
  <li className={props.pathName==='/my-tasks/task-date'?'active':''}  onClick={() => {
                  history.push('/my-tasks/task-date')
                }} ><div className='icon-list'><BiTime/></div><span>Tasks By Date</span></li>
 
  <li className={props.pathName==='/my-tasks/task-priority'?'active':''}  onClick={() => {
                  history.push('/my-tasks/task-priority')
                }}><div className='icon-list'><BiBrightness/></div><span>Tasks Priority</span>  </li>
  <li className={props.pathName==='/my-tasks/task-status'?'active':''}  onClick={() => {
                  history.push('/my-tasks/task-status')
                }}><div className='icon-list'><BiStats/></div><span>Tasks Status</span></li>

    
    
    
    
  </ul>
  </div>

</div>
  )
}

export default Footer
