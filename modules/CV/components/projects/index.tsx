import React from 'react'
import Project from '@modules/CV/components/projects/components/project'

export default function Projects() {
  return (
    <div className="flex flex-col justify-center align-center mt-[200px] mb-[100px]">
      <h1 className="md:w-2/3 sm:w-2/3 w-full text-3xl mx-auto font-bold mb-10 text-center">
        Projects
      </h1>
      <Project
        link="https://play.google.com/store/apps/details?id=com.itechart.enterprise.discounts&hl=ru&gl=US"
        step={1}
        projectName=":iTechArt Discounts"
        color="211F1F"
        description="The project for tracking all possible benefits and discounts for employees"
        stuck="React React-Native Node.js GraphQL"
        position="Full Stack Engineer"
        imageUrl="data:image/png;base64,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"
      />
      <Project
        step={2}
        link="https://www.agentero.com/"
        projectName="Agentero"
        color="3EBA91"
        description="Independent insurance agents use Agentero to boost their revenue, save time, and deliver a superior customer experience."
        stuck="React Web-Components Golang GRPC Emotion"
        position="Frontend Engineer"
        imageUrl="https://avatars.githubusercontent.com/u/44772611?s=200&v=4"
      />
      <Project
        link="https://www.withcove.com/"
        step={3}
        projectName="Cove"
        color="C4ECE4"
        description="Diagnosis and treatment from the migraine experts"
        stuck="React Apollo GraphQL Styled-Component Storybook"
        position="Senior Frontend Engineer"
        imageUrl="data:image/png;base64,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"
      />
      <Project
        step={4}
        link="https://www.pandadoc.com/"
        projectName="PandaDoc"
        color="49B877"
        description="Take the work out of your document workflow"
        stuck="React Redux Immutable Jest Python Websockets Microservices"
        position="Senior Frontend Engineer"
        imageUrl="data:image/png;base64,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"
      />
    </div>
  )
}
