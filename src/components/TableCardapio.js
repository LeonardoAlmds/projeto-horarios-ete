import React from 'react'
import Table from 'react-bootstrap/Table'

const TableCardapio = () => {
    return (
        <div className='titleTop'>
            <h1 className='TitleText'>Cardápio da Semana</h1>
            <hr className='line'/>
            <hr className='lineMidlle'/>
            <Table className='table'>
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Café da manhã</th>
                        <th>Almoço</th>
                        <th>Lanche da tarde</th>
                        <th>Bebida</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>            
                        <td data-title='Dia' className='NameDay'>Segunda</td>
                        <td data-title='Café da manhã'>Pão com Frango</td>
                        <td data-title='Almoço'>Arroz com feijão e carne de porco</td>
                        <td data-title='Lanche da tarde'>Bolacha cream cracker</td>
                        <td data-title='Bebida'>Suco de caja</td>
                    </tr>
                        
                    <tr>
                        <td data-title='Dia' className='NameDay'>Terça</td>
                        <td data-title='Café da manhã'>Papa de chocolate</td>
                        <td data-title='Almoço'>Macarrão com carne moida</td>
                        <td data-title='Lanche da tarde'>Rosquinha de cocô</td>
                        <td data-title='Bebida'>Suco de goiaba</td>
                    </tr>
                    <tr>
                        <td data-title='Dia' className='NameDay'>Quarta</td>
                        <td data-title='Café da manhã'>Pão com salsicha</td>
                        <td data-title='Almoço'>Pirão com arroz e carne guisada</td>
                        <td data-title='Lanche da tarde'>Iorgute com Bolacha doce</td>
                        <td data-title='Bebida'>Suco de acerola</td>
                    </tr>
                    <tr>
                        <td data-title='Dia' className='NameDay'>Quinta</td>
                        <td data-title='Café da manhã'>Cuscuz temperado</td>
                        <td data-title='Almoço'>Feijoada com arroz e verduras</td>
                        <td data-title='Lanche da tarde'>Arroz doce</td>
                        <td data-title='Bebida'>Suco de manga</td>
                    </tr>
                    <tr>
                        <td data-title='Dia' className='NameDay'>Sexta</td>
                        <td data-title='Café da manhã'>Broa com café</td>
                        <td data-title='Almoço'>Feijão com macarrão e frango assado</td>
                        <td data-title='Lanche da tarde'>Bolacha doce</td>
                        <td data-title='Bebida'>Suco de caju</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableCardapio