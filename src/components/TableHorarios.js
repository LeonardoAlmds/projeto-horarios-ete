import React from 'react'
import '../styles/TableHorarios.css'
import { Table } from 'react-bootstrap'

const TableHorarios = (props) => {
  return (
    <div className='horarios'>
      <h1 className='TitleText'>{props.title}</h1>
      <hr className='line'/>
      <hr className='lineMidlle'/>
        <Table className='table'>
          <thead>
            <tr>
              <th>Dias da Semana</th>
              <th>1º Aula</th>
              <th>2º Aula</th>
              <th>3º Aula</th>
              <th>4º Aula</th>
              <th>5º Aula</th>
              <th>6º Aula</th>
              <th>7º Aula</th>
              <th>8º Aula</th>
              <th>9º Aula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title='Dia da Semana'>Segunda</td>
              <td data-title='1º Aula'>Segunda</td>
              <td data-title='2º Aula'>Segunda</td>
              <td data-title='3º Aula'>Segunda</td>
              <td data-title='4º Aula'>Segunda</td>
              <td data-title='5º Aula'>Segunda</td>
              <td data-title='6º Aula'>Segunda</td>
              <td data-title='7º Aula'>Segunda</td>
              <td data-title='8º Aula'>Segunda</td>
              <td data-title='9º Aula'>Segunda</td>
            </tr>
            <tr>
              <td data-title='Dia da Semana' >Terça</td>
              <td data-title='1º Aula' >Terça</td>
              <td data-title='2º Aula' >Terça</td>
              <td data-title='3º Aula' >Terça</td>
              <td data-title='4º Aula' >Terça</td>
              <td data-title='5º Aula' >Terça</td>
              <td data-title='6º Aula' >Terça</td>
              <td data-title='7º Aula' >Terça</td>
              <td data-title='8º Aula' >Terça</td>
              <td data-title='9º Aula' >Terça</td>
             
            </tr>
            <tr>
              <td data-title='Dia da Semana'>Quarta</td>
              <td data-title='1º Aula'>Quarta</td>
              <td data-title='2º Aula'>Quarta</td>
              <td data-title='3º Aula'>Quarta</td>
              <td data-title='4º Aula'>Quarta</td>
              <td data-title='5º Aula'>Quarta</td>
              <td data-title='6º Aula'>Quarta</td>
              <td data-title='7º Aula'>Quarta</td>
              <td data-title='8º Aula'>Quarta</td>
              <td data-title='9º Aula'>Quarta</td>
            </tr>
            <tr>
              <td data-title='Dia da Semana'>Quinta</td>
              <td data-title='1º Aula'>Quinta</td>
              <td data-title='2º Aula'>Quinta</td>
              <td data-title='3º Aula'>Quinta</td>
              <td data-title='4º Aula'>Quinta</td>
              <td data-title='5º Aula'>Quinta</td>
              <td data-title='6º Aula'>Quinta</td>
              <td data-title='7º Aula'>Quinta</td>
              <td data-title='8º Aula'>Quinta</td>
              <td data-title='9º Aula'>Quinta</td>
            </tr>
            <tr>
              <td data-title='Dia da Semana'>Sexta</td>
              <td data-title='1º Aula'>Sexta</td>
              <td data-title='2º Aula'>Sexta</td>
              <td data-title='3º Aula'>Sexta</td>
              <td data-title='4º Aula'>Sexta</td>
              <td data-title='5º Aula'>Sexta</td>
              <td data-title='6º Aula'>Sexta</td>
              <td data-title='7º Aula'>Sexta</td>
              <td data-title='8º Aula'>Sexta</td>
              <td data-title='9º Aula'>Sexta</td>
              
            </tr>
          </tbody>
        </Table>
    </div>
  );
}

export default TableHorarios;