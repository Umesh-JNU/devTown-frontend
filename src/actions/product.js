import axiosInstance from '../utils/axiosInstance';

export const getAllProducts = (title = "", resultPerPage = 1, currentPage = 1, price = [0, 100000000], category) => async (dispatch) => {
  try {
    dispatch({ type: 'ALL_PRODUCT_REQUEST' });

    let link = `/api/product/all/?resultPerPage=${resultPerPage}&currentPage=${currentPage}&title=${title}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
    if (category)
      for (let i = 0; i < category.length; i++) {
        link += `&category=${category[i]}`;
      }
    // console.log({ link });

    const { data } = await axiosInstance.get(link);
    // console.log({ data })
    dispatch({
      type: 'ALL_PRODUCT_SUCCESS',
      payload: data,
    });
  } catch (error) {
    console.log({ error });
    dispatch({
      type: 'ALL_PRODUCT_FAIL',
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: 'CLEAR_ERROR' });
};