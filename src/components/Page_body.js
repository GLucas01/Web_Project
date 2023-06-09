import React from "react"
import '../styles/Page_body.css'
import slide1 from '../assets/slider1.jpg'
import slide2 from '../assets/slider2.jpg'
import slide3 from '../assets/slider3.jpg'
import model1 from '../assets/model1.jpg'
import model2 from '../assets/model2.jpg'
import model3 from '../assets/model3.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import ButtonBases from "./ButtonBases"


const slideImages = [
    {
        image : slide1,
        caption: 'Créez vos CV en toute facilité',
        text_top : 30 ,
        text_left : 60
    },
    {
        image : slide2,
        caption: 'Trouvez des entreprises qui vous intéressent',
        text_top : 60 ,
        text_left : 60
    },
    {
        image : slide3,
        caption: 'Une solution rapide et efficace',
        text_top : 40 ,
        text_left : 30
    },
  ];

const CV_models = () => {
    const imageFile = require('../assets/model1.jpg');
    const imageUrl = URL.createObjectURL(imageFile);
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map(
            (slideImage, index) => 
            (<div key={index} className="image-container">
                <img src={slideImage.image} className="image"/>
                <div className="text-overlay" style={{top: slideImage.text_top+"%", left: slideImage.text_left+"%"}}>{slideImage.caption}</div>
              </div>)
         )} 
        </Slide>
      </div>
    )
}

const Spacer = () => {
    return (
        <div style={{padding : "1000 px"}}/>
    )
}

const CV_models_display = () => {

    return (
        <div className="CV_models_display">
            <button className="CV_model" onClick={alert} style = {{backgroundColor : "red"}}></button>
            <button className="CV_model" onClick={alert}> <img src={model1}/> </button>
            <button className="CV_model" style = {{backgroundImage : model3}}></button>
        </div>
    )
}

function Page_body() {
    return <div className="body">
        <Spacer></Spacer>
        <Slideshow></Slideshow>
        <Spacer></Spacer>
        <CV_Button></CV_Button>
        <Spacer></Spacer>
        <ButtonBases></ButtonBases>
    </div>
}

function LoremIpsum() {
	return (
		<p class = 'LoremIpsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
		Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
		
		Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
		Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.

		Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.</p>
	)
}


class CV_Button extends React.Component {

    constructor (props) {
        super(props)
        this.state = {button : null}
    }

    buttonClicked() {
        this.setState({button : null})
    }

    buttonUnclicked() {
        this.setState({button : 1})
    }

    render() {
        const action = this.state.button ? this.buttonClicked.bind(this) : this.buttonUnclicked.bind(this);
        const texte = this.state.button ? "VOUS AVEZ CLICKE" : "VOUS AVEZ DECLICKE";
        
        return (
            <div class = 'bouton_class'>
                <button onClick = {action} class = 'CV_Button'> Faire mon cv </button>
            </div> 
        )
        }
}

export default Page_body