import { useSelector } from "react-redux";

export default function Products(){
    const ProductState=useSelector((state)=>state.Products)
    return(
        <>
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
            
                <tr
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
                </tr>

            </tbody>
          </table>
        
        </>
    )
}