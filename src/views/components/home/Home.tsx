import React,{ReactElement} from 'react';
import { Container } from 'react-bootstrap';
import Map from './Map'


interface Props {
	
}


const Home = ({ }: Props): ReactElement => {
	return (
		<>
			<Container className="mt-5">
				<Map />
			</Container>
		</>
	);
}

export default Home;
