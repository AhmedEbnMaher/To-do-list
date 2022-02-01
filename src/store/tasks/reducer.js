import { GET_TASKS ,GET_PRIORITY, GET_RESPONSABLE,GET_STATUS,GET_ONE_TASK} from './actionTypes'

const INIT_STATE = {
  tasks: [],
  priorities:[],
  resposables:[],
  status:[],
  oneTask:{}

}

const Tasks = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      }
      case GET_PRIORITY:
        return {
          ...state,
          priorities: action.payload,
        }
        case GET_STATUS:
          return {
            ...state,
            status: action.payload,
          }
          case GET_ONE_TASK:
            return {
              ...state,
              oneTask: action.payload,
            }
        case GET_RESPONSABLE:
          return {
            ...state,
            resposables: action.payload,
          }

    default:
      return state
  }
}

export default Tasks
