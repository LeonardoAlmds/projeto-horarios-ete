import React from 'react';
import '../styles/Table.css';
import FormSelects from '../components/FormSelects';
import TableHorarios from '../components/TableHorarios';
import { getHorarioList } from '../services/horariosService';

const Home = () => {
  
  getHorarioList();

  return (
    <>
      <FormSelects 
        title='Selecione sua Turma'
      />
      <TableHorarios />
    </>
  )
};

export default Home;