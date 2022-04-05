import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.scss'

const Home: NextPage = (props) => {
  const router = useRouter();

	if (typeof window !== "undefined") {
		router.push("/countries");
	}
  return (
    <div>
      <Head>
        <title>Countries App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
    </div>
  )
}
export default Home
