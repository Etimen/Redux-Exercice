export function AddProductAction(NewProduct){
    return({
        type:"ADD_PRODUCT",
        payload:NewProduct
    })
}
export function DeleteProductAction(IdProduct){
    return({
        type:"DELETE_PRODUCT",
        payload:IdProduct
    })
}