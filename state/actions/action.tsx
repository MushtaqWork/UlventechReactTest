export const getData = (data: any) => {
  return {
    type: "getData",
    payload: data,
  };
};

export const updateData = (updatedData: any) => {
  return {
    type: "update",
    payload: updatedData,
  };
};
