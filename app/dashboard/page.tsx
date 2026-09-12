import React from 'react'
import { getTodos } from '../_lib/todos'
import { todo } from 'node:test'

const Dashboard = async() => {
    const todos = await getTodos()
  return (
    <div className='w-full h-full flex flex-wrap gap-5'>
        {todos.map((todo=><div className='border border-foreground p-5 ' key={todo.id}>
            <p>{todo.task}</p>
            <p>{todo.description}</p>
        </div>))}
    </div>
  )
}

export default Dashboard 