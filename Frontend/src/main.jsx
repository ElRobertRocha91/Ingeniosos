import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { teacherApiSlice } from './features/teacherApiSlice.js';

const store = configureStore({
  reducer: {
    [teacherApiSlice.reducer]: teacherApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(teacherApiSlice.middleware),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
