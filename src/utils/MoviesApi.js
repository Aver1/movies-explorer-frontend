class MoviesApi {
  constructor({ baseUrl, headers }) {
    // this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
  };

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }
}

export const moviesApi = new MoviesApi ({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
})