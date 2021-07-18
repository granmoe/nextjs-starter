import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <div>
          <h1>Let&apos;s write a component 🤩</h1>
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
