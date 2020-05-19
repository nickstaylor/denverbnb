
const baseURL = "https://vrad-api.herokuapp.com";

export const getAreas = () => {
  return fetch(`${baseURL}/api/v1/areas`)
    .then((response) => response.json())

}

export const getNeighborhood = (value) => {
  return fetch(`${baseURL}${value}`)
    .then((moreInfo) => moreInfo.json())
}

export const getListings = (value) => {
  return fetch(`${baseURL}${value}`)
  .then((listingData) =>
    listingData.json())
}
