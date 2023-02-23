import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import auth from '../utils/Auth'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem('jwt'))
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')))

  const signup = useCallback(function (newUser, cb) {
    auth.register(newUser)
      .then((res) => {
        if (res.email && res.name) {
          window.localStorage.setItem('user', JSON.stringify(res))
          setUser(res)
          return newUser
        }
      })
      .then((newUser) => {
        auth.authorize(newUser)
          .then((res) => {
            if (res.token) {
              window.localStorage.setItem('jwt', res.token)
              setToken(res.token)
            }
          })
      })
      .then(() => {
        cb()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const signin = useCallback(function (newUser, cb) {
    auth.authorize(newUser)
      .then((res) => {
        if (res.token) {
          window.localStorage.setItem('jwt', res.token)
          setToken(res.token)
        }
      })
      .then(() => {
        cb()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const signout = useCallback(function (cb) {
    window.localStorage.removeItem('jwt')
    window.localStorage.removeItem('user')
    setUser(null)
    setToken(null)
    cb()
  }, [])

  const patchUser = useCallback(function (userInfo) {
    auth.patchUserInfo(userInfo, token)
      .then((res) => {
        if (res.email && res.name) {
          window.localStorage.setItem('user', JSON.stringify(res))
          setUser(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const getUserInfo = () => {
    auth.userInfo(token)
      .then((res) => {
        if (res.email && res.name) {
          window.localStorage.setItem('user', JSON.stringify(res))
          setUser(res)
        }
      })
  }

  useEffect(() => {
    if (token) {
      getUserInfo()
    }
  }, [token])

  const value = useMemo(() => ({
    user, token, signup, signin, signout, patchUser
  }),
  [user, token, signup, signin, signout, patchUser]
  )

  return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
