



document.write(`
    <!-- En Tete et menus  -->
    <header>
        <div class="Logo"></div>
        <h1>Johann Blanc</h1>
        <div class="Deco_A"></div>
        <div class="Deco_B"></div>
        <div class="Deco_C"></div>
        <a href="` + url_next_mod(mod()) + `" id="Mode_Change"> </a>
        
    </header>
    <nav>
        <ul>
            <li><h2>Qui-suis-je ?</h2>
                <ul>
                    <li><h3><a href="../Pages/CV.html?mode=` + mod() + `">Mon CV (Visuel)</a></h3></li>
                    <li><h3><a href="../Documents/CV.docx">Mon CV (Télécharger)</a></h3></li>
                    <li><h3><a href="../Pages/Liens.html?mode=` + mod() + `">Quelques liens</a></h3></li>
                </ul>
            </li>
            <li><h2>Formation Up to Dev</h2>
                <ul>
                    <li><h3><a href="../Pages/AFirst.html?mode=` + mod() + `">Assess First</a></h3></li>
                    <li><h3><a href="../Pages/Candidature.html?mode=` + mod() + `">Dossier de candidature</a></h3></li>
                </ul>
            </li>
            <li><h2>Compétences informatiques</h2>
                <ul>
                    <li><h3><a href="../Pages/Python.html?mode=` + mod() + `">Python</a></h3></li>
                    <li><h3><a href="../Pages/VBA.html?mode=` + mod() + `">Visual Basique pour Application</a></h3></li>
                </ul>
            </li>
        </ul>
    </nav>
`);