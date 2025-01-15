export const AjouterProduit=(product)=>{
    return {type:'Add_Produit',payload:product}
}
export const SupprimerProduit=(id)=>{
    return {type:'Delete_Produit',payload:id}
}
export const ModifierProduit=(id,quantity)=>{
    return {type:'Edit_Produit',payload:{id,quantity}}
}
export const calculateTotal = () => ({
    type: "Calculate_Total",
  });
  
