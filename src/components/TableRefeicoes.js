import React from 'react'
import { Table } from 'react-bootstrap'
import '../styles/TableRefeicoes.css'

const TableRefeicoes = () => {
  return (
    <div className='horariosRefeicoes'>
      <h1 className='TitleText'>Horário Semanal do Almoço</h1>
      <hr className='line'/>
      <hr className='lineMidlle'/>
    <Table className='tableRefeicoes'>
      <thead>
          <tr>
            <th>Horário</th>
            <th>12:00</th>
            <th>12:20</th>
            <th>12:53</th>
          </tr>
      </thead>
      <tbody>
          <tr>            
            <td data-title='Dia' className='NameDay'>Segunda</td>
            <td data-title='12:00 Horas'>1° ano</td>
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
};

export default TableRefeicoes;