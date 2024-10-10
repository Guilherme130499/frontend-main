'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import React from 'react'
import { Button, CardImg, Form } from 'react-bootstrap'
import { FaTrash, FaCheck } from 'react-icons/fa'

export default function page() {


    function calcular(dados) {
        console.log(dados)
    
        const resIMC = (dados.peso / (dados.altura * dados.altura)).toFixed(1)

        console.log(resIMC)

        let resClas = ''

        if (resIMC < 18.5) {
            resClas = 'Baixo peso'
        } else if (resIMC >= 18, 5 && resIMC < 25) {
            resClas = 'Peso normal'
        } else if (resClas >= 25 && resIMC < 29.9) {
            resClas = 'Excesso de Peso'
        } else if (resIMC >= 30) {
            resClas = 'Obesidade'
        } else if (resIMC >= 35) {
            resClas = 'Obesidade Extrema'
        }
    }




return (
    <Pagina titulo="Calculadora de IMC - Formik">

        <div>
            <CardImg src='/obesidade.jpg'/>
        </div>

        <Formik
            initialValues={{
                nome: '',
                genero: '',
                peso: '0',
                altura: '0.0'
            }}
            onSubmit={values => calcular(values)}
        >
            {({ values, handleChange, handleSubmit, handleReset }) => (

                <Form>
                    <Form.Group className='mb-2'>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control
                            type='text'
                            name='nome'
                            value={values.nome}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className='mb-2'>
                        <Form.Label>Genero:</Form.Label>
                        <Form.Select
                            name='genero'
                            value={values.genero}
                            onChange={handleChange}
                        >
                            <option>Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </Form.Select>
                    </Form.Group>


                    <Form.Group className='mb-2'>
                        <Form.Label>Peso:</Form.Label>
                        <Form.Control
                            name='peso'
                            type='number'
                            min={1}
                            value={values.peso}
                            onChange={handleChange}
                        />
                        <Form.Text>Peso em kg Ex: 80</Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-2'>
                        <Form.Label>Altura:</Form.Label>
                        <Form.Control
                            name='peso'
                            type='number'
                            min={1}
                            value={values.peso}
                            onChange={handleChange}
                        />
                        <Form.Text>Peso em kg Ex: 80</Form.Text>
                    </Form.Group>


                    <Form.Group className='mb-2 text-center'>
                        <Button onClick={handleSubmit} className='me-2'><FaCheck/> Enviar </Button>
                        <Button onClick={handleReset}><FaTrash/> Limpar </Button>
                    </Form.Group>
                </Form>

            )}

        </Formik>


    </Pagina>
)
            }
