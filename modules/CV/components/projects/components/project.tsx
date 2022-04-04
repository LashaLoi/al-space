import React from 'react'

interface ProjectProps {
  imageUrl: string
  color: string
  projectName: string
  step: number
  description: string
  position: string
  stuck: string
  link: string
}

export default function Project({
  imageUrl,
  color,
  step,
  projectName,
  description,
  stuck,
  position,
  link,
}: ProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer flex md:flex-row flex-col hover:bg-slate-100 hover:dark:bg-stone-800 transition-all justify-center md:text-left text-center"
    >
      <div className="flex sm:py-12 px-6 flex-col justify-center items-center relative">
        <div
          className={`border-gray-100 border-2 rounded-full w-8 h-8 text-xs text-white font-black flex justify-center items-center absolute top-2 right-8 mt-16`}
          style={{
            backgroundColor: '#' + color,
          }}
        >
          {step}
        </div>
        <img
          alt={imageUrl}
          className="w-40 h-40 rounded-full shadow my-5 object-cover"
          src={imageUrl}
        />
      </div>
      <div className="w-full sm:mx-0 mx-auto  sm:p-10 p-4 flex flex-col justify-center max-w-2xl rounded">
        <div
          className={`md:text-3xl text-xl font-bold dark:text-slate-400 text-[#${color}95]`}
        >
          {projectName}
        </div>
        <div
          className={`my-2 sm:text-lg text-sm dark:text-white text-[#${color}]`}
        >
          {description}
        </div>
        <div className="mb-2 sm:text-sm text-xs text-slate-400 dark:text-slate-200">
          {position} <span className="text-black dark:text-white"> - </span>{' '}
          {stuck}
        </div>
      </div>
    </a>
  )
}
