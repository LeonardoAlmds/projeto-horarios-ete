import React from 'react';
import FormSelects from '../components/FormSelects';
import TableHorarios from '../components/TableHorarios';

const Home = () => {
  return (
    <>
      <FormSelects 
        title='Selecione sua Turma'
      />
      <TableHorarios
        title='Horário dos Alunos'
      />
    </>
  )
};

export default Home;