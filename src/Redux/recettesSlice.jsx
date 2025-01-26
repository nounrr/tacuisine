import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recettes: [
    {
      id: 1,
      titre: "Gâteau au chocolat",
      description: "Un délicieux gâteau au chocolat fondant.",
      instructions: [
        {
          id: 1,
          texte: "Mélangez la farine et le sucre.",
          image: "https://example.com/images/instructions/step1.jpg",
        },
        {
          id: 2,
          texte: "Ajoutez les œufs et le beurre fondu.",
          image: "https://example.com/images/instructions/step2.jpg",
        },
        {
          id: 3,
          texte: "Versez le mélange dans un moule beurré.",
        },
        {
          id: 4,
          texte: "Faites cuire au four à 180°C pendant 30 minutes.",
        },
      ],
      ingredients: [
        { nom: "Farine", quantite: "200g" },
        { nom: "Sucre", quantite: "150g" },
        { nom: "Œufs", quantite: "3" },
        { nom: "Beurre", quantite: "100g" },
      ],
      temps_preparation: 20,
      nom_categorie: "Desserts",
      utilisateur: "bob_cuisinier",
      cover: "https://img.freepik.com/premium-photo/chocolate-muffins-christmas_80090-4586.jpg",
      video_instructions: "https://example.com/videos/gateau_au_chocolat.mp4",
      images_resultat: [
        "https://img.freepik.com/premium-photo/chocolate-muffins-christmas_80090-4586.jpg",
        "https://img.freepik.com/free-photo/slice-chocolate-cheesecake-with-bottle-drink-candies_114579-14684.jpg",
        "https://img.freepik.com/free-photo/chocolate-cake-surrounded-by-chocolate-truffles-bonbons_23-2148019546.jpg",
        "https://img.freepik.com/free-photo/top-view-choco-cake-decorated-with-chocolate-cream-red-fruits-inside-brown-cake_140725-15639.jpg",
        "https://img.freepik.com/free-photo/front-view-chocolate-cake-stand-with-copy-space_23-2148834042.jpg?ga=GA1.1.1072836959.1737551388&semt=ais_hybrid",
      ],
    },
    {
      id: 2,
      titre: "Salade César",
      description: "Une salade fraîche et croquante.",
      instructions: [
        {
          id: 1,
          texte: "Préparez les feuilles de laitue.",
        },
        {
          id: 2,
          texte: "Ajoutez les croûtons et le fromage râpé.",
        },
        {
          id: 3,
          texte: "Versez la sauce César sur la salade.",
        },
      ],
      ingredients: [
        { nom: "Laitue", quantite: "1 tête" },
        { nom: "Croûtons", quantite: "50g" },
        { nom: "Fromage râpé", quantite: "30g" },
        { nom: "Sauce César", quantite: "100ml" },
      ],
      temps_preparation: 15,
      nom_categorie: "Lunch",
      utilisateur: "alice2023",
      cover:"https://img.freepik.com/free-photo/caesar-salad-with-fried-shrimps_140725-6065.jpg",
      video_instructions: "https://example.com/videos/salade_cesar.mp4",
      images_resultat: [
        "https://img.freepik.com/free-photo/caesar-salad-with-fried-shrimps_140725-6065.jpg",
        "https://img.freepik.com/free-photo/caesar-chicken-lettuce-cheese-tomato-anchovies-side-view_140725-11590.jpg",
        "https://img.freepik.com/free-photo/caesar-with-prawns-lettuce-tomato-olive-anchovies-side-view_140725-9096.jpg",
        "https://img.freepik.com/free-photo/shrimp-caesar-salad-bowl-with-bread-toasts_140725-5921.jpg",
      ],
    },
  ],
};

const recettesSlice = createSlice({
  name: "recettes",
  initialState,
  reducers: {
    setRecettes: (state, action) => {
      state.recettes = action.payload;
    },
    addRecette: (state, action) => {
      const lastId =
        state.recettes.length > 0
          ? state.recettes[state.recettes.length - 1].id
          : 0;

      const newRecette = {
        id: lastId + 1,
        ...action.payload,
      };

      state.recettes.push(newRecette);
    },
    deleteRecette: (state, action) => {
      state.recettes = state.recettes.filter(
        (recette) => recette.id !== action.payload
      );
    },
    updateRecettesByUser: (state, action) => {
      const { oldUsername, newUsername } = action.payload;
      state.recettes.forEach((recette) => {
        if (recette.utilisateur === oldUsername) {
          recette.utilisateur = newUsername;
        }
      });
    },
  },
});

export const { setRecettes, addRecette, deleteRecette,updateRecettesByUser } = recettesSlice.actions;

export default recettesSlice.reducer;
