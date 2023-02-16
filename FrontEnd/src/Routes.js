import { Route, Routes } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import HorarioProfessores from "./pages/HorarioProfessores";
import HorarioRefeicoes from "./pages/HorarioRefeicoes";
import Cardapio from "./pages/Cardapio";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/horarioProfessores" element={<HorarioProfessores />} />
      <Route path= "/horarioRefeicoes" element={<HorarioRefeicoes />} />
      <Route path="/cardapio" element={<Cardapio />} />
    </Routes>
  )
};

export default AppRoutes;