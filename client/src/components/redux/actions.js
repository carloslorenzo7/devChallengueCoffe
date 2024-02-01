import axios from "axios";
export const COFFES = "COFFES";

export const coffes = () => {
  return async function (dispatch) {
    try {
      const dataCoffes = await axios(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      return dispatch({
        type: "COFFES",
        payload: dataCoffes.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};
