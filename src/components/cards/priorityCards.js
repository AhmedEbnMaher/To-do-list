import React, { useEffect, useState} from 'react'
import {BiDotsVertical,BiCalendarStar,BiCalendarX,BiTask}from'react-icons/bi'
import { connect} from 'react-redux'
import { getTasks ,getOneTask,updateStatus} from '../../store/tasks/actions'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap'
import './cards.scss'

const PriorityCards = props => {
  const [active,setActive]=useState(props?.oneTask?.id)
  useEffect(()=>{
props.getTasks()


  },[props.getTasks])
 
 
  return (
      <div>
          <div><h6>High Priority Tasks</h6></div>
<div className='d-flex flex-wrap todos-wrapper'>
{props.tasks.filter(tsk => tsk.priority === 'high').map((task,idx)=>(
  <div className='card-task ml-4' key={idx}>
  <div className='card-body p-0' >
<div className='text-center card-badge d-flex justify-content-between'>
  <span >{task.name}</span>
  <UncontrolledDropdown direction="left">
                        <DropdownToggle href="#" className='tog-button' tag="i">
                         <BiDotsVertical/> 
                        </DropdownToggle>
                        <DropdownMenu className='menu-content'>
                          <div className='head-title'>Change Status</div>
                          <DropdownItem
                            onClick={() => {
                           props.updateStatus({id:task.id,name:task.name,description:task.description,
                            priority:task.priority,responsable:task.responsable,
                            startDate:task.startDate, endDate:task.endDate, 
                           status:'in progress'},task.id)
                           props.getTasks()
                           props.getTasks()
                            }}>
                            In Progress
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              props.updateStatus({id:task.id,name:task.name,description:task.description,
                                priority:task.priority,responsable:task.responsable,
                                startDate:task.startDate, endDate:task.endDate, 
                               status:'to-do'},task.id)
                               props.getTasks()
                               props.getTasks()
                            }}
                            className="waves-effect waves-light"
                            >
                            To-do
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              props.updateStatus({id:task.id,name:task.name,description:task.description,
                                priority:task.priority,responsable:task.responsable,
                                startDate:task.startDate, endDate:task.endDate, 
                               status:'Done'},task.id)
                               props.getTasks()
                               props.getTasks()
                            }}
                            className="waves-effect waves-light"
                            >
                            Done
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
</div>

<div className='text-center'>
  <button  className={active!==task.id?'icon-style':'icon-active-style'} onClick={()=>{
    props.getOneTask(task.id)
 setActive(task.id)
  }}><BiTask/></button>
</div>
<div className='text-center'>
  <span className={task.status==='to-do'?'text-warning':task.status==='in progress'?'text-danger':'text-success'}>{task.status}</span>
</div>
<div className='d-flex justify-content-between pl-3 pr-3'>
  <div>

  <BiCalendarStar className='cursor-pointer'   data-toggle="tooltip" title="start date"/>
  <span className='ml-2 date-style'> {Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(task.startDate)}</span>
  </div>
<div>
  <BiCalendarX className='cursor-pointer' data-toggle="tooltip" title="end date"/>
  <span className='ml-2 date-style'> {Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(task.endDate)}</span>
  </div>
</div>

<div className='d-flex pt-2 pl-3 pr-3'>
  <span className='date-style'>Priority:</span><span className='date-style ml-3'>{task.priority}</span>
</div>
<div className='d-flex pt-2 pl-3 pr-3'>
  <span className='date-style'>Responsable:</span><span className='date-style ml-3'>{task.responsable}</span>
</div>
<div className='card-description'>
<span>{task.description}</span>
</div>
  </div>
  </div>
))}
</div>
<div><h6>Meduim Priority Tasks</h6></div>
<div className='d-flex flex-wrap todos-wrapper'>
{props.tasks.filter(tsk => tsk.priority === 'medium').map((task,idx)=>(
  <div className='card-task ml-4' key={idx}>
  <div className='card-body p-0' >
<div className='text-center card-badge d-flex justify-content-between'>
  <span >{task.name}</span>
  <UncontrolledDropdown direction="left">
                        <DropdownToggle href="#" className='tog-button' tag="i">
                         <BiDotsVertical/> 
                        </DropdownToggle>
                        <DropdownMenu className='menu-content'>
                          <div className='head-title'>Change Status</div>
                          <DropdownItem
                            onClick={() => {
                           props.updateStatus({id:task.id,name:task.name,description:task.description,
                            priority:task.priority,responsable:task.responsable,
                            startDate:task.startDate, endDate:task.endDate, 
                           status:'in progress'},task.id)
                           props.getTasks()
                           props.getTasks()
                            }}>
                            In Progress
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              props.updateStatus({id:task.id,name:task.name,description:task.description,
                                priority:task.priority,responsable:task.responsable,
                                startDate:task.startDate, endDate:task.endDate, 
                               status:'to-do'},task.id)
                               props.getTasks()
                               props.getTasks()
                            }}
                            className="waves-effect waves-light"
                            >
                            To-do
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              props.updateStatus({id:task.id,name:task.name,description:task.description,
                                priority:task.priority,responsable:task.responsable,
                                startDate:task.startDate, endDate:task.endDate, 
                               status:'Done'},task.id)
                               props.getTasks()
                               props.getTasks()
                            }}
                            className="waves-effect waves-light"
                            >
                            Done
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
</div>

