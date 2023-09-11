import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";

function App() {
  return (
    <main className="w-100 h-full m-0 p-0 text-slate-600 flex flex-col items-start">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<FormPage />} />
          <Route path="/edit/:id" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
