import React from 'react'

const FeatureCard = ({title="Feature", description="Description"}) => {
  return (
    <div className='h-[22rem] w-80 bg-slate-700 rounded-xl p-4 px-6'>
       <div className='text-2xl font-semibold text-yellow-500 h-1/4 uppercase'>{title}</div>
       <div className='text-base text-justify text-zinc-200 h-3/4'>{description}</div>
    </div>
  )
}

export default FeatureCard