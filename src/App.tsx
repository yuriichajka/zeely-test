import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Promotion from "./components/Promotion";
import Creatives from "./components/Creatives";
import Layout from "./components/Layout";

import "./styles/styles.scss";
import Video from "./components/Video";
import Account from "./components/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="creatives" element={<Creatives />} />
          <Route path="video" element={<Video />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
