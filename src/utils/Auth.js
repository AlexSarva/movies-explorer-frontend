class Auth {
  constructor () {
    this._baseUrl = 'https://api.movies.sarva.nomoredomains.rocks'
    this._headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  _checkResponse (res) {
    if (res.ok) {
      return res.json()
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      status: res.status,
      statusText: res.statusText
    })
  }

  register ({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then(this._checkResponse)
  }

  authorize ({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(this._checkResponse)
  }

  userInfo (token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: token
      },
      method: 'GET'
    })
      .then(this._checkResponse)
  }

  patchUserInfo ({ name, email }, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: token
      },
      method: 'PATCH',
      body: JSON.stringify({
        name,
        email
      })
    })
      .then(this._checkResponse)
  }
}

const auth = new Auth()
export default auth
