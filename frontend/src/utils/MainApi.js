// запросы к нашему апи

const BASE_URL = "https://api.beatfilm.nomoredomains.work/api";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промиc
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const createMovie = ({
  nameRU,
  nameEN,
  director,
  country,
  year,
  duration,
  description,
  trailerLink,
  image,
  thumbnail,
  movieId,
}) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      //  ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nameRU,
      nameEN,
      director,
      country,
      year,
      duration,
      description,
      trailerLink,
      image,
      thumbnail,
      movieId,
    }),
  }).then(checkResponse);
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      //    ...headers,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      //    ...headers,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => {
      return checkResponse(response);
    })
    .then((res) => {
      // console.log(res)
      return res;
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    return checkResponse(response);
  });
};

export const checkToken = (token) => {
  return (
    fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      // .then(res => res.json())
      .then((response) => {
        return checkResponse(response);
      })
      .then((data) => data)
  );
};

export const getCurrentUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((response) => {
    return checkResponse(response);
  });
};

export const editUser = (inputValue) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: inputValue.email,
      name: inputValue.name,
    }),
  }).then((response) => {
    return checkResponse(response);
  });
};
