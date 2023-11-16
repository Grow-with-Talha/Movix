import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { fetchDatafromApi } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import Home from "./pages/Home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound"
import SearchResult from "./pages/search/SearchResult"

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const fetchApiConfig = () => {
    fetchDatafromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDatafromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres?.map((item) => {
        allGenres[item.id] = item;
      });
    });
    dispatch(getGenres(allGenres));
  };
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
{/* added comments */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
