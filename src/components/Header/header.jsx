import { Link } from "react-router-dom"

function Header() {
  return (
    //menu top
    <div class="bandeau-menu">
      <div id="menu">
        {/* LOGO */}
        <div class="bloc_logo">
          <a href="index.html">
            <img
              class="logo"
              src="../../assets/logo-titre-milieu-2-2020.svg"
              width="645"
              height="340"
              alt="logo la radio de fifi"
            />
          </a>
        </div>
        {/* MENU */}
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/top2fifi">Le top de Fifi</Link>
          <Link to="/coup2coeur">Les coups de coeur</Link>
          <Link to="/clips2fifi">Les clips de Fifi</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
