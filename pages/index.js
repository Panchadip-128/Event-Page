import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '@components/Footer/Footer'
import Header from '@components/ComingSoon/Header'
import Navbar from '@components/Nav/Navbar'
import Timeline from '@components/Timeline/Timeline'

import About from '@components/About/About'
import { Sponsors } from '@components/Sponsor/Sponsors'
import Speakers from '@components/Speakers/Speakers'
import Sponsor_Faq from '@components/Sponsor_Faq/Sponsor_Faq'
import Attendes from '@components/AttendeesSpeakers/attendes'
import Intro from '@components/Introduction/Intro'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useRouter } from 'next/dist/client/router'

export default function Home() {
    const router = useRouter()

    const [show, setShow] = useState(true)
    const [height, setHeight] = useState('100vh')

    useEffect(() => {
        if (router.asPath !== '/') {
            setShow(false)
            setHeight(null)
        } else {
            const timer = setTimeout(() => {
                setShow(false)
                setHeight(null)
            }, 4175)
            return () => clearTimeout(timer)
        }
    }, [router.asPath])
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <>
            <div className={styles.container} style={{ height: height }}>
                <Head>
                    <title>MBOSC CONCLAVE - MIT BLR</title>
                    {/* <meta
                        name="description"
                        content="MBOSC - Manipal Institute of Technology- Bengaluru"
                    />
                    <meta
                        property="og:title"
                        content="MBOSC - Manipal Institute of Technology- Bengaluru"
                    />
                    <meta
                        property="og:description"
                        content="MBOSC - Manipal Institute of Technology- Bengaluru"
                    /> */}
                    <meta
                        property="og:url"
                        content="https://www.manipal.edu"
                    />
                    <meta property="og:type" content="website" />
                    <link rel="icon" href="/png/MBOSC_2.png" />
                </Head>
                {router.asPath === '/' ? (
                    show ? (
                        <Intro />
                    ) : (
                        <>
                            <Navbar />
                            <Header />
                            <About />
                            <Attendes />
                            <Speakers />
                            <Timeline />
                            <Sponsors />
                            <Sponsor_Faq />
                        </>
                    )
                ) : (
                    <>
                        <Navbar />
                        <Header />
                        <About />
                        <Attendes />
                        <Speakers />
                        <Timeline />
                        <Sponsors />
                        <Sponsor_Faq />
                    </>
                )}
            </div>
            {!show && <Footer></Footer>}
        </>
    )
}
