import "./App.css";
import Card from "./Card";
import Container from "./Container";
import Header from "./Header";
import kitaplar from "./kitaplar";
import Search from "./Search";
import React, { useState } from "react";

function App() {
  const [sihir, setSihir] = useState("");
  const [text, setText] = useState("");
  const [fiyat, setFiyat] = useState(Math.floor(Math.random() * 35) + " TL");

  const tikla = (e) => {
    setSihir("https://i.ytimg.com/vi/JuJpS-nVDLA/mqdefault.jpg");
    setText("FİYATLARA KDV + ÖTV EKLENDİ.");

    setFiyat(Math.floor(Math.random() * 350) + 17 + " TL");
  };

  return (
    <>
      <Container />
      <h2 className="sihir" onClick={tikla}>
        SİHİR İÇİN TIKLA
      </h2>
      <div className="ortala">
        <p class="textom"> {text}</p>
        <img src={sihir} id="erdo" />
      </div>
      <div className="cards">
        {kitaplar.map((kitap) => {
          const { resim, isim, yazar } = kitap;
          return (
            <div className="cardzo">
              <Card key={kitap.id} {...kitap} fiyat={fiyat}></Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
