class Api {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
        // this._jwt = jwt;
    };

    _checkResponse(res){
        if (res.ok) {
            return res.json();
        }
          // если ошибка, отклоняем промиc
         return Promise.reject(`Ошибка: ${res.status}`); 
    }

    getMovies() {
        return fetch(`${this._url}`, {
            headers: this._headers,
        })
        .then(this._checkResponse)
 
    };



}

const beatApi = new Api({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
    //   authorization: `Bearer ${localStorage.jwt}`,
      'Content-Type': 'application/json'
    }
  });
 
  export default beatApi;