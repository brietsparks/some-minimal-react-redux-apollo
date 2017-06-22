export const selectProjects = state => state.apollo.data;

const hasItems = obj => Object.keys(obj).length > 0;

export const selectOdd = objects => hasItems(objects) ? objects.map(o => o.id & 1) : {};

export const selectEven = objects => hasItems(objects) ? objects.map(o => !(o.id & 1)) : {};