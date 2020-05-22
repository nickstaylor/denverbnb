const baseURL = "https://vrad-api.herokuapp.com";

export const fetchingApi = async () => {
  const response = await fetch(`${baseURL}/api/v1/areas`);
  const data = await response.json();
  const newData = await data.areas.map(async (area) => {
    const promiseArea = await fetch(`${baseURL}${area.details}`);
    const areaData = await promiseArea.json();
    let newArea = {
      ...areaData,
      nickname: area.area,
    };
    return newArea;
  });
  return Promise.all(newData);
};


export const getIndividualListing = async (areaArray) => {
  let map = areaArray.map(async (area) => {
    let listings = await area.listings.map(async (listing) => {
      return await fetch(`${baseURL}${listing}`)
        .then((listingObj) => listingObj.json())
        .then((listingObject) => listingObject);
    });
    let newListing = await Promise.all(listings);
    let newArea = {
      ...area,
      listings: newListing,
      image: "",
    };
    return newArea;
  });
  return Promise.all(map);
};
