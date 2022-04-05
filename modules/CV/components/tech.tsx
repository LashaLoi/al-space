import React from 'react'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export default function Tech() {
  return (
    <div className="flex flex-col justify-center align-center w-full">
      <h1 className="md:w-2/3 sm:w-2/3 w-full text-3xl mx-auto font-bold mb-10 text-center">
        Stack
      </h1>
      <div className="mx-auto px-10 mb-10">
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            Languages:
          </div>
          <p className="">- JavaScript, TypeScript.</p>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            Frameworks/libs:
          </div>
          <div className="">
            - React (deep knowledge how it works, hooks, concurrent mode, fiber,
            suspense)
          </div>
          <div className=""> - Vue (Vuex, Vuetify, Vue-router)</div>
          <div className=""> - Next.js</div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            State managers:
          </div>
          <div className="">
            - Redux (reselect, redux-actions, redux-sagas, redux-symbiote,
            redux-toolkit, created my own redux)
          </div>
          <div className=""> - Effector</div>
          <div className=""> - MobX</div>
          <div className=""> - Recoil</div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            Related libs:
          </div>
          <div className="">
            - styled-components, emotion, react-spring, framer-motion, immutable
          </div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">GraphQL:</div>
          <div className="">
            - type-graphql, Apollo (Apollo-cache, Apollo-link, etc)
          </div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">Node.js:</div>
          <div className=""> - Nest, express, koa, typeorm</div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            Design systems:
          </div>
          <div className=""> - Material-UI, Antd, Semantic UI</div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">Styles:</div>
          <div className=""> - css, less, sass, postcss</div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            Configuration:
          </div>
          <div className="">
            - Webpack (tree-shaking, code-splitting), Babel, Eslint, Prettier,
            Hasky
          </div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">Testing:</div>
          <div className="">- Jest, Enzyme, react-testing-library, Cypress</div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">Other:</div>
          <div className="">
            - Storybook, WebComponents, Docker, docker-compose, Postman,
            GraphiQL
          </div>
        </div>
        <div className="mb-8">
          <div className="mb-1 text-slate-400 font-bold text-lg">
            Databases:
          </div>
          <div className=""> - MongoDB, Postgres, SQLite, MySQL, Redis.</div>
        </div>
      </div>
    </div>
  )
}
