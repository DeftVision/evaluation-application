import { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

const formal_default = {
    visitDateTime: Date.now(),
    evaluator: "",
    location: "",
    comments: "",
    cashier: "",
    image: "",
    greeting: false,
    nameTag: false,
    lobby: false,
    patio: false,
    food: "",
    service: "",
    clean: "",
    final: "",
}

export default function EvaluationForm () {
    const [form, setForm] = useState(formal_default);
    const [switchState, setSwitchState] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSwitchChange = (e) => {
        setSwitchState(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(switchState);

        const response = await fetch(`http://localhost:8000/api/eval/new`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const _response = await response.json();
        if(!response.ok) {
            console.log(_response.error);
        }
        if(response.ok) {
            console.log(_response);
        }
        setValidated(true);
    }
    return (
        <Container className="" style={{width: "60%", display: "flex", flexDirection: "column", textAlign: "left"}}>
            <h3 className="mb-5 mt-5" style={{textAlign: "center"}}>Evaluation</h3>
            <form onSubmit={handleSubmit}>
                <Form.Group controlid="visitDateTime" className="mb-4">
                    <Form.Label>Visit Date | Time*</Form.Label>
                    <Form.Control
                        type="Date"
                        validated
                        autoComplete="visit-date-time"
                        value={form.visitDateTime}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                visitDateTime: e.target.value,
                            });
                        }}
                        />
                </Form.Group>

                <Form.Group controlid="evaluator" className="mb-4">
                    <Form.Label>Evaluator*</Form.Label>
                    <Form.Control
                        type="text"
                        value={form.evaluator}
                        required
                        onChange={(e) => {
                            setForm({
                                ...form,
                                evaluator: e.target.value,
                            })
                        }}
                    />
                </Form.Group>

                <Form.Group controlid="location" className="mb-4">
                    <Form.Label>Location*</Form.Label>
                    <Form.Select
                        value={form.location}
                        required
                        autoComplete="location-name"
                        validated
                        onChange={(e) => {
                            setForm({
                                ...form,
                                location: e.target.value,
                            })
                        }}>
                        <option></option>
                        <option value="Bountiful">Bountiful</option>
                        <option value="Draper">Draper</option>
                        <option value="East Mesa">East Mesa</option>
                        <option value="Jordan Landing">Jordan Landing</option>
                        <option value="Layton">Layton</option>
                        <option value="Lehi">Lehi</option>
                        <option value="Logan">Logan</option>
                        <option value="Mesa">Mesa</option>
                        <option value="Murray">Murray</option>
                        <option value="Orem">Orem</option>
                        <option value="Riverdale">Riverdale</option>
                        <option value="Sandy">Sandy</option>
                        <option value="Spanish Fork">Spanish Fork</option>
                        <option value="St. George">St. George</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlid="greeted" className="mb-4">
                    <Form.Check
                        type="switch"
                        id="greeting"
                        label="Greeted"
                        checked={form.greeting}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                greeting: e.target.checked
                            })
                        }}/>
                </Form.Group>

                <Form.Group controlid="nameTag" className="mb-4">
                    <Form.Check
                        type="switch"
                        id="nameTag"
                        label="Wearing a nametag"
                        checked={form.nameTag}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                nameTag: e.target.checked
                            })
                        }}/>
                </Form.Group>

                <Form.Group controlid="cashier" className="mb-4">
                    <Form.Label>Cashier / Description*</Form.Label>
                    <Form.Control
                        type="text"
                        autoComplete="cashier-name"
                        value={form.cashier}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                cashier: e.target.value,
                            })
                        }}
                    />
                </Form.Group>

                <Form.Group controlid="upsell" className="mb-4">
                    <Form.Check
                        type="switch"
                        id="upsell"
                        label="Upsold Sweet Potato Fries"
                        checkced={form.upsell}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                upsell: e.target.checked,
                            })
                        }} />
                </Form.Group>

                <Form.Group controlid="patio" className="mb-4">
                    <Form.Check
                        type="switch"
                        autoComplete="patio"
                        id="patio"
                        label="Is the patio clean and ogranized?"
                        checked={form.patio}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                patio: e.target.checked,
                            })
                        }} />
                </Form.Group>


                <Form.Group controlid="food" className="mb-4">
                    <Form.Label>Food*</Form.Label>
                    <Form.Control
                        type="number"
                        required
                        value={form.food}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                food: e.target.value,
                            })
                        }}
                    />
                </Form.Group>


                <Form.Group controlid="clean" className="mb-4">
                    <Form.Label>Clean*</Form.Label>
                    <Form.Control
                        type="number"
                        required
                        value={form.clean}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                clean: e.target.value,
                            })
                        }}
                    />
                </Form.Group>

                <Form.Group controlid="service" className="mb-4">
                    <Form.Label>Service*</Form.Label>
                    <Form.Control
                        type="number"
                        required
                        value={form.service}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                service: e.target.value,
                            })
                        }}
                    />
                </Form.Group>

                <Form.Group controlid="final" className="mb-4">
                    <Form.Label>Final*</Form.Label>
                    <Form.Control
                        type="number"
                        required
                        value={form.final}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                final: e.target.value,
                            })
                        }}
                    />
                </Form.Group>

                <Form.Group controlid="comments" className="mb-4">
                    <Form.Label>Comments*</Form.Label>
                    <Form.Control
                        as="textarea"
                        style={{height: "100px"}}
                        value={form.comments}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                comments: e.target.value,
                            })
                        }}
                    />
                </Form.Group>

                <Form.Group controlid="image" className="mb-4">
                    <Form.Label>Image*</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={(e) => {
                            setForm({
                                ...form,
                                image: e.target.value,
                            })
                        }}
                    />
                </Form.Group>
                <Button variant={"btn btn-outline-secondary"} type='submit'>
                    Submit Evaluation
                </Button>
            </form>

        </Container>
    );
}


