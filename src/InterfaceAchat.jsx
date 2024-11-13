import { useState } from "react"
import {AddProductAction} from "./redux/actions/productActions"
import {initialState} from "./redux/reducers/productReducers"
import { useDispatch } from "react-redux"


export function InterfaceAchat(){
    
    const dispatcher=useDispatch()
    const handleAdd=()=>{
        dispatcher(AddProductAction(Sales))
        console.log(Sales)
    }
    const[Sales,setSales]=useState({
        numero:"",
        codeProd:"",
        qte:0
    })
    return(
      <>
    <div className="space-y-4 max-w-md mx-auto my-8 p-4 border rounded-lg shadow-md">

    <div>
    <label htmlFor="designation" className="block mb-1 font-medium text-gray-700">Numero</label>
    <input
    value={Sales.numero}
    onChange={(e)=>{setSales({...setSales,numero:e.target.value})}
    }
     type="text"
     id="Numero"
     name="Numero"
     className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
    required
     />
    </div>
    <div><label htmlFor="designation" className="block mb-1 font-medium text-gray-700">Code Produit</label>
        <select className="block mb-1 font-medium text-gray-700" name="" id=""onChange={(e)=>{setSales({...setSales,codeProd:e.target.value})}}> Intitulé
            <option className="block mb-1 font-medium text-gray-700" value="" >---</option>
            {
                initialState.products.map((element)=>{
                    return(<option value={element.codeProd}>{element.intitule}</option>)
                }
                )
            }


            <option className="block mb-1 font-medium text-gray-700" value=""></option>
        </select>
    </div>
    <div>
    <label htmlFor="Quantité" className="block mb-1 font-medium text-gray-700">Quantité</label>
    <input
        value={Sales.qte}
        onChange={(e)=>{setSales({...setSales,qte:e.target.value})}}
        min={1}
        type="number"
        id="Quantité"
        name="Quantité"
         className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"    
        required
    />

    </div>
    <button className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleAdd}> Ajouter </button>
    </div>  

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-sans">

                <th scope="col" className="px-6 py-3 text-base">
                  code Produit
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                  intitulé
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                  Quantité en stock
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                  Prix
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                  Prix total
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                 Editer
                </th>
               
               
            </thead>
            <tbody className="text-blue-600 text-lg ">
            
                {/* <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left text-base ">{item.id}</td>
                  <td className="py-3 px-6 text-left text-base">{item.libelle}</td>
                  <td className="py-3 px-6 text-center text-base">
                    {item.categorie.libelle}
                  </td>
                  <td className="py-3 px-6 text-center text-base">{item.quantiteStock}</td>
                  <td className="py-3 px-6 text-center text-base">{item.prix}</td>
                  <td className="py-3 px-6 text-center text-base">
                    {item.prix * item.quantiteStock}
                  </td>
                  <td><button>Supprimer</button></td>
                </tr> */}

            </tbody>
          </table>
    
</>       

    )
}