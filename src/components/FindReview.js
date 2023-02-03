import React from 'react'
import { useLocation } from 'react-router-dom';

const FindReview = () => {
    const booking= useLocation();
    const state = booking.state;
  return (
    <div>
        hii
      {state.data.membership}
    </div>
  )
}

export default FindReview
