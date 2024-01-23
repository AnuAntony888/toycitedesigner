import React from 'react'
import Homesection1 from './Homesection1'
import Homecontent from './Homecontent'
import { MetaComponent } from '../Reusable/Reusable'

const Home = () => {
  return (
    <>
  < MetaComponent dynamicTitle="Toycity "  />
<Homecontent/>
    </>
  )
}

export default Home
