export const getFilms = async () => {
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
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
    return data;
  } catch (error) {
    console.log(error);
  }
}