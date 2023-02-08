import React from 'react'
import '../styles/Table.css'
import { Table } from 'react-bootstrap'

const Tables = () => {
  return (
    <div className='horarios'>
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
              <td>Quarta</td>
              <td>Quarta</td>
              <td>Quarta</td>
              <td>Quarta</td>
              <td>Quarta</td>
              <td>Quarta</td>
              <td>Quarta</td>
              <td>Quarta</td>
              <td>Quarta</td>
              <td>Quarta</td>
            </tr>
            <tr>
              <td>Quinta</td>
              <td>Quinta</td>
              <td>Quinta</td>
              <td>Quinta</td>
              <td>Quinta</td>
              <td>Quinta</td>
              <td>Quinta</td>
              <td>Quinta</td>
              <td>Quinta</td>
              <td>Quinta</td>
            </tr>
            <tr>
              <td>Sexta</td>
              <td>Sexta</td>
              <td>Sexta</td>
              <td>Sexta</td>
              <td>Sexta</td>
              <td>Sexta</td>
              <td>Sexta</td>
              <td>Sexta</td>
              <td>Sexta</td>
              <td>Sexta</td>
              
            </tr>
          </tbody>
        </Table>
    </div>
  )
}

export default Tables