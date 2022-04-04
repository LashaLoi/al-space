import React from 'react'
import Hero from '@modules/CV/components/hero'
import Projects from '@modules/CV/components/projects'
import Tech from '@modules/CV/components/tech'
import About from '@modules/CV/components/about'

export default function CV() {
  return (
    <>
      <Hero />
      <Projects />
      <Tech />
      <About />
    </>
  )
}
