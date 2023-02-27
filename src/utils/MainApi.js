class MainApi {
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
    return Promise.reject(`Ошибка ${res.status}`)
  }

  getMovies (token) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        Authorization: token
      },
      method: 'GET'
    })
      .then(this._checkResponse)
  }

  postMovie (movie, token) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      method: 'POST',
      body: JSON.stringify(movie)
    })
      .then(this._checkResponse)
  }

  deleteMovie (movieId, token) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      method: 'DELETE'
    })
      .then(this._checkResponse)
  }
}

const mainApi = new MainApi()
export default mainApi
