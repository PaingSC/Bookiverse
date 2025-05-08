import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Layout from "./layout/Layout";
import BookDetail from "./pages/BookDetail/BookDetail";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
      </Routes>
    </Layout>
  );
};

export default App;
