import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aquí se carga el titúlo de la página</title>
      </Head>
      Hola Mundo
      <Link href='/admin/usuarios'>
        <a>ir a la página de admin de usuarios</a>
      </Link>
      <div>
        <i className='fas fa-home'/>
      </div>
    </div>
    )
}

export default Home
