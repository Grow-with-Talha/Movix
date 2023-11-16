import { useState } from 'react'

import useFetch from "../../../hooks/useFetch"

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/switchTabs'
import Carousel from '../../../components/carousel/Carousel'




const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie")
  const {data, loading} = useFetch(`/${endPoint}/popular`)
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv")
  }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">What's Popular?</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  )
}

export default Popular
