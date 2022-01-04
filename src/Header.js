import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import kitaplar from "./kitaplar";
import Search from "./Search";
import { VscSymbolEvent } from "react-icons/vsc";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <div>
      <div className="ad">
        <img
          src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/kisindirimleri-202112-1200x60-leader-min.png"
          className="adimg"
        />
      </div>
      <div className="drmenu">
        <ul className="flex justify-start mt-3">
          <li>
            <a href="#">Hediye Kartı</a>
          </li>
          <li>
            <a href="#">Keşfet</a>
          </li>
          <li>
            <a href="#">Markalar</a>
          </li>
          <li>
            <a href="#">Yayınevleri</a>
          </li>
          <li>
            <a href="#">Yazarlar</a>
          </li>
        </ul>
        <ul className="flex justify-end mr-4 drside">
          <li>
            <a href="#">
              <VscSymbolEvent className="icon" /> Mağaza Etkinlikleri
            </a>
          </li>
          <li>
            <AiOutlineShop className="icon" /> <a href="#">Mağazalar</a>
          </li>
          <li>
            <VscSymbolEvent className="icon" /> <a href="#">Sipariş Takip</a>
          </li>
          <li>
            <AiOutlinePhone className="icon" />{" "}
            <a href="#">+90 (850) 266 3737</a>
          </li>
        </ul>
      </div>
      <div className="logo flex flex-start p-4 ml-11 ">
        <img src={logo} alt="" className="w-24 h-16" />
        <Search />
        <div className="fix">
          <ul className="flex justify-end ye">
            <li>Favori Listem</li>
            <li>Kampanyalar</li>
            <li>Giriş Yap</li>
            <li>
              Sepetim <AiOutlineShoppingCart className="shop" />
            </li>
          </ul>
        </div>
      </div>

      <nav className="dr-menu">
        <ul className="flex justify-center dr-menum p-3">
          <li>
            <a href="#">KİTAP</a>
          </li>
          <li>
            <a href="#">YABANCI KİTAP</a>
          </li>
          <li>
            <a href="#">ÇOCUK KİTAPLARI</a>
          </li>
          <li>
            <a href="#">ELEKTRONİK</a>
          </li>
          <li>
            <a href="#">HOBİ & OYUNCAK</a>
          </li>
          <li>
            <a href="#">KIRTASİYE</a>
          </li>
          <li>
            <a href="#">OYUN & KONSOL</a>
          </li>
          <li>
            <a href="#">MÜZİK</a>
          </li>
          <li>
            <a href="#">SINAV HAZIRLIK</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
