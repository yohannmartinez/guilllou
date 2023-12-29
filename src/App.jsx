import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Couverture from "./pages/couverture";
import Charpente from "./pages/charpente";
import Isolation from "./pages/isolation";
import Zinguerie from "./pages/zinguerie";
import Demoussage from "./pages/demoussage";
import Policy from "./pages/policy";
import Mentions from "./pages/mentions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/couverture" element={<Couverture />} />
          <Route index path="/charpente" element={<Charpente />} />
          <Route index path="/isolation" element={<Isolation />} />
          <Route index path="/zinguerie" element={<Zinguerie />} />
          <Route index path="/demoussage" element={<Demoussage />} />
          <Route index path="/politique" element={<Policy />} />
          <Route index path="/mentions" element={<Mentions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
