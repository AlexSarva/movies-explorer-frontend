class MoviesApi {
  constructor () {
    this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies'
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

  getMovies () {
    return fetch(this._baseUrl, { headers: this._headers })
      .then(this._checkResponse)
  }
}

const movieApi = new MoviesApi()
export default movieApi
