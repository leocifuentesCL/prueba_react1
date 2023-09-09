import Card from "react-bootstrap/Card";

function Cards({ people }) {
  return (
    <>
      {people.map((p) => {
        return (
          <Card style={{ width: "18rem" }} key={p.id}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body className="tarjeta">
              <Card.Title className="titulo">{p.name}</Card.Title>
              <Card.Text className="item">Height: </Card.Text><p>{p.height}</p>
              <Card.Text className="item">Hair color: </Card.Text><p>{p.hair_color}</p>
              <Card.Text className="item">Eye color: </Card.Text><p>{p.eye_color}</p>
              <Card.Text className="item">Birth: </Card.Text><p>{p.date_of_birth}</p>
              <Card.Text className="item">Death: </Card.Text><p>{p.date_of_death}</p>
              <Card.Text className="item">Weapons: </Card.Text><p>{p.weapons}</p>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Cards;
