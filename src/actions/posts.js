import * as api from '../api';

//action creaters 
export const getPosts = () => async (dispatch) => {
    try {
        // data comes frm response through api
        const {data} = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}