import './App.css';
import Main from "../Main/Main";
import {Route, Routes} from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../AuthForm/Register/Register";
import Login from "../AuthForm/Login/Login";
import NotFound from "../NotFound/NotFound";
import AuthForm from "../AuthForm/AuthForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/saved-movies" element={<SavedMovies />}/>
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>

  )
}

export default App;
