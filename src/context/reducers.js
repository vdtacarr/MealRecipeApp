export default function (state, action) {
    switch (action.type) {
        case 'ADD':
            const {abc} = action.payload;
            console.log("state",state.mealItem)
            const newItem = [...state.mealItem,abc];
            console.log("Item",newItem)
            return { ...state, mealItem: newItem};
        default:
            return state;
    }
}