import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      Hola Mundo
      <Link href='/admin/usuarios'>
        <a>ir a la página de admin de usuarios</a>
      </Link>
    </div>
    )
}

export default Home
