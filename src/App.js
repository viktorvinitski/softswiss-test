import './styles/App.scss';
import { ReactComponent as LogoIcon } from './assets/logo.svg';
import { ReactComponent as CartIcon } from './assets/cart.svg';
import { ReactComponent as RocketIcon } from './assets/rocket.svg';
import { ReactComponent as MenuIcon } from './assets/menu.svg';
import { ReactComponent as CrossIcon } from './assets/cross.svg';
import { useState } from "react";


function App() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  return (
      <>
          <header className="header">
              <LogoIcon className="header__logo"/>
              <nav className="header__nav">
                  <a href='#' className="header__nav--link">Home</a>
                  <a href='#' className="header__nav--link">Products</a>
                  <a href='#' className="header__nav--link"><CartIcon/></a>
              </nav>
              <button className='burger__btn' onClick={() => setIsOpenedMenu(true)}>
                  <MenuIcon/>
              </button>
          </header>
          <menu className={`menu ${isOpenedMenu ? 'menu__opened' : 'menu__closed'}`}>
              <div className='menu__header'>
                  <button className='menu__btn--close' onClick={() => setIsOpenedMenu(false)}>
                      <CrossIcon/>
                  </button>
              </div>
              <nav className="menu__nav">
                  <a href='#' className="menu__nav--link">Home</a>
                  <a href='#' className="menu__nav--link">Products</a>
                  <a href='#' className="menu__nav--link">Cart</a>
              </nav>
          </menu>
          <section className="banner">
          <div className="banner__content">
                  <h1 className="banner__title">
                      Discover the vast expanses of <span className="banner__title--highlight">space</span>
                  </h1>
                  <p className="banner__subtitle">
                      Where the possibilities are <span className='banner__subtitle--highlight'>endless!</span>
                  </p>
                  <button className="btn btn__solid">Learn more</button>
              </div>
              <div className="banner__image"/>
          </section>
          <main className="main">
              <section className="offers">
                  <h2 className="offers__title">Offers</h2>
                  <section className="offers__list">
                      <div className="offer offer--long">
                          <div className="offer__title offer__title--large">Move the borders of reality!</div>
                          <div className="offer__subtitle offer__subtitle--large">
                              Go on a space adventure - it's possible with us!
                          </div>
                          <button className="btn btn__bordered">Learn more</button>
                      </div>
                      <div className="offer offer--short">
                          <div className="offer__title offer__title--small">Space is not just stars and planets</div>
                          <div className="offer__subtitle offer__subtitle--small">Go on a space adventure</div>
                          <button className="btn btn__bordered">Learn more</button>
                      </div>
                      <div className="offer offer--short">
                          <div className="offer__title offer__title--small">For those who dream of stars</div>
                          <div className="offer__subtitle offer__subtitle--small">Our offer: make your dream come true
                          </div>
                          <button className="btn btn__bordered">Learn more</button>
                      </div>
                      <div className="offer offer--long">
                          <div className="offer__title offer__title--large">Fulfill your fantastic dreams</div>
                          <div className="offer__subtitle offer__subtitle--large">Space has never been so close</div>
                          <button className="btn btn__bordered">Learn more</button>
                      </div>
                  </section>
              </section>

              <section className="info">
                  <h2 className="info__title">Embark on a space journey</h2>
                  <article className="info__description">
                      Travelling into space is one of the most exciting and unforgettable adventures that can change
                      your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our
                      company is ready to help you realize this dream. We offer a unique experience that will allow you
                      to go on
                      a space journey and see all the secrets of the universe. We guarantee that every moment in space
                      will be filled with incredible impressions, excitement and new discoveries. Our team of
                      professionals
                      takes care of your safety and comfort so that you can fully enjoy your adventure in space. We
                      offer various
                      options for space excursions.
                  </article>
                  <label htmlFor="readmore-toggle" className="info__readmore">Read More</label>
              </section>
          </main>
          <footer className="footer">
              <RocketIcon/>
              <span className='footer__slogan'>Exciting space adventure!</span>
          </footer>
      </>
  );
}

export default App;
