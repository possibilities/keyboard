import Head from 'next/head'
import Keyboard from '../Keyboard'

import keys from '../keys'

const Index = () =>
  <>
    <Head>
      <title>keyboard</title>
    </Head>
    <Keyboard width={500} keys={keys} />
    <br />
    <Keyboard width={600} keys={keys} />
    <br />
    <Keyboard width={700} keys={keys} />
    <br />
    <Keyboard width={800} keys={keys} />
    <br />
    <Keyboard width={900} keys={keys} />
    <br />
    <Keyboard width={1000} keys={keys} />
  </>

export default Index
