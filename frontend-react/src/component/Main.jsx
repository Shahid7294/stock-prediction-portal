import React from 'react'
import Button from './Button'

function Main() {
  return (
    <>
      <div className="container ">
        <div className="p-5 text-center bg-light-dark ">
          <h1>Stock Prediction Portal</h1>
          <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis aspernatur officiis corporis assumenda, architecto corrupti maiores aperiam ipsam odit, nisi quasi tempore! Libipisicing elit. Repellat omnis aspernatur officiis corporis assumenda, architecto corrupti maiores aperiam ipsam odit, nisi quasi tempore! Libero fugiat perspiciatis nemo ea. Eveniet, rerum!</p>
          {/* <a className='btn btn-info' href="">Login Now</a> */}
          <Button text='Login Now' class='btn-info'/>
        </div>
      </div>
    </>
  )
}

export default Main