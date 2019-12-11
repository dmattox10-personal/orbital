import React, { useState, useEffect } from 'react';
import { Container, Row} from 'reactstrap'
import axios from 'axios'

import SpaceCard from './components/Card'

import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
import './App.css';

function App() {
  const [humans, updateHumans] = useState({
    message: "Nothing Yet.",
    number: 0,
    people: []
  })
  useEffect(() => {
    axios.get('http://api.open-notify.org/astros.json')
      .then(res => {
        updateHumans(res.data)
      })
  }, [])
  return (
    <div className="App">
      <Container>
        { humans.people.map(human => 
          <Row>
            <SpaceCard name={ human.name } craft={ human.craft } />
          </Row>)}
      </Container>
    </div>
  );
}

export default App;
