import React from 'react'

const FeatureCard = ({title="Feature", description="Description"}) => {
  return (
    <div className='sm:h-[22rem] sm:w-80 lg:w-72 w-full h-full bg-slate-700 rounded-xl p-4 px-6 hover:scale-110 transition-all cursor-pointer hover:bg-slate-600'>
       <div className='text-2xl font-semibold text-yellow-500 h-1/4 uppercase w-full'>{title}</div>
       <div className='text-base text-justify text-zinc-200 h-3/4 w-full'>{description}</div>
    </div>
  )
}

export default FeatureCard