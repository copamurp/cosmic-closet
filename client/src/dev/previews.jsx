import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Nav from "../components/Nav";
import Guest from "../components/Guest";
import Testimonial from "../components/Testimonial";
import Contact from "../pages/Contact";

const ComponentPreviews = () => {
	return (
      <Previews palette={<PaletteTree/>}>
        <ComponentPreview path="/Nav">
          <Nav/>
        </ComponentPreview>
        <ComponentPreview path="/Guest">
          <Guest/>
        </ComponentPreview>
        <ComponentPreview path="/Testimonial">
          <Testimonial/>
        </ComponentPreview>
        <ComponentPreview path="/Contact">
          <Contact/>
        </ComponentPreview>
      </Previews>
	)
}

export default ComponentPreviews