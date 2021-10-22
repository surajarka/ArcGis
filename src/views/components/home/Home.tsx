import React,{ReactElement} from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
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
