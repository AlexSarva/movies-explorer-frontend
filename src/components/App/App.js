import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../AuthForm/Register/Register'
import Login from '../AuthForm/Login/Login'
import NotFound from '../NotFound/NotFound'
import Header from '../Header/Header'
import Layout from '../Layout/Layout'
import { AuthProvider } from '../../hoc/AuthProvider'
import { RequireAuth } from '../../hoc/RequireAuth'
import { SearchProvider } from '../../hoc/SearchProvider'

function App () {
  return (
    <AuthProvider>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/" element={<RequireAuth />}>
            <Route path="/" element={<Layout/>}>
              <Route path="movies" element={<Movies/>}/>
              <Route path="saved-movies" element={<SavedMovies/>}/>
            </Route>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </SearchProvider>
    </AuthProvider>
  )
}

export default App
