import React,{useEffect, useState} from 'react'
import CreatableSelect from 'react-select/creatable';
import { connect} from 'react-redux'
import { getPriorities,getResposables,getStatus,addTask} from '../../store/tasks/actions'
import { useHistory } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import './newTask.scss'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap'

const NewTask = props => {
  const history = useHistory()
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  const[taskName,setTaskName]=useState('')
  const[taskDescription,setTaskDescription]=useState('')
  const[taskStatus,setTaskStatus]=useState('')
  const[taskResposable,setTaskResposable]=useState('')
  const[taskPriority,setTaskPriority]=useState('')
  const[active,setActive]=useState(true)
  const startDateChange = date => {
    const newDate=new Date(date).getTime();
    setstartDate(newDate)
  }

  const endDateChange = date => {
    const newDate=new Date(date).getTime();
    setendDate(newDate)
  }
useEffect(()=>{
  props.getStatus()
  props.getPriorities()
  props.getResposables()
},[props.getPriorities,props.getResposables,props.getStatus])
useEffect(()=>{
if(taskPriority!==''&&taskResposable !==''&&taskStatus!==''&&taskName!==''&&taskDescription!=='')
{
  setActive(false)
}
},[taskPriority,taskResposable,taskStatus,taskName,taskDescription])

  return (
<div className='new-task-wrapper'>
<Row className='w-100'>
              <Col lg="12">
                <Card >
                  <CardBody>
                    <CardTitle className="d-flex">
                    Add New Task
                    </CardTitle>

            
                    <Form>
                      <FormGroup className="mb-3" row>
                        <Label htmlFor="taskName" className="col-form-label ml-3 label-width">
                          Task Name
                        </Label>
                        <Col lg="8">
                          <Input
                            id="taskName"
                            name="taskname"
                            type="text"
                            value={taskName}
                            className="form-control"
                            placeholder="task-name"
                            onChange={e => {
                            setTaskName(e.target.value)
                            }}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className="mb-3" row>
                        <Label htmlFor="taskdesc" className="col-form-label ml-3 label-width">
                          Description
                        </Label>
                        <Col lg="8">
                          <textarea
                            className="form-control"
                        
                            value={taskDescription}
                            id="taskdesc"
                            rows="3"
                            placeholder="Enter task Description..."
                            onChange={e => {
                            setTaskDescription(e.target.value)
                            }}
                          />
                        </Col>
            
                      </FormGroup>
                      <FormGroup className="mb-3" row>
                        <Label htmlFor="startdate" className="col-form-label ml-3 label-width">
                          Start Date
                        </Label>
                        <Col lg='8'>
              <Row>
                <Col >
                  <DatePicker
                  id='startdate'
                    className="form-control"
                    selected={startDate}
                    onChange={startDateChange}
                  />
                </Col>
                <Label htmlFor="endtdate" className="col-form-label ml-3 label-width">
                          End Date
                        </Label>
                <Col >
                  <DatePicker
                  id='enddate'
                    className="form-control"
                    selected={endDate}
                    onChange={endDateChange}
                  />
                </Col>
              </Row>
            </Col>
                      </FormGroup>
                      <FormGroup className="mb-3" row>
                        <Label htmlFor="taskpriority" className="col-form-label ml-3 label-width">
                          Task Priority
                        </Label>
                        <Col lg="8">
                        <CreatableSelect
            placeholder='Select priority'
            isClearable
             onChange={(e)=>{
               setTaskPriority(e.label)
              
             }}
		        options={props.priorities}
		    
			/>
                        </Col>
                      </FormGroup>
                      <FormGroup className="mb-3" row>
                        <Label htmlFor="taskResposable" className="col-form-label ml-3 label-width">
                          Task Responsable
                        </Label>
                        <Col lg="8">
                        <CreatableSelect
                 placeholder='Select Responsable'
                 isClearable
                 onChange={(e)=>{
                  setTaskResposable(e.label)
                 }}
		             options={props.resposables}
		    
		             	/>
                        </Col>
                      </FormGroup>
                      <FormGroup className="mb-3" row>
                        <Label htmlFor="taskStatus" className="col-form-label ml-3 label-width">
                          Task Status
                        </Label>
                        <Col lg="8">
                        <CreatableSelect
                 placeholder='Select Status'
                 isClearable
                 onChange={(e)=>{
                   setTaskStatus(e.label)
                 }}
		             options={props.status}
		    
		             	/>
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <Row className="col-12  justify-content-between">
                    <div className="col-12 col-sm-6" style={{ height: '85px' }}>
                      <h6 className="mt-2">{props.project?.type}</h6>
                      <p className="font-size-11">{props.project?.description}</p>
                    </div>
                    <Col lg="5" md="5" sm="5" className="mt-4 mb-3 d-flex justify-content-end">
                      <Button
                        type="button"
                        color='primary'
                        className="pl-2 pr-2 pt-0 pb-0 col-4 mr-4 button-color-bc"
                        onClick={() => {
                          history.push('/my-tasks/index')
                        }}
                        style={{ height: '36px' }}>
                        Cancel
                      </Button>
               
                        <Button
                          type="submit"
                          disabled={active}
                          color='primary'
                          onClick={() => {
                            props.addTask({name:taskName,description:taskDescription,status:taskStatus,startDate:startDate,endDate:endDate,responsable:taskResposable,priority:taskPriority})
                            history.push('/my-tasks/index')
                          }}
                          className='pl-3 pr-3 pt-0 pb-0 col-4 button-color-bc'
                          style={{ height: '36px' }}>
                          Add
                        </Button>
                    
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
</div>
  )
}

export const mapStateToProps = state => {
  return {
    resposables: state.Tasks.resposables,
    priorities: state.Tasks.priorities,
    status: state.Tasks.status,
 
  }
}

export const mapDispatchToProps = {
  getResposables,
  getPriorities,
  getStatus,
  addTask

}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask)