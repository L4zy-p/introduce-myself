import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GitHub, LinkedIn, Instagram, Twitter } from '@mui/icons-material'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>L4zy-p</title>
        <meta name="description" content="Welcome to my page" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='layout'>
        <nav className='nav'>
          <div className="nav-content">
            <a className='nav-logo'>
              <Image src='/favicon.png' width={32} height={32} alt='' />
            </a>
            <ul className='nav-menu'>
              <li className='nav-menu-item'><a href='#'>About</a></li>
              <li className='nav-menu-item'><a href='#'>Experince</a></li>
              <li className='nav-menu-item'><a href='#'>Portfolio</a></li>
              <li className='nav-menu-item'><a href='#'>Contact</a></li>
              <li className='nav-menu-item'>
                <button>Resume</button>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <section id='me'>
            <Image src='/sloth.png' width={512} height={512} alt='' />
            <p className='me-title'>Hi, I'm L4zy-p</p>
            <p className='me-subtitle'>Web developer | Anime Lover | Traveler</p>
          </section>
          <section id='about'>
            <h2>About me</h2>
            <p>Hi there, My name is Pacharamai. I'm small and shy developer seeking fun in life. </p>
            <h4>Here are a few technologies I’ve been working with recently</h4>
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
            </ul>
          </section>
          <section id='portfolio'>
            <h2>Portfolio</h2>
            
          </section>
        </main>
        <div className='social-left'>
          <ul className='social-list'>
            <li>
              <a href="#"><GitHub /></a>
            </li>
            <li>
              <a href="#"><LinkedIn /></a>
            </li>
            <li>
              <a href="#"><Instagram /></a>
            </li>
            <li>
              <a href="#"><Twitter /></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
