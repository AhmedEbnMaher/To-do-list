
// import pages
import IndexPage from '../pages/index/indexPage'
import TaskStatus from '../pages/taskStatus/taskStatus'
import NewTask from '../pages/newTask/newTask'
import TaskDate from '../pages/tasksDate/taskDate'
import TaskPriority from '../pages/taskPriority/taskPriority'


const userRoutes = [
  { path: '/my-tasks/index', component: IndexPage },
  { path: '/my-tasks/task-status', component: TaskStatus },
  { path: '/my-tasks/task-date', component: TaskDate },
  { path: '/my-tasks/new-task', component: NewTask },
  { path: '/my-tasks/task-priority', component: TaskPriority },
]


export {userRoutes}
