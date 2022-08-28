import MainPage from "./Pages/MainPage";
import {Routes, Route } from "react-router-dom";
import AddPage from "./Pages/AddPage";
import ListPage from "./Pages/ListPage";


function App() {
  return (
    <div className="Appi">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="addpage" element={<AddPage/>}/>
        <Route path="listpage" element={<ListPage/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
