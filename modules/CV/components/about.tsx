import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col justify-center align-center w-full">
      <h1 className="md:w-2/3 sm:w-2/3 w-full text-3xl mx-auto font-bold mb-10 text-center">
        More
      </h1>
      <div className="mx-auto px-10 mb-10 text-center">
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            I have strong expertise in creating dev presentations and courses.
          </div>
          <p className="text-emerald-400">
            <a
              href="https://www.youtube.com/watch?v=tGV73xJmDzI&t=82s"
              className="hover:text-emerald-600"
            >
              Future of React. Concurrent mode
            </a>
          </p>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            Created own state manager and provider for react
          </div>
          <p className="text-emerald-400 ">
            <a
              href="https://www.npmjs.com/package/sideswipeloi-react"
              className="mr-2 hover:text-emerald-600"
            >
              sideswipeloi
            </a>
            <a
              href="https://www.npmjs.com/package/sideswipeloi-react"
              className="hover:text-emerald-600"
            >
              sideswipeloi-react
            </a>
          </p>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            Created own redux&react-redux
          </div>
          <p className="text-emerald-400">
            <a
              href="https://github.com/LashaLoi/own-react-redux"
              className="hover:text-emerald-600"
            >
              own-react-redux
            </a>
          </p>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">Learning</div>
          <p className="text-slate-400">
            Elixir, Golang, Python, Rescript, Kotlin, Kubernetes, CircleCI
          </p>
        </div>
      </div>
    </div>
  )
}
