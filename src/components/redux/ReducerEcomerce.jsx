
const initial_state = {
  produits: [
    {
      id: 1,
      nom: "Produit1",
      prix: 14.99,
      image: "produit1.jpg",
    },
    {
      id: 2,
      nom: "Produit2",
      prix: 12.99,
      image: "produit2.jpg",
    },
    {
      id: 3,
      nom: "Produit3",
      prix: 13.99,
      image: "produit3.jpg",
    },
    {
      id: 4,
      nom: "Produit4",
      prix: 14.99,
      image: "produit4.jpg",
    },
    {
      id: 5,
      nom: "Produit5",
      prix: 13.99,
      image: "produit5.jpg",
    },
    {
      id: 6,
      nom: "Produit6",
      prix: 11.99,
      image: "produit6.jpg",
    },
  ],
  newPanier: [],
};

const ReducerProduits = (state = initial_state, action) => {
  switch (action.type) {
    case "Add_Produit": {
      const produitInPanier = state.newPanier.find(
        (produit) => produit.id === action.payload.id
      );

      if (produitInPanier) {
        return {
          ...state,
          newPanier: state.newPanier.map((produit) =>
            produit.id === action.payload.id
              ? { ...produit, quantity: produit.quantity + 1 }
              : produit
          ),
        };
      } else {
        return {
          ...state,
          newPanier: [...state.newPanier, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case "Edit_Produit": {
      return {
        ...state,
        newPanier: state.newPanier.map((produit) =>
          produit.id === action.payload.id
            ? { ...produit, quantity: action.payload.quantity }
            : produit
        ),
      };
    }

    case "Delete_Produit": {
      return {
        ...state,
        newPanier: state.newPanier.filter(
          (produit) => produit.id !== action.payload
        ),
      };
    }

    case "Calculate_Total": {
      return {
        ...state,
        total: state.newPanier.reduce(
          (sum, produit) => sum + produit.prix * produit.quantity,
          0
        ),
      };
    }

    default:
      return state;
  }
};

export default ReducerProduits;