<div className='text-center'>
  <button  className={active!==task.id?'icon-style':'icon-active-style'} onClick={()=>{
    props.getOneTask(task.id)
 setActive(task.id)
  }}><BiTask/></button>
</div>
<div className='text-center'>
  <span className={task.status==='to-do'?'text-warning':task.status==='in progress'?'text-danger':'text-success'}>{task.status}</span>
</div>
<div className='d-flex justify-content-between pl-3 pr-3'>
  <div>

  <BiCalendarStar className='cursor-pointer'   data-toggle="tooltip" title="start date"/>
  <span className='ml-2 date-style'> {Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(task.startDate)}</span>
  </div>
<div>
  <BiCalendarX className='cursor-pointer' data-toggle="tooltip" title="end date"/>
  <span className='ml-2 date-style'> {Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(task.endDate)}</span>
  </div>
</div>

<div className='d-flex pt-2 pl-3 pr-3'>
  <span className='date-style'>Priority:</span><span className='date-style ml-3'>{task.priority}</span>
</div>
<div className='d-flex pt-2 pl-3 pr-3'>
  <span className='date-style'>Responsable:</span><span className='date-style ml-3'>{task.responsable}</span>
</div>
<div className='card-description'>
<span>{task.description}</span>
</div>
  </div>
  </div>
))}
</div>
<div><h6>Low Priority Tasks</h6></div>
<div className='d-flex flex-wrap todos-wrapper'>
{props.tasks.filter(tsk => tsk.priority === 'low').map((task,idx)=>(
  <div className='card-task ml-4' key={idx}>
  <div className='card-body p-0' >
<div className='text-center card-badge d-flex justify-content-between'>
  <span >{task.name}</span>
  <UncontrolledDropdown direction="left">
                        <DropdownToggle href="#" className='tog-button' tag="i">
                         <BiDotsVertical/> 
                        </DropdownToggle>
                        <DropdownMenu className='menu-content'>
                          <div className='head-title'>Change Status</div>
                          <DropdownItem
                            onClick={() => {
                           props.updateStatus({id:task.id,name:task.name,description:task.description,
                            priority:task.priority,responsable:task.responsable,
                            startDate:task.startDate, endDate:task.endDate, 
                           status:'in progress'},task.id)
                           props.getTasks()
                           props.getTasks()
                            }}>
                            In Progress
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              props.updateStatus({id:task.id,name:task.name,description:task.description,
                                priority:task.priority,responsable:task.responsable,
                                startDate:task.startDate, endDate:task.endDate, 
                               status:'to-do'},task.id)
                               props.getTasks()
                               props.getTasks()
                            }}
                            className="waves-effect waves-light"
                            >
                            To-do
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              props.updateStatus({id:task.id,name:task.name,description:task.description,
                                priority:task.priority,responsable:task.responsable,
                                startDate:task.startDate, endDate:task.endDate, 
                               status:'Done'},task.id)
                               props.getTasks()
                               props.getTasks()
                            }}
                            className="waves-effect waves-light"
                            >
                            Done
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
</div>

<div className='text-center'>
  <button  className={active!==task.id?'icon-style':'icon-active-style'} onClick={()=>{
    props.getOneTask(task.id)
 setActive(task.id)
  }}><BiTask/></button>
</div>
<div className='text-center'>
  <span className={task.status==='to-do'?'text-warning':task.status==='in progress'?'text-danger':'text-success'}>{task.status}</span>
</div>
<div className='d-flex justify-content-between pl-3 pr-3'>
  <div>

  <BiCalendarStar className='cursor-pointer'   data-toggle="tooltip" title="start date"/>
  <span className='ml-2 date-style'> {Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(task.startDate)}</span>
  </div>
<div>
  <BiCalendarX className='cursor-pointer' data-toggle="tooltip" title="end date"/>
  <span className='ml-2 date-style'> {Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(task.endDate)}</span>
  </div>
</div>

<div className='d-flex pt-2 pl-3 pr-3'>
  <span className='date-style'>Priority:</span><span className='date-style ml-3'>{task.priority}</span>
</div>
<div className='d-flex pt-2 pl-3 pr-3'>
  <span className='date-style'>Responsable:</span><span className='date-style ml-3'>{task.responsable}</span>
</div>
<div className='card-description'>
<span>{task.description}</span>
</div>
  </div>
  </div>
))}
</div>
</div>
  )
}

export const mapStateToProps = state => {
  return {
    tasks: state.Tasks.tasks,
    oneTask: state.Tasks.oneTask,
  }
}

export const mapDispatchToProps = {
  getTasks,
  getOneTask,
  updateStatus

}

export default connect(mapStateToProps, mapDispatchToProps)(PriorityCards)
