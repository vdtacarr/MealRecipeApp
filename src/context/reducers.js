export default function (state, action) {
    switch (action.type) {
        case 'ADD':
            const {detail} = action.payload;
            const newItem = [...state.mealItem, detail];
            return { ...state, mealItem: newItem};
        default:
            return state;
    }
}