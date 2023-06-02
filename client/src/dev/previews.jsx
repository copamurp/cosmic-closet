import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Nav from "../components/Nav";
import Guest from "../components/Guest";

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree/>}>
			<ComponentPreview path="/Nav">
				<Nav/>
			</ComponentPreview>
			<ComponentPreview path="/Guest">
				<Guest/>
			</ComponentPreview>
		</Previews>
	)
}

export default ComponentPreviews