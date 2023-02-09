import React from 'react';
import '../styles/Table.css';
import FormSelects from '../components/FormSelects';
import TableHorarios from '../components/TableHorarios';

const HorarioProfessores = () => {
  
  return (
    <>
      <FormSelects 
        title='Selecione o Professor'
      />
      <TableHorarios />
    </>
  )
};

export default HorarioProfessores;