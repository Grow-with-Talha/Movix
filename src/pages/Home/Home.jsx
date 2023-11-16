import "./style.scss"
import HeroBanner from "./heroBanner/HeroBanner"
import Trending from "./trending/trending"
import Popular from "./Popular/Popular"
import TopRated from "./topRated/Toprated"


const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />      
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home

