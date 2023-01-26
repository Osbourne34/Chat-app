export const userDto = (model) => {
  return {
    email: model.email,
    name: model.name,
    id: model._id,
    pic: model.pic,
  };
};
