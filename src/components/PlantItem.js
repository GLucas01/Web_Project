import CareScale from './CareScale'
import '../styles/PlantItem.css'


function PlantItem({ id, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item'>
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem