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
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
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
      left: 30,
      marginTop: 40,
      textDecoration: 'underline',
      textDecorationStyle: 'solid',
  },
  texte_gauche2: {
    fontSize: 15,
    color: '#2e4057', //#2e4057
    top: 100,
    left: 55,
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
      left: 60,
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
function PdfCreator({user}) {
    const getBarLength2 = () => {
        if (user.languesLv2Niveau === 'débutant') {
          return 20;
        } else if (user.languesLv2Niveau === 'intermédiaire') {
          return 70;
        } else {
          return 130;
        }
      };
      const getBarLength1 = () => {
        if (user.languesLv1Niveau === 'débutant') {
          return 20;
        } else if (user.languesLv1Niveau === 'intermédiaire') {
          return 70;
        } else {
          return 130;
        }
      };
      const transformToUpperCase = (value) => {
        if (value) {
          return value.toUpperCase();
        }
        return '';
      };
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
                                      .rect(20, 320, getBarLength1(), 5)
                                      .fill("#138F9E") //NIVEAU ANGLAIS A FAIRE VARIER

                                      .rect(20, 380, 150, 5)
                                      .fill("#2e4057") //NIVEAU ALLEMAND MAX
                                      .rect(20, 380, getBarLength2(), 5)
                                      .fill("#138F9E") //NIVEAU ALLEMAND A FAIRE VARIER
                                      //ajout d'une LV3 ici//

                                      
                          }
                      />


                      // TEXTE TITRE //
                      <Text style={styles.texte_titre}>{user.prenom}  {user.nom}</Text> //nom et prénom titre//
                      <View style={styles.view_texte}>
                          <Text style={styles.texte_sous_titre}>{user.email} </Text> //information sous-titre//
                          <Text style={styles.texte_sous_titre}>{user.telephone}</Text> //information sous-titre//
                          <Text style={styles.texte_sous_titre}>{user.adresse} </Text> //information sous-titre//
                          <Text style={styles.texte_sous_titre}>{user.permisB ? 'Permis B ' : ''} </Text> //information sous-titre//
                      </View>
                  </div>



                  <div style={styles.section}>
                      <View style={styles.view_placement_leftright}>

                      // TEXTE COLONNE GAUCHE //
                          <View style={styles.section}>
                              <Text style={styles.texte_gauche}>LANGUES</Text> //titre texte à gauche "LANGUES"//
                                  <View style={styles.view_texte}>
                                          <Text style={styles.sous_texte_gauche_langue}>{transformToUpperCase(user.langues)}</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 170 /!\
                                          <Text style={styles.sous_texte_gauche_langue}>{transformToUpperCase(user.langues2)}</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 170 /!\
                                          //ajout d'une LV3 ici//
                                  </View>

                              <Text style={styles.texte_gauche}>COMPÉTENCES</Text> //titre texte à gauche "COMPETENCES"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.sous_texte_gauche}>{transformToUpperCase(user.competences1)}</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\
                                      <Text style={styles.sous_texte_gauche}>{transformToUpperCase(user.competences2)}</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\
                                      <Text style={styles.sous_texte_gauche}>{transformToUpperCase(user.competences3)}</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\
                                      <Text style={styles.sous_texte_gauche}>{transformToUpperCase(user.competences4)}</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\
                                      <Text style={styles.sous_texte_gauche}>{transformToUpperCase(user.competences5)}</Text> // /!\ CHANGER LE DIAGRAMME vers LA LIGNE 200 /!\


                                  </View>

                              <Text style={styles.texte_gauche2}>LOISIRS</Text> //titre texte à gauche "LOISIRS"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.sous_texte_gauche}>{transformToUpperCase(user.loisirs)}</Text>
                                      <Text style={styles.sous_texte_gauche}>{transformToUpperCase(user.loisirs2)}</Text>
                                  </View>
                          </View>

                      // TEXTE COLONNE DROITE //
                          <View style={styles.view_titre_partie}>
                              <Text style={styles.titre_partie}> FORMATION </Text> //titre partie "FORMATION"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.titre_experience}>{user.etablissement1} {user.anneeDebut1 && user.anneeFin1 ? `(${user.anneeDebut1} - ${user.anneeFin1})` : ''}</Text> //formation titre//
                                        <Text style={styles.description_experience}>{user.formation1}</Text> //description formation//
                                      <Text style={styles.titre_experience}>{user.etablissement2} {user.anneeDebut2 && user.anneeFin2 ? `(${user.anneeDebut2} - ${user.anneeFin2})` : ''}</Text> //formation titre//
                                        <Text style={styles.description_experience}>{user.formation2}</Text> //description formation//
                                      <Text style={styles.titre_experience}>{user.etablissement3} {user.anneeDebut3 && user.anneeFin3 ? `(${user.anneeDebut3} - ${user.anneeFin3})` : ''}</Text> //formation titre//

                                          <Text style={styles.description_experience}>{user.formation3}</Text> //description formation//
                                  </View>

                              <Text style={styles.titre_partie}> PARCOURS PROFESSIONNEL </Text> //titre partie "PARCOURS PROFESSIONNEL"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.titre_experience}>{user.entreprise1} {user.anneeDebut4 && user.anneeFin4 ? `(${user.anneeDebut4} - ${user.anneeFin4})` : ''}</Text> //expérience professionnel titre//
                                          <Text style={styles.description_experience}>{user.description1}</Text> //description des taches//
                                          

                                      <Text style={styles.titre_experience}>{user.entreprise2} {user.anneeDebut5 && user.anneeFin5 ? `(${user.anneeDebut5} - ${user.anneeFin5})` : ''}</Text>
                                          <Text style={styles.description_experience}>{user.description2}</Text>
                                          

                                      <Text style={styles.titre_experience}>{user.entreprise3} {user.anneeDebut6 && user.anneeFin6 ? `(${user.anneeDebut6} - ${user.anneeFin6})` : ''}</Text>
                                          <Text style={styles.description_experience}>{user.description3}</Text>
                                          
                                  </View>

                              <Text style={styles.titre_partie}> ASSOCIATIF </Text> //titre partie "ASSOCIATIF"//
                                  <View style={styles.view_texte}>
                                      <Text style={styles.titre_experience}>{user.experienceAssociative1}</Text> //expérience associatif titre//
                                          <Text style={styles.description_experience}>{user.engagement1}</Text> //description des taches//
                                      <Text style={styles.titre_experience}>{user.experienceAssociative2}</Text> //expérience associatif titre//
                                          <Text style={styles.description_experience}>{user.engagement2}</Text> //description des taches//
                                   </View>

                          </View>

                      </View>
                  </div>

        </Page>
      </Document>
    </PDFViewer>
  );
}
export default PdfCreator