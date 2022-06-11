export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_TODO";
export const EDIT_DATA = "EDIT_DATA";
export const SORT = "SORT";

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};
export const getData = (page, sort, query) => async (dispatch) => {
  const data = await fetch(`http://localhost:5000/population?page=${page}&pagesize=7&sort=${sort}&query=${query}`).then((d) => d.json());
  dispatch(addData(data.datas));
};

export const deleteData = (id) => {
  return {
    type: DELETE_DATA,
    payload: id,
  };
};
export const editData = (id,data) => {
  console.log("D",id,data);
  return {
    type: EDIT_DATA,
    id,
    data
  };
  
};
export const sort = (by) => {
  return {
    type: SORT,
    payload: by,
  };
};