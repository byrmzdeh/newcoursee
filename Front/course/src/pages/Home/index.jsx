import React from 'react'
import Slider from '../../components/Slider'
import Premier from '../../components/Premier'
import Thinks from '../../components/Thinks'
import Join from '../../components/Join'
import Brand from '../../components/Brand'
import Media from '../../components/Media'
import Collab from '../../components/Collab'
import CompanySlider from '../../components/Course-Slide'

const Home = () => {
  return (
    <div className='home'>
     <Slider/>
     <Premier/>
     <Thinks/>
     <Join/>
     <Brand/>
     <Media/>
     <Collab/>
     <CompanySlider/>
    </div>
  )
}

export default Home
