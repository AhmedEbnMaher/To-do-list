import React  from 'react'
import { connect} from 'react-redux'
import './sideMenu.scss'

const SideMenue = props => {
if(props?.oneTask?.name && props.pathName==='/my-tasks/index'|| 
props.pathName==='/my-tasks/task-date'|| 
props.pathName==='/my-tasks/task-priority'
||props.pathName==='/my-tasks/task-status')
  return (
<div className='side-menu p-3'>
  <div>
    <div  className='side-menu-content mt-3'>
    <span className='title mr-2'>Task Name:  </span><span>{props?.oneTask?.name}</span>
    </div>
    <div  className='side-menu-content mt-3'>
    <span className='title mr-2'>Task Priority:  </span><span>{props?.oneTask?.priority}</span>
    </div>
    <div  className='side-menu-content mt-3'>
    <span className='title mr-2'>Task Status:  </span><span>{props?.oneTask?.status}</span>
    </div>
    <div  className='side-menu-content mt-3'>
    <span className='title mr-2'>Task Responsable:  </span><span>{props?.oneTask?.responsable}</span>
    </div>
    <div  className='side-menu-content mt-3'>
    <span className='title mr-2'>Task Start:  </span><span>{Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(props?.oneTask?.startDate)}</span>
    </div>
    <div  className='side-menu-content mt-3'>
    <span className='title mr-2'>Task End:  </span><span> {Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(props?.oneTask?.endDate)}</span>
    </div>
    <div  className='side-menu-content mt-3'>
    <span className='title mr-2'>Task Description:  </span><span>{props?.oneTask?.description}</span>
    </div>
    </div>


</div>
  )

  return (
    <div className='side-menu p-3'>
   
    
    </div>
      )

}


export const mapStateToProps = state => {
  return {
    oneTask: state.Tasks.oneTask,
 
  }
}



export default connect(mapStateToProps,null)(SideMenue)
