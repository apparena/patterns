import React from 'react';
import {CardsList, Card} from 'apparena-patterns-react';

export default function CardsListExample(){
    return(
        <CardsList>
            <Card>
                <h4 type="card-title">Sandwich</h4>
                <p type="card-block">Make your own sandwich, with cheese, ham, salad and alout of other ingriediens</p>
                <p type="card-footer"><small>No.1</small></p>
            </Card>
            <Card>
                <h4 type="card-title">Pizza</h4>
                <p type="card-block">Create your own pizza. Choose between different cheese sorts, vegetables and meat. From ham to fish, everythin is possible</p>
                <p type="card-footer"><small>No.2</small></p>
            </Card>
            <Card>
                <h4 type="card-title">Cake</h4>
                <p type="card-block">Create your own cake. Choose the inside, choose the outside and choose a toppint. Make your own creation.</p>
                <p type="card-footer"><small>No.3</small></p>
            </Card>
        </CardsList>
    )
}

/*;;usage
<CardsListExample />
;;*/