import { CarouselCalamardo } from "../../components/Carousel/CarouselCalamardo"
import { Header } from '../../components/Header/Header'
import { NavBarApp } from "../../components/NavBar/NavBarApp"

import './homePage.css'

export const HomePage = () => {
  return (
    <>
    <Header />
    <NavBarApp/>
    <div className="carrusel">
      <CarouselCalamardo/>
    </div>
    <h1>Hola soy la Home Page</h1>
    </>
  )


}