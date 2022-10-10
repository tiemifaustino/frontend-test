const endpointFilms = 'https://ghibliapi.herokuapp.com/films';

export const getFilms = async () => {
  try {
    const response = await fetch(endpointFilms);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getFilm = async (id) => {
  try {
    const response = await fetch(`${endpointFilms}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getPeople = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data, 'data do fetch');
    return data;
  } catch (error) {
    console.log(error);
  }
}