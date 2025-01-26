import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import ProtectedRoute from "./ProtectedRoute";
import Bienvenue from "./components/BienvenuPages/Bienvenue";
import Acceuil from "./components/Acceuil/acceuil";
import Detail from "./components/Detail/Detail";
import Search from "./components/Header/Search/Search";
import AjouterRecette from "./components/AjouterRecettes/Pages/AjouterRecette";
import PhoneNav from "./components/NavBar/PhoneNav";
import FavorisList from "./components/Favoris/FavorisList";
import ProfilePage from "./components/ProfilePages/ProfilePage";

const AppWithRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  const hidePhoneNavPaths = ["/", "/ajouterRecette"];

  return (
    <>
      {!hidePhoneNavPaths.includes(location.pathname) && <PhoneNav />}

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/accueil" replace /> : <Bienvenue />
          }
        />

        <Route
          path="/accueil"
          element={
            <ProtectedRoute>
              <Acceuil />
            </ProtectedRoute>
          }
        />

        <Route
          path="/details/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ajouterRecette"
          element={
            <ProtectedRoute>
              <AjouterRecette />
            </ProtectedRoute>
          }
        />

<Route
          path="/mesfavoris"
          element={
            <ProtectedRoute>
              <FavorisList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWithRoutes />
    </Router>
  );
};

export default App;
