import { act } from "react"


export const  initialState = {
    clients:[
        {   numero:'1', 
            nom:'n1',   
            prenom:'p1'
        }
    ],
    products:[{
            codeProd:"1",
            intitule:"produit1",
            prix:10
    },
    {
            codeProd:"2",
            intitule:"produit2",
            prix:20
    },
    {
            codeProd:"3",
            intitule:"produit3",
            prix:30
    }   
],
    achats:[
        {
            numero:1,
            codeProd:'1',
            qte:5

        }
    ]
} 

export function ProductReducer(state=initialState,action){
    switch(action.type){
        case"ADD_PRODUCT":
        return{
            ...state,products:[
                ...state.products,
                action.payload
            ]
        }
        case"DELETE_PRODUCT":
        return{
            ...state,products:[
                ...state.products.filter(function(item){
                    return item.id !== action.payload
                })
            ]
        }
    default :
        return state
    }
    
}