export function itemReducer(items, action) {
  if (action.type == "add") {
    const i = items.findIndex((i) => i.nama == action.item.nama);

    if (i >= 0) {
      items[i].quantity++;
      return [...items];
    }

    action.item.quantity = 1;
    return [...items, action.item];
  }

  if (action.type == "remove") {
    return items.filter((i) => i.nama == action.nama);
  }

  if (action.type == "reset") {
    return [];
  }
}
