import React from 'react';
import FormSelects from '../components/FormSelects';
import TableHorarios from '../components/TableHorarios';

const HorarioProfessores = () => {
  
  return (
    <>
      <FormSelects 
        title='Selecione o Professor'
      />
      <TableHorarios 
        title="Horários dos Professores"
      />
    </>
  )
};

export default HorarioProfessores;