export default function (state, action) {
    switch (action.type) {
        case 'ADD-MEAL':
            const {detail} = action.payload;
            const newMealItem = [...state.mealItem, detail];
            return { ...state, mealItem: newMealItem};
        case 'ADD-FAVORITES':
            const {favorite} = action.payload;
            const newFavoriteItem = [...state.favoriteItems, favorite];
            return {...state, favoriteItems: newFavoriteItem }
        case 'REMOVE-FROM-FAVORITES':
            const {unfav} = action.payload;
            const newFavoriteItems = state.favoriteItems.filter((el) => el !== unfav);
            console.log("newfavorites", newFavoriteItems)
            return {...state, favoriteItems: newFavoriteItems }
        default:
            return state;
    }
}