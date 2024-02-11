import { Card } from 'react-bootstrap'
import React from 'react'

export const Character = ({character}) => {
  return (
    <Card>
    <Card.Img  style={{ padding: '5px', maxHeight: '150px', objectFit: 'contain'}} variant="bottom" src={character.thumbnail.path + '.' + character.thumbnail.extension} />
    <Card.Body>
      <Card.Title>
        {character.name}
      </Card.Title>
      <Card.Text>
        {character.description}
      </Card.Text>
    </Card.Body>
  </Card>
)
}
