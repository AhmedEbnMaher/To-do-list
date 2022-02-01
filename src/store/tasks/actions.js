import {GET_TASKS,GET_PRIORITY,GET_RESPONSABLE,GET_STATUS,GET_ONE_TASK , ADD_TASK,UPDATE_STATUS} from './actionTypes'
export function getTasks() {
    return async dispatch => {
      const response = await fetch('http://localhost:3001/tasks/')
      let payload = await response.json()
  
        dispatch({
          type: GET_TASKS,
          payload,
        })
      }}
      export function getPriorities() {
       
        return async dispatch => {
          const response = await fetch(`http://localhost:3001/priorities`)
          let payload = await response.json()
            dispatch({
              type: GET_PRIORITY,
              payload,  
            })
          }}

          export function getResposables() {
       
            return async dispatch => {
              const response = await fetch(`http://localhost:3001/responsables`)
              let payload = await response.json()
                dispatch({
                  type: GET_RESPONSABLE,
                  payload,
                })
              }}
              export function getStatus() {
       
                return async dispatch => {
                  const response = await fetch(`http://localhost:3001/status`)
                  let payload = await response.json()
                    dispatch({
                      type: GET_STATUS,
                      payload,
                    })
                  }}
  export function getOneTask(id) {
       
                return async dispatch => {
                  const response = await fetch(`http://localhost:3001/tasks/${id}`)
                  let payload = await response.json()
                    dispatch({
                      type: GET_ONE_TASK,
                      payload,
                    })
                  }}
                  export const addTask = newTask => {
  return async dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    }
    const response = await fetch('http://localhost:3001/tasks', requestOptions)
    const payload = await response.json()

    dispatch({
      type: ADD_TASK,
      payload,
    })
  }
}
export function updateStatus(val, id) {
  return async dispatch => {
    const requestOptions = {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(val),
    }
    const response = await fetch(`http://localhost:3001/tasks/${id}`, requestOptions)
    const payload = await response.json()

    dispatch({
      type: UPDATE_STATUS,
      payload,
    })
  }
}