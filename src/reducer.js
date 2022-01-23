export const initialState = {
    basket:[] ,
    user:null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item)=>item.price + amount , 0)

const  reducer=(state,action)=>
{
     console.log("action " ,action )
    switch(action.type){
        case 'ADD_TO_BASKET':
            // logic to add item to basket 
            return {...state ,
                        basket:[...state.basket , action.item],
                    }
            break ;


        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'REMOVE_FROM_BASKET':
            //logic  to remove item from basket or cart 
            let newBasket = [...state.basket] 

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id 
            )

            if(index>=0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(`Cant remove product (id: ${action.id}) as it's not found in the basket `)
            }
            return  {
                ...state,
                basket:newBasket
            }
            break;

         
        case "SET_USER":
        return {
          ...state,
          user: action.user
        }
        default :
            return state; 
    }
}

export default reducer