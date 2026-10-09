import { NavLink, Route, Routes, Link } from "react-router-dom";
import Competences from "./pages/Competences";
import Contact from "./pages/Contacts";
import Experiences from "./pages/Experiences";
import Projets from "./pages/Projets";
import Certifications from "./pages/Certifications";
import Awards from "./pages/Awards";
import Recherches from "./pages/Recherches";
import A_propos from "./pages/A_propos";    
//import "./App.css"; COMMEMNTAIRE: j'ai juste mis cette partie pour utiliser mon fichier style.css mais j'ai mis le meme code source dans les deux
import "./assets/styles.css";

const App = () => {
 return ( <>
 <header className="header">
 <Link to="/" className="logo-initials" aria-label="Accueil">
ND
 </Link>
 <nav className="navbar">
    <NavLink to="/a_propos" className="nav-link">
    À propos
    </NavLink>

    <NavLink to="/competences" className="nav-link">
    Compétences
    </NavLink>
    <NavLink to="/recherches" className="nav-link">
    Recherches
    </NavLink>

    <NavLink to="/experiences" className="nav-link">
    Expérience
    </NavLink>
    <NavLink to="/projets" className="nav-link">
    Projets
    </NavLink>

    <NavLink to="/contact" className="nav-link">
    Contact
    </NavLink>
    <NavLink to="/certifications" className="nav-link">
    Certifications
    </NavLink>

    <NavLink to="/awards" className="nav-link">
    Récompenses
    </NavLink>

 </nav>
 </header>
    <main className="content"> <Routes>
    <Route path="/competences" element={<Competences />} />
    <Route path="/experiences" element={<Experiences />} />
    <Route path="/projets" element={<Projets />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/certifications" element={<Certifications />} />
    <Route path="/awards" element={<Awards />} />
    <Route path="/recherches" element={<Recherches />} />
    <Route path="*" element={<A_propos />} />
    <Route path="/a_propos" element={<A_propos />} />

 </Routes>
 </main>
 </>
 );
};

export default App;
