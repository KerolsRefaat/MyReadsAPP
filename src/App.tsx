import React, {lazy} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import BookList from "./Components/BookList";
import Button from "./Components/Button";
const SearchPageComponent = lazy(() => import("./Components/SearchPage"));


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
          <div className="list-books-content">
            <Header/>
             <BookList />
             <Button/>
            </div>
          }
        ></Route>
       
        <Route path="/search" element={<SearchPageComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;