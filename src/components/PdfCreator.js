import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Canvas
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#3FFFFF",
      color: "white",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth/2, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    canvas: {
        backgroundColor: "black",
        height: 100,
        width: 500,
        
      },
  });


  
  // Create Document Component
  function PdfCreator() {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Hello</Text>
            </View>
            <View style={styles.section}>
              <Text>World</Text>
              
            </View>
            <Canvas
    style={styles.canvas}
    paint={
        (painterObject) =>
        painterObject
            .save()
            .moveTo(100, 100) //move to position 100,100
            .lineTo(300, 100) //draw a line till 300, 100
            .lineTo(300, 300) //draw another line till 300,300
            .fill("#138F9E") //when the diagram is drawn, set the background color to pink
    }
    />
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default PdfCreator;