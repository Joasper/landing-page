import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiShareBoxLine } from "react-icons/ri";

export const Inicio = () => {
  return (
    <>
      <header className="header">
        <div className="header-nav container">
          <figure className="hero__Figure">
            <img
              src="../../../Public/LIVEGOODIALOGO2.png"
              alt=""
              className="header__img"
            />
          </figure>
          <div className="header__btns">
            <div className="btn_primary_btn">
              <a href="" className="btn btn__Primary">
                Pagar Membresia
              </a>
            </div>
            <div className="btns-bottom">
              <a href="" className="btn btn__Secundary">
                Registrate y Gana $1USD
              </a>
              <a href="" className="btn btn__Secundary">
                Impulsa tu Red con IA
              </a>
            </div>
          </div>
        </div>

        <section className="Header__main container">
          <div className="header__main__texts">
            <h1 className="h2">
              Imagina un mundo donde puedas alcanzar una libertad financiera de
              <span className="header__span"> $2.047,50</span> al mes con
              LiveGood, ¡y eso sin la necesidad de referir a nadie!
            </h1>
          </div>

          <div className="header__main__video">
            <video
              src="../../../Public/Piedra.mp4"
              controls
              className="video"
            ></video>
          </div>

          <div className="header__main__btn">
            <a href="" className="btn_header__main">
              Academia LiveGood IA <RiShareBoxLine className="btn__btn" />
            </a>
          </div>
        </section>
      </header>
      <main className="main">
        <section className="section">
          <div className="section_container container">
            <div className="section__texts">
              <h1 className="h1__main">
                Nuestro <span className="span__main">Equipo</span>
              </h1>
            </div>
            <div className="main__cards">
              <div className="card">
                <div className="Section__information">
                  <picture className="Section__Perfil__Img">
                    <img src="../../../Public/image2.png" alt="" srcset="" />
                  </picture>
                </div>
                <div className="Section__Perfil__Description">
                  <h6 class="Section__Profecion">
                    CEO
                    <p class="Section__Name">Ben Glinsky </p>
                  </h6>
                </div>
              </div>
              <div className="card">
                <div className="Section__information">
                  <picture className="Section__Perfil__Img">
                    <img src="../../../Public/image2.png" alt="" srcset="" />
                  </picture>
                </div>
                <div className="Section__Perfil__Description">
                  <h6 class="Section__Profecion">
                    CEO
                    <p class="Section__Name">Ben Glinsky </p>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <img src="../../../Public/egilla.png" alt="" className="main__img" />
      </main>
    </>
  );
};
