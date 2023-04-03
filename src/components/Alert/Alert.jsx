import React from 'react'
import './style.css'

const Alert = (props) => {
  return (
    <div data-scroll-section className={`alert alert-${props.alert.type} alert-dismissible fade ${props.alert.isAlert?'show':''} fixed-top mt-5 text-center`} role="alert">
      <strong className='me-2'><i className="fa-solid fa-circle-check fa-fade me-1"></i>Successfull!</strong> {props.alert.message}
      <button type="button" className="btn-close rounded-circle py-3 my-1" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
