import { Container, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import EvaluationTable from '../components/EvaluationTable'
export default function Evaluations () {
    return (
        <Container className="mt-5">
            <div className="mb-5">Evaluations</div>
            <Button as={Link} to="/new" variant={"btn btn-outline-secondary"} className="mb-5">Add New</Button>

            <EvaluationTable />
        </Container>
    )
}