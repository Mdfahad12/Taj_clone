import React from 'react'

const GiftForm = () => {
  return (
    <div>
      <h1>Enter Gift Card Details</h1>
      <label className="fna" for="email">Email</label>
      <input
               style={{width:"300px"}}
                type="email"
                id="email"
            
                name="email"
                placeholder="email"
              />
    </div>
  )
}

export default GiftForm
