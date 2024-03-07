import { useEffect, useState} from "react";
import { Container, Table, Button } from 'react-bootstrap';
import * as FaIcon from 'react-icons/fa';



export default function EvaluationTable() {
    const [evaluations, setEvaluations] = useState([])

    useEffect(() => {
        async function getEvaluations() {
            try {
                const response = await fetch("http://localhost/api/eval/evals", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const _response = await response.json();
                if(response.ok && _response.evaluations) {
                    setEvaluations(_response.evaluations);
                } else {
                    console.log(_response.error);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getEvaluations();
    }, []);
    
    return (
      <Container>
        <Table responsive hover>
            <thead>
            <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Score</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {evaluations.map((evaluation) => <tr key={evaluation._id}>
                <td>{evaluation.visitDateTime}</td>
                <td>{evaluation.location}</td>
                <td>{evaluation.final}</td>
                <td>Action</td>
            </tr>)}


            </tbody>
        </Table>


      </Container>
    );
}