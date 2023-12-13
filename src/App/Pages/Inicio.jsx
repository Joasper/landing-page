import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiShareBoxLine } from "react-icons/ri";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment } from "@mui/material";
import { CiWallet } from "react-icons/ci";
import { Carousel } from "antd";
import Flickity from "flickity";
import "flickity/css/flickity.css";
// Selecciona el elemento HTML que actuará como contenedor del carrusel
const elem = document.querySelector(".gallery");
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Inicializa Flickity en ese elemento

const contentStyle = {
  height: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#1b2024",
};

export const Inicio = () => {
  const prevArrow = <LeftOutlined style={{ fontSize: "24px" }} />;
  const nextArrow = <RightOutlined style={{ fontSize: "24px" }} />;
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
              <div className="">
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
              <div className="OthersCards">
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
          </div>
        </section>
        <img src="../../../Public/egilla.png" alt="" className="main__img" />
      </main>

      <section className="section__Second">
        <div className="section__container__Second container">
          <div className="Section__Second__Texts">
            <div className="Second__Section__Title">
              <h1>
                Pre-regístrate y Gana{" "}
                <span className="Second_SPan">$1.00 USD</span>
              </h1>
            </div>
            <div className="Second__Section__Paragrah">
              <p className="Second_paragrah">
                <span className="There__SPan">
                  ¿Listo para dar el primer paso hacia el éxito y la salud
                  óptima?
                </span>
              </p>
              <p className="parrafo">
                Hemos facilitado el camino para ti. Simplemente completa nuestro
                formulario de pre-registro y como agradecimiento por unirte a
                nuestra misión, te daremos $1.00 USD Sí, así de sencillo.
              </p>
            </div>
            <div className="Second__Section__Form">
              <form>
                <TextField
                  className="Input"
                  variant="outlined"
                  placeholder="Ingresa Paypal o Monedero BTC"
                  InputProps={{
                    style: { color: "white" },
                    endAdornment: (
                      <InputAdornment position="end">
                        <CiWallet color="white" fontSize={"20px"} />
                      </InputAdornment>
                    ), // Cambiar el color del texto
                  }}
                  InputLabelProps={{
                    style: { color: "white" }, // Cambiar el color del texto del placeholder
                  }}
                />
                <div className="Text__fields__both">
                  <TextField
                    className="Input both"
                    variant="outlined"
                    placeholder="Nombre"
                    InputProps={{
                      style: { color: "white" }, // Cambiar el color del texto
                    }}
                    InputLabelProps={{
                      style: { color: "white" }, // Cambiar el color del texto del placeholder
                    }}
                  />
                  <TextField
                    className="Input both"
                    variant="outlined"
                    placeholder="Apellido"
                    InputProps={{
                      style: { color: "white" }, // Cambiar el color del texto
                    }}
                    InputLabelProps={{
                      style: { color: "white" }, // Cambiar el color del texto del placeholder
                    }}
                  />
                </div>
                <TextField
                  className="Input"
                  variant="outlined"
                  placeholder="Telefono"
                  InputProps={{
                    style: { color: "white" }, // Cambiar el color del texto
                  }}
                  InputLabelProps={{
                    style: { color: "#737d82" }, // Cambiar el color del texto del placeholder
                  }}
                />
                <TextField
                  className="Input"
                  variant="outlined"
                  placeholder="Pais y Direccion"
                  InputProps={{
                    style: { color: "white" }, // Cambiar el color del texto
                  }}
                  InputLabelProps={{
                    style: { color: "white" }, // Cambiar el color del texto del placeholder
                  }}
                />

                <Button
                  variant="contained"
                  type="submit"
                  className="btn-Field"
                  style={{ backgroundColor: "#FAFF00", color: "black" }}
                >
                  Reclamar Recompensa
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="Section__Three">
        <div className="section__container__three container">
          <div className="Section__three__data">
            <div className="section__tree-btns">
              <div className="header__main__btn btn__section__three">
                <a href="" className="btn_header__main">
                  Quiero Comprar{" "}
                  <RiShareBoxLine className="btn__btn btn__three" />
                </a>
              </div>
            </div>
            <div className="section__three__texts">
              <h1 className="livegood_h1">
                Como funciona <span className="span__livegood">LiveGood</span> y
                sus productos{" "}
              </h1>
            </div>
          </div>
          <div className="custom-carousel-container">
            <Carousel
              prevArrow={prevArrow}
              nextArrow={nextArrow}
              className="carousel"
            >
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="../../../Public/image13.png"
                    alt=""
                    className="img__Section__there"
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="../../../Public/image12.png"
                    alt=""
                    className="img__Section__there"
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="../../../Public/image11.png"
                    alt=""
                    className="img__Section__there"
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="../../../Public/image10.png"
                    alt=""
                    className="img__Section__there"
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="../../../Public/image9.png"
                    alt=""
                    className="img__Section__there"
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="../../../Public/image8.png"
                    alt=""
                    className="img__Section__there"
                  />
                </h3>
              </div>
            </Carousel>
          </div>
          <div className="footer__Section__tree">
            <h1 className="h1__footer">
              <span className="span__livegood footer">
                {" "}
                Nutrición Avanzada, Oportunidad Real
              </span>{" "}
              En LiveGood, conectamos bienestar y progreso. Nuestros suplementos
              premium y planes de compensación te empoderan para alcanzar una
              vida plena y exitosa.
            </h1>
            <h1 className="h1__footer">
              <span className="span__livegood footer">
                Calidad a tu Alcance
              </span>{" "}
              Vive saludable con nuestros productos orgánicos a precios sin
              competencia. Con LiveGood, la excelencia es accesible para todos,
              cada día.
            </h1>
            <h1 className="h1__footer">
              <span className="span__livegood footer">
                Crecimiento Compartido
              </span>
              Únete y prospera en nuestro modelo de negocio transparente y
              colaborativo. Con LiveGood, tu esfuerzo se traduce en resultados
              tangibles y satisfacción duradera.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
