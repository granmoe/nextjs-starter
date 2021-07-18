import Head from 'next/head'
import styled from 'styled-components'
import Input from './input'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stripe Code Exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <div>
          <h1>Let&apos;s write a component 🤩</h1>
          <h2>Experiment area 👇</h2>

          <Input />
        </div>
      </Main>
    </div>
  )
}

const Main = styled.main`
  margin: 32px 16px;
  display: flex;
  justify-content: center;
`
