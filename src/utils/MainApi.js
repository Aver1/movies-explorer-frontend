class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._apiUrl = data.apiUrl;
  }

  get _headers() {
    return {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
  };

  authorization (password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        password, email
      })
    })
    .then(this._checkResponse)
  }

  authentication (password, email, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        password, email , name
      })
    })
    .then(this._checkResponse)
  };

  getUser (token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkResponse)
  }
  editProfile (name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(this._checkResponse)
  }
  createMovie (data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country || ' ',
        director: data.director || ' ',
        duration: data.duration || 0,
        year: data.year || ' ',
        description: data.description || ' ',
        image: `${this._apiUrl}${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `${this._apiUrl}${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU || ' ',
        nameEN: data.nameEN || ' ',
    }),
    })
    .then(this._checkResponse)
  }
  getMovies () {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  deleteMovie (id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

};

export const mainApi = new MainApi({
  apiUrl: 'https://api.nomoreparties.co',
  baseUrl: 'https://api.averdiploma.nomoredomains.xyz'
  }); 