import React from 'react'
import Table from 'react-bootstrap/Table'

const CardComp = () => {
    return (
        <div className='horarios'>
            <h1 className='TitleText'>Cardápio da Semana</h1>
            <hr className='line'/>
            <hr className='lineMidlle'/>
            <Table className='table'>
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Lanche</th>
                        <th>Almoço</th>
                        <th>Lanche</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>            
                        <td data-title='Dia' className='NameDay'>Segunda</td>
                        <td data-title='Pão com Frango'>Pão com Frango</td>
                        <td data-title='12:20 Horas'>3° ano</td>
                        <td data-title='12:35 Horas'>2° ano</td>
                    </tr>
                        
                    <tr>
                        <td data-title='Dia' className='NameDay'>Terça</td>
                        <td data-title='1º Aula'>3° ano</td>
                        <td data-title='1º Aula'>2° ano</td>
                        <td data-title='1º Aula'>2° ano</td>
                    </tr>
                    <tr>
                        <td data-title='Dia' className='NameDay'>Quarta</td>
                        <td data-title='1º Aula'>1° ano</td>
                        <td data-title='1º Aula'>3° ano</td>
                        <td data-title='1º Aula'>1° ano</td>
                    </tr>
                    <tr>
                        <td data-title='Dia' className='NameDay'>Quinta</td>
                        <td data-title='1º Aula'>3° ano</td>
                        <td data-title='1º Aula'>3° ano</td>
                        <td data-title='1º Aula'>2° ano</td>
                    </tr>
                    <tr>
                        <td data-title='Dia' className='NameDay'>Sexta</td>
                        <td data-title='1º Aula'>1° ano</td>
                        <td data-title='1º Aula'>2° ano</td>
                        <td data-title='1º Aula'>1° ano</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default CardComp