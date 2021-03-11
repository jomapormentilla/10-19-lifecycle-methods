export const addItem = item => {
    return {
        type: 'ADD_ITEM',
        item
    }
}

export const getItems = items => {
    return {
        type: 'GET_ITEMS',
        items
    }
}

export const addItemFetch = item => {
    return (dispatch) => {
        const requestObj = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
          };
      
        fetch("http://localhost:3000/items", requestObj)
        .then((res) => res.json())
        .then((json) => {
            dispatch(addItem(json));
        });
    }
}

export const getItemsFetch = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((json) => {
            dispatch(getItems(json));
        });
    }
}