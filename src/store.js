import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'
import projectReducer from './reducers/projectReducer'
import taskReducer from './reducers/taskReducer';

export default configureStore({
  reducer: {
      user: userReducer,
      notification: notificationReducer,
      projects: projectReducer,
      tasks: taskReducer
  }
});