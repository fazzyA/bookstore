import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import ShowPosts from "./components/ShowPosts";

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Link to={`/add`}>Add</Link>
        <Link to={`/list`}>List</Link>
        <Link to={`/posts`}>Posts</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/add" element={<AddBook />} />
        <Route path="/list" element={<BookList />} />
        <Route path="/posts" element={<ShowPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
