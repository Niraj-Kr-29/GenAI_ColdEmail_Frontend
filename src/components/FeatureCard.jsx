import React from 'react'

const FeatureCard = ({title="Feature", description="Description"}) => {
  return (
    <div className='h-[22rem] w-80 bg-slate-700 rounded-xl p-4'>
       <div className='text-2xl font-semibold text-white'>{title}</div>
    </div>
  )
}

export default FeatureCard