const filterParcels = (items, state) => items.filter(({ status }) => status === state);

export default filterParcels;