import React from 'react'
import CreateForm from './CreateForm'
import TableForm from './TableForm'

export default function ExQuanLiForm() {
  return (
    <div>
        <h1 className='bg-dark text-white p-3'>Thông tin sinh viên</h1>
        <CreateForm/>
        <TableForm/>
    </div>
  )
}
