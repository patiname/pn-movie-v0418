import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NotFound } from "./components/NotFound";
import { Detail } from "./screens/detail/Detail";
import { Home } from "./screens/home/Home";
import { Search } from "./screens/search/Search";
import { GlobalStyled } from "./styles";

const App = () => {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id/*" element={<Detail />} />
        <Route path="/search/*" element={<Search />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
