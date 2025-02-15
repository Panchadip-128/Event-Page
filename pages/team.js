import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import Head from 'next/head'
import { Team } from '@components/Team/Team'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <>
            <Head>
                <title>NEURA AI CONCLAVE TEAM </title>
                <meta
                    name="description"
                    content="MBOSC- MIT BLR FLAGSHIP EVENT"
                />
                <link rel="icon" href="/png/NEURA_AI.png" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Team />
            </div>
            <Footer />
        </>
    )
}

export default team
