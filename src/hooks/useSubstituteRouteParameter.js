export const substituteRouteParameter = (route, paramName, value) => {
  return route.replace(`:${paramName}`, value);
};
