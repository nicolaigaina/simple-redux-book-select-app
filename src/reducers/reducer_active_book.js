// state argument is not an app full state, it's only a peace of state this reducer is responsible for [selected_book]
export default function(state = null, action){

    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}