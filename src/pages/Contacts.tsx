const Contacts = () => {
  return (
    <section className="content-section" aria-labelledby="contacts-title">
      <h1 id="contacts-title">Contact</h1>
      <p>Vous pouvez me joindre pour toute opportunité professionnelle, projet technologique, collaboration IA ou mandat en gestion TI.</p>

      <h2>Coordonnées</h2>
      <ul>
        <li><strong>Nom :</strong> Nike Djateng</li>
        <li><strong>Ville :</strong> Ottawa, Ontario</li>
        <li><strong>Téléphone :</strong> 780 860-1846</li>
        <li><strong>Email :</strong> nike.djateng@nosirisdigital.com</li>
        <li>
          <strong>LinkedIn :</strong>{" "}
          <a href="https://www.linkedin.com/in/nike-djateng-ab5a6a137" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/nike-djateng-ab5a6a137
          </a>
        </li>
      </ul>

      <h2>Disponibilité</h2>
      <p>
        Ouvert aux opportunités en gestion TI, projets technologiques, systèmes d'information, cybersécurité, cloud, IA appliquée et
        transformation numérique.
      </p>

      <h2>Collaboration & Projets IA</h2>
      <p>
        Intéressé par des projets impliquant agents IA, automatisation, solutions numériques, optimisation des processus d’affaires ou
        développement de plateformes intelligentes.
      </p>
    </section>
  );
};

export default Contacts;
