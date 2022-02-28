import axios from axios;

export const GET_POSTS = "GET_POSTS";

export const getPosts = (num) => {
    return (dispatch) => {
      return axios
        .get(`http://localhost:8080/api/post/`)
        .then((res) => {
          const array = res.data.slice(0, num);
          dispatch({ type: GET_POSTS, payload: array });
          dispatch({ type: GET_ALL_POSTS, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
  };