import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SearchInput from '../SearchInput';
import './search.css';
import Modal from '../../filter/Modal';
import CardsList from '../../Cards/CardsList';
function Search() {
  const navigate = useNavigate();
  const recettes = useSelector((state) => state.recettes.recettes);

  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: null,
    duration: null,
  });

  const handleModalConfirm = (data) => {
    setFilters(data);
    setModalOpen(false);
  };

  const handleModalCancel = () => {
    setModalOpen(false);
  };

  const filteredRecipes = recettes.filter((recipe) => {
    const titleMatch = recipe.titre.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSearch = titleMatch || descMatch;

    const matchesCategory =
      !filters.category || recipe.nom_categorie === filters.category.title;

    const matchesDuration =
      filters.duration == null || recipe.temps_preparation <= filters.duration;

    return matchesSearch && matchesCategory && matchesDuration;
  });

  const hasAnyFilterOrSearch =
    searchQuery.trim() !== "" ||
    filters.category !== null ||
    filters.duration !== null;

  return (
    <div className="content">
      <div className="flex bar">
        <MdKeyboardArrowLeft onClick={() => navigate(-1)} className="arrow-icon" />
        
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          focus={true}
        />

        <svg
          onClick={() => setModalOpen(true)}
          width="20"
          height="20"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.87774 3.37856C6.87774 5.24523 5.33886 6.75821 3.43887 6.75821C1.53999 6.75821 0 5.24523 0 3.37856C0 1.51298 1.53999 0 3.43887 0C5.33886 0 6.87774 1.51298 6.87774 3.37856ZM18.4933 1.89833C19.3244 1.89833 20 2.56203 20 3.37856C20 4.19618 19.3244 4.85989 18.4933 4.85989H11.9178C11.0856 4.85989 10.4101 4.19618 10.4101 3.37856C10.4101 2.56203 11.0856 1.89833 11.9178 1.89833H18.4933ZM1.50777 12.958H8.08329C8.91551 12.958 9.59106 13.6217 9.59106 14.4393C9.59106 15.2558 8.91551 15.9206 8.08329 15.9206H1.50777C0.675552 15.9206 0 15.2558 0 14.4393C0 13.6217 0.675552 12.958 1.50777 12.958ZM16.5611 17.7778C18.4611 17.7778 20 16.2648 20 14.3992C20 12.5325 18.4611 11.0196 16.5611 11.0196C14.6623 11.0196 13.1223 12.5325 13.1223 14.3992C13.1223 16.2648 14.6623 17.7778 16.5611 17.7778Z"
            fill="#2E3E5C"
          />
        </svg>

        {modalOpen && (
          <Modal
            onCancel={handleModalCancel}
            onConfirm={handleModalConfirm}
            initialCategory={filters.category}
            initialDuration={filters.duration}
          />
        )}
      </div>

     

      {hasAnyFilterOrSearch ? (
        <CardsList recipes={filteredRecipes} />
      ) : (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>
          Aucune recette à afficher. Veuillez effectuer une recherche ou appliquer un filtre.
        </p>
      )}
    </div>
  );
}

export default Search;
