import * as React from 'react';
import Head from 'next/head'
import Layout from "@/components/layout";
import  Container from '@/components/container';


export default function Home() {
  return (
    <>
      <Head>
        <title>Countdown App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Container />
      </Layout>
    </>
  )
}
