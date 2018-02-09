import React, {Component} from "react"

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div class="form_container">
                    <h2>Notre site</h2>

                    <ul>
                        <li> Site de Noucelles</li>
                        <li> Avenue Reine Astrid, 1</li>
                        <li> 1440 Wauthier-Braine</li>
                        <li> Tél: 02 386 06 11</li>
                        <li> Fax: 02 386 12 00</li>
                    </ul>

                    <form action="../../Controller/MainController.php">
                        <label for="fname">Prenom</label>
                        <input type="text" id="fname" name="prenom" placeholder="votre nom"/>
                        <label for="lname">Nom</label>
                        <input type="text" id="lname" name="nom" placeholder="votre prenom"/>
                        <label for="subject">Message</label>
                        <textarea id="subject" name="message" placeholder="message"/>
                        <input type="submit" value="Submit"/>
                    </form>

                </div>
                <div className="right_info">
                    <h2>Coordonnées de nos activités</h2>
                    <ul>
                        <li>Coordonnées générales</li>
                        <li>tél: 02 386 06 11 - fax: 02 386 06 10</li>
                        <li>pour les activités Entreprises : Entreprises@levillage1.be</li>
                        <li>pour la comptabilité Service.Compta@levillage1.be</li>
                    </ul>
                    <ul>
                        <li>Activités industrielles</li>
                        <li>Service commercial : tél: 02 388 05 30 - fax : 02 386 12</li>
                    </ul>

                    <ul>
                        <li>Back Office Services</li>
                        <li>tél: 02 386 06 50</li>
                    </ul>

                    <ul>
                        <li>Titres-services : repassage et aide au ménage</li>
                        <li> tél: 0800 11 112</li>
                        <li> titres.services@levillage1.be</li>
                    </ul>

                    <ul>
                        <li> Entretien d'espaces verts (Particuliers & Entreprises)</li>
                        <li>tél: 0800 11 112</li>
                    </ul>

                    <ul>
                        <li> Cleaning (service aux entreprises)</li>
                        <li> tél: 0471/50.98.45</li>
                        <li> mail: nettoyage@levillage1.be</li>
                    </ul>

                    POUR POSTULER : veuillez ne pas utiliser les emails et formulaires ci-dessus mais vous rendre sur la
                    page suivante offres-d-emploi
                    Nos entités juridiques

                    <ul>
                        <li>asbl ETA Village n°1</li>
                        <li>safs ADM Village n°1</li>
                        <li>safs B-Team Village n°1</li>
                        <li>safs Proxi Village n°1</li>
                        <li>En savoir plus sur nos entités juridiques</li>
                    </ul>

                </div>
            </div>

        )
    }
}

export default Contact;
