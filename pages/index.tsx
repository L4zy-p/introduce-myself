import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { FaMediumM } from 'react-icons/fa'

interface myLoaderProps {
  src: string
  width: number
  quality?: number
}

const myLoader = ({ src, width, quality }: myLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}?w=${width}&q=${quality || 75}`
}


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>L4zy-p</title>
        <meta name='description' content='Welcome to my page' />
        <link rel='icon' href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.png`} />
      </Head>
      <div className='layout'>
        <main>
          <section id='me'>
            <div className='img-logo'>
              <Image loader={myLoader} src='/owl.png' width={512} height={512} alt='' />
            </div>
            <p className='me-title'>{`Hi, I'm L4zy-p`}</p>
            <p className='me-subtitle'>Web developer | Anime Lover | Traveler</p>
          </section>
          <section id='about'>
            <h2>About me</h2>
            <p>{`Hi there, My name is Pacharamai. I'm small and shy developer seeking fun in life. `}</p>
            <h4>{`Here are a few technologies I’ve been working with recently`}</h4>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Nextjs</li>
            </ul>
          </section>
          <section id='experince'>
            <h2>Experince</h2>
            <ul>
              <li>Open Source Technology Frontend Developer Jun 2018 - Present</li>
              <li>Tovho System PHP Programer Aug 2017 - Apr 1018</li>
              <li>Intelligent Millionaire Game Developer Aug 2016 - Dec 1016 (Internship)</li>
            </ul>
          </section>
          <section id='portfolio'>
            <h2>Portfolio</h2>
            <div className='portfolio-list'>
              <div className='portfolio-item'>
                <div className='image-box'>
                  <Image loader={myLoader} src='/portfolio/elms.png' width={1898} height={903} />
                </div>
                <div className='description'>
                  <h2>eLeave management system</h2>
                  <p>- Management system for sending leave mails in the organization</p>

                  <ul className='tech-list'>
                    <li>React</li>
                    <li>Next</li>
                    <li>Nx</li>
                  </ul>
                </div>
              </div>
              <div className='portfolio-item'>
                <div className='image-box'>
                  <Image loader={myLoader} src='/portfolio/queue.png' width={1898} height={903} />
                </div>
                <div className='description'>
                  <h2>Queue web call</h2>
                  <p>- Management system for call queue customer in the hospital</p>

                  <ul className='tech-list'>
                    <li>React</li>
                    <li>Mqtt</li>
                  </ul>
                </div>
              </div>
              <div className='portfolio-item'>
                <div className='image-box'>
                  <Image loader={myLoader} src='/portfolio/shimakaze.png' width={1898} height={903} />
                </div>
                <div className='description'>
                  <h2>Shimakaze</h2>
                  <p>- Web page and management booking tour</p>

                  <ul className='tech-list'>
                    <li>Php</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id='contact'>
            <h2>Contact</h2>
            <ul>
              <li>hemhongsa.p94@gmail.com</li>
            </ul>
          </section>
        </main>
        <div className='social-left'>
          <ul className='social-list'>
            <li>
              <a target='_blank' href='https://github.com/L4zy-p' rel='noopener noreferrer'><GitHub /></a>
            </li>
            <li>
              <a target='_blank' href='https://www.linkedin.com/in/pacharamai-h/' rel='noopener noreferrer'><LinkedIn /></a>
            </li>
            <li>
              <a target='_blank' href='https://medium.com/@L4zy-p' rel='noopener noreferrer'><FaMediumM /></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
