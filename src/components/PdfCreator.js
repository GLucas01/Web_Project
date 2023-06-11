import {
  Document,
  Page,
  Image,
  Text,
  View,
  StyleSheet,
  Font,
  PDFViewer,
  Canvas
} from "@react-pdf/renderer";
// Create styles


const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "white",
  },
  section: {

  },
  viewer: {
    width: window.innerWidth/2, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  canvas_dessin: {
      backgroundColor: "#D1DEDE",
      height: 3507,
      width: 200,
      top: 0,
      position: 'absolute'
  },

  roundedLine: {
      width: 200,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'gray',
      top: 200,
      left: 250,
  },

  texte_titre: {
      fontFamily: 'Helvetica',
      fontSize: 30,
      fontWeight: 700,
      color: 'white',
      top: 60,
      left: 250,
  },
  texte_sous_titre: {
      fontSize: 10,
      color: 'white',
      top: 80,
      left: 250,
      marginBottom: 8,

  },
  texte_gauche: {
      fontSize: 15,
      color: '#2e4057', //#2e4057
      top: 100,
      left: 50,
      marginTop: 40,
      textDecoration: 'underline',
      textDecorationStyle: 'solid',
  },
  sous_texte_gauche_langue: {
      fontSize: 12,
      color: '#2e4057', //#2e4057
      top: 130,
      left: 30,
      marginBottom: 50,

  },

  sous_texte_gauche: {
      fontSize: 12,
      color: '#2e4057', //#2e4057
      top: 120,
      left: 30,
      marginBottom: 20,

  },
  titre_partie: {
      fontSize: 15,
      fontWeight: 'Bold',
      color: '#138F9E',
      textAlign: 'center',
      top: 90,
      left: 60,
      marginTop: 25,
      marginBottom: 15,

  },
  titre_experience: {
      fontSize: 12,
      color: '#2e4057',
      top: 80,
      left: 30,
      marginTop: 15,
      marginBottom: 0,

  },

  description_experience: {
      fontSize: 10,
      fontStyle: 'italic',
      color: '#2e4057',
      top: 90,
      left: 0,
      marginTop: 0,
      marginBottom: 10,

  },
  view_texte: {
      display: 'flex',
      flexDirection: 'column',

  },

  view_titre_partie: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  },
  view_placement_leftright: {
      display: 'flex',
      flexDirection: 'row',


}
});



