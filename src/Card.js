import React, { useState } from "react";
import Search from "./Search";
import kitaplar from "./kitaplar";

function Card({ resim, isim, yazar, fiyat }) {
  return (
    <>
      <img src={resim} alt="" id="img" />
      <h2 className="font-bold">{isim}</h2>
      <h4>Yazar: {yazar}</h4>
      <h5>
        <strong className="strong">Fiyat:</strong> {fiyat}{" "}
      </h5>
    </>
  );
}

export default Card;
