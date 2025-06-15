import React from 'react'
import { useState } from 'react'
import './App.css'
import Kanban from './components/Kanban'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600"> To-Do List</h1>
          <Kanban />
        </div>
      </div>    </>
  )
}

export default App
