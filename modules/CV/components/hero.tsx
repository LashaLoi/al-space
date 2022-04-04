import { MarkIcon } from '@modules/CV/icons'
import Links from '@modules/CV/components/links'
import React from 'react'

export default function Hero() {
  return (
    <section className="h-screen flex justify-center align-center flex-col">
      <div className="mt-20 container flex flex-col px-6 mx-auto space-y-6 lg:h-[32rem] lg:flex-row lg:items-center">
        <div className="flex items-center justify-center w-full lg:h-[650px] sm:h-[400px] h-[300px] lg:w-1/2">
          <img
            className="w-full h-full mx-auto rounded-lg lg:max-w-2xl object-cover"
            src="/assets/images/hero-iam.jpg"
            alt="glasses photo"
          />
        </div>
        <div className="w-full lg:w-1/2 sm:ml-20">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl mb-2 font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
              Aliaksei Loi
            </h1>
            <h1 className="text-md tracking-wide  text-slate-400  lg:text-2xl">
              Software Engineer
            </h1>
            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <MarkIcon />
                <span className="mx-2">Frontend development (JS, TS)</span>
              </p>
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <MarkIcon />
                <span className="mx-2">
                  Backend development (Node.js, Elixir)
                </span>
              </p>
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <MarkIcon />
                <span className="mx-2">Testing (e2e, unit, integration)</span>
              </p>
            </div>
            <Links />
          </div>
        </div>
      </div>
    </section>
  )
}
