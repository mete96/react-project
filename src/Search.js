import React, { useState } from "react";
import kitaplar from "./kitaplar";

function Search() {
  const [ara, setAra] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kitap, Elektronik, Oyuncak, Kırtasiyede ürün, kategori ve marka ara..."
          id="texto"
          onChange={(e) => {
            setAra(e.target.value);
          }}
        />
        <button id="btn">ARA</button>
      </form>
    </div>
  );
}

export default Search;
