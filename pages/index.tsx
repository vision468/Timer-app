import * as React from 'react';
import Head from 'next/head'
import Layout from "@/components/layout";
import { Container } from '@/components/counter';


export default function Home() {
  const {PUBLIC_NEXT_TITLE} = process.env;

  return (
    <>
      <Head>
        <title>Countdown App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/logo.jpg" /> */}
      </Head>
      <Layout>
        <h1 className=' text-center text-3xl w-full py-10 bg-[#001220] bg-opacity-50 text-white'>Countdown App</h1>
        <Container targetTime={new Date(1706936400000)} />
      </Layout>
    
    </>
  )
}
