import { Container } from 'react-bootstrap';
import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
    return (
        <Container>
            <RotatingLines
            strokeColor="blue"
            strokeWidth="3"
            animationDuration="1"
            width="96"
            visible={true}
            />
        </Container>
    )
}