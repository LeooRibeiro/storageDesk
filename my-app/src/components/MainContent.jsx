import React from 'react'
import HeaderDashboard from './HeaderDashboard'
import InfoDashboard from './InfoDashboard'

const MainContent = () => {
  return (
    <div className='w-full'>
        <HeaderDashboard />
        <InfoDashboard/>
    </div>
  )
}

export default MainContent