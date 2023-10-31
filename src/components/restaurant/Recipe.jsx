import Card from 'react-bootstrap/Card';

export default function Recipe(props) {
    return (
        <div className='col-md-3 mb-4 mt-4 centar'>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={props.image} className='Recipe-img' />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}
