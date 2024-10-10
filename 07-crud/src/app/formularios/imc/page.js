'use client'

import Pagina from "@/components/Pagina"
import { useState } from "react"
import { CardImg, Form, Button, Modal } from "react-bootstrap"
import { FaCheck } from "react-icons/fa";





export default function ImcPage() {

    const [showModal, setShowModal] = useState(false)
    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0, 0)

    const [imc, setIMC] = useState(0)
    const [classificacao, setClassificacao] = useState('')



    function calcular(event) {
        event.preventDefault()
        console.log({ nome, genero, peso, altura })



        const pesoNumerico = Number(peso)
        const alturaNumerico = Number(altura)

        console.log({ nome, genero, pesoNumerico, alturaNumerico })

        const resultadoIMC = (pesoNumerico / (alturaNumerico * alturaNumerico)).toFixed(1)

        setIMC(resultadoIMC)

        if (imc < 18.5) {
            setClassificacao('Abaixo do peso')
        } else if (imc >= 18.5 && imc < 24.9) {
            setClassificacao('Peso normal')
        } else if (imc >= 25 && imc < 29.9) {
            setClassificacao('Sobrepeso')
        } else if (imc >= 30 && imc < 35) {
            setClassificacao('Obesidade Grau I')
        } else if (imc >= 35) {
            setClassificacao('Obesidade Morbida')
        }

        console.log({ imc, classificacao })

        setShowModal(true)
    }

    return (

        <Pagina titulo="Calculadora de IMC">

            <div>
                <CardImg src="/obesidade.jpg" />
            </div>

            <Form onSubmit={calcular}>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={e => { setNome(e.target.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Gênero:</Form.Label>
                    <Form.Select
                        name="genero"
                        value={genero}
                        onChange={e => setGenero(e.target.value)}
                    >
                        <option>Selecine</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Peso:</Form.Label>
                    <Form.Control
                        name="peso"
                        type="Number"
                        value={peso}
                        onChange={e => setPeso(e.target.value)}
                        min={1}
                        step={1}
                    />
                    <Form.Text>Peso em KG . EX: 80</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Altura:</Form.Label>
                    <Form.Control
                        name="altura"
                        type="number"
                        value={altura}
                        onChange={e => setAltura(e.target.value)}
                        min={0.01}
                        step={0.01}
                    />
                    <Form.Text>Altura em Metros. Ex: 1,75</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 text-center" >
                    <Button type="submit" variant="warning"><FaCheck /> Calcular </Button>
                </Form.Group>

            </Form>

            {/* Modal do Resultado */}

            {<Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>O seu imc é {imc}</p>
                    <p>Sua classificação é {classificacao}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)} >
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>}

        </Pagina>

    )

}