// Create Document Component
function PdfCreator() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page} >

                  <div style={styles.section}>
                      <Canvas style={styles.canvas_dessin} //toutes les formes colorées sont ici//
                          paint={
                              (painterObject) =>
                                  painterObject
                                      .save()
                                      .circle(150, 120, 80)
                                      .fill("#138F9E") //DECORATION
                                      .rect(150, 40, 500, 160)
                                      .fill("#138F9E") //DECORATION

                                      .rect(20, 320, 150, 5)
                                      .fill("#2e4057") //NIVEAU ANGLAIS MAX
                                      .rect(20, 320, 70, 5)
                                      .fill("#138F9E") //NIVEAU ANGLAIS A FAIRE VARIER

                                      .rect(20, 380, 150, 5)
                                      .fill("#2e4057") //NIVEAU ALLEMAND MAX
                                      .rect(20, 380, 80, 5)
                                      .fill("#138F9E") //NIVEAU ALLEMAND A FAIRE VARIER
                                      //ajout d'une LV3 ici//

                                      .circle(110, 475, 5)
                                      .fill("#138F9E") //Point Attribué à Excel
                                      .circle(130, 475, 5)
                                      .fill("#2e4057") //Point Maximum pour Excel
                                      .circle(150, 475, 5)
                                      .fill("#2e4057") //Point Maximum pour Excel
                                      .circle(170, 475, 5)
                                      .fill("#2e4057") //Point Maximum pour Excel

                                      .circle(110, 507, 5)
                                      .fill("#138F9E") //Point Attribué à Word
                                      .circle(130, 507, 5)
                                      .fill("#138F9E") //Point Attribué à Word
                                      .circle(150, 507, 5)
                                      .fill("#2e4057") //Point Maximum pour Word
                                      .circle(170, 507, 5)
                                      .fill("#2e4057") //Point Maximum pour Word

                                      .circle(110, 541, 5)
                                      .fill("#138F9E") //Point Attribué à Python
                                      .circle(130, 541, 5)
                                      .fill("#138F9E") //Point Attribué à Python
                                      .circle(150, 541, 5)
                                      .fill("#138F9E") //Point Attribué à Python
                                      .circle(170, 541, 5)
                                      .fill("#2e4057") //Point Maximum pour Python

                                      .circle(110, 574, 5)
                                      .fill("#138F9E") //Point Attribué à HTML
                                      .circle(130, 574, 5)
                                      .fill("#138F9E") //Point Attribué à HTML
                                      .circle(150, 574, 5)
                                      .fill("#138F9E") //Point Attribué à HTML
                                      .circle(170, 574, 5)
                                      .fill("#138F9E") //Point Attribué à HTML

                                      .circle(110, 607, 5)
                                      .fill("#138F9E") //Point Attribué à JS
                                      .circle(130, 607, 5)
                                      .fill("#138F9E") //Point Attribué à JS
                                      .circle(150, 607, 5)
                                      .fill("#138F9E") //Point Attribué à JS
                                      .circle(170, 607, 5)
                                      .fill("#138F9E") //Point Attribué à JS
                          }
                      />


                      // TEXTE TITRE //
                      <Text style={styles.texte_titre}>NOÉ CARINGI </Text> //nom et prénom titre//
                      <View style={styles.view_texte}>
                          <Text style={styles.texte_sous_titre}>caringi.noe@gmail.com </Text> //information sous-titre//
                          <Text style={styles.texte_sous_titre}>06 86 07 47 55</Text> //information sous-titre//
                          <Text style={styles.texte_sous_titre}>160 rue Cuvier, Lyon 6 </Text> //information sous-titre//
                          <Text style={styles.texte_sous_titre}>Permis B véhicule personnel </Text> //information sous-titre//
                      </View>
                  </div>



                  <div style={styles.section}>
                      <View style={styles.view_placement_leftright}>

                      // TEXTE COLONNE GAUCHE //
                          <View style={styles.section}>
                              <Text style={styles.texte_gauche}>LANGUES</Text> //titre texte à gauche "LANGUES"//
                                  <View style={styles.view_texte}>
                                          <Text style={styles.sous_texte_gauche_langue}>Anglais</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 170 /!\
                                          <Text style={styles.sous_texte_gauche_langue}>Allemand</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 170 /!\
                                          //ajout d'une LV3 ici//
                                  </View>

                              <Text style={styles.texte_gauche}>COMPÉTENCES</Text> //titre texte à gauche "COMPETENCES"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.sous_texte_gauche}>Excel</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\
                                      <Text style={styles.sous_texte_gauche}>Word</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\
                                      <Text style={styles.sous_texte_gauche}>Python</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\
                                      <Text style={styles.sous_texte_gauche}>HTML</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\
                                      <Text style={styles.sous_texte_gauche}>JavaScript</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\


                                  </View>

                              <Text style={styles.texte_gauche}>LOISIRS</Text> //titre texte à gauche "LOISIRS"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.sous_texte_gauche}>Kayak et Canoë</Text>
                                      <Text style={styles.sous_texte_gauche}>Violoncelle et Alto</Text>
                                  </View>
                          </View>

                      // TEXTE COLONNE DROITE //
                          <View style={styles.view_titre_partie}>
                              <Text style={styles.titre_partie}> FORMATION </Text> //titre partie "FORMATION"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.titre_experience}>INSA Lyon - Département TC (2022 - 2025)</Text> //formation titre//
                                      <Text style={styles.titre_experience}>INSA Lyon - FIMI (2020 - 2022)</Text> //formation titre//
                                      <Text style={styles.titre_experience}>Lycée Louis Vincent (2017 - 2020)</Text> //formation titre//
                                          <Text style={styles.description_experience}>Bac mention Très Bien - Section Euro Angais</Text> //description formation//
                                  </View>

                              <Text style={styles.titre_partie}> PARCOURS PROFESSIONNEL </Text> //titre partie "PARCOURS PROFESSIONNEL"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.titre_experience}>LeDiableEnPersonne.fr (2010 - actuel)</Text> //expérience professionnel titre//
                                          <Text style={styles.description_experience}>Envoie des clients en enfer</Text> //description des taches//
                                          <Text style={styles.description_experience}>Gestion comptabilité et stocks</Text> //description des taches//

                                      <Text style={styles.titre_experience}>Dassault Systèmes (2001 - 2008)</Text>
                                          <Text style={styles.description_experience}>Livraison d'armes à des pays douteux</Text>
                                          <Text style={styles.description_experience}>Financement de la guerre autour du monde</Text>

                                      <Text style={styles.titre_experience}>Total Energies (1995 - 2000)</Text>
                                          <Text style={styles.description_experience}>Exploitation de populations dans les pays africains</Text>
                                          <Text style={styles.description_experience}>Responsable de la branche Lobbying</Text>
                                  </View>

                              <Text style={styles.titre_partie}> ASSOCIATIF </Text> //titre partie "ASSOCIATIF"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.titre_experience}>GreenPeace France</Text> //expérience associatif titre//
                                          <Text style={styles.description_experience}>Action en lien avec la protection de l'environement</Text> //description des taches//
                                      <Text style={styles.titre_experience}>BDE INSA Lyon</Text> //expérience associatif titre//
                                          <Text style={styles.description_experience}>Activité d'intégration et animation du campus</Text> //description des taches//
                                   </View>

                          </View>

                      </View>
                  </div>

        </Page>
      </Document>
    </PDFViewer>
  );
}
export default PdfCreator;