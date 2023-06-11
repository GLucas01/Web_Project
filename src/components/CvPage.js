import Body from './Body';
import PdfCreator from './PdfCreator'

function CvPage(){

    return(
        <div style={({display :  'flex'})}>
            <PdfCreator />
            <Body />
        </div>
    )

}

export default CvPage;