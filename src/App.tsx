import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Butique from './pages/Butique';
import PiTeni from './pages/Butique/PiTeni';
import PiDin from './pages/Butique/PiDin';
import PiSau from './pages/Butique/PiSau';
import PiSofia from './pages/Butique/PiSofia';
import PiLin from './pages/Butique/PiLin';
import Pistilo from './pages/Butique/Pistilo';
import PiMor from './pages/Butique/PiMor';
import Sobre from './pages/Sobre';
import Mim from './pages/Sobre/Mim';
import Etica from './pages/Sobre/Etica';
import Marca from './pages/Sobre/Marca';
import Diario from './pages/Sobre/Diario';
import Juridico from './pages/Sobre/Juridico';
import Contato from './pages/Sobre/Contato';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="butique">
              <Route index element={<Butique />} />
              <Route path="piteni" element={<PiTeni />} />
              <Route path="pidin" element={<PiDin />} />
              <Route path="pisau" element={<PiSau />} />
              <Route path="pisofia" element={<PiSofia />} />
              <Route path="pilin" element={<PiLin />} />
              <Route path="pistilo" element={<Pistilo />} />
              <Route path="pimor" element={<PiMor />} />
            </Route>
            <Route path="sobre">
              <Route index element={<Sobre />} />
              <Route path="mim" element={<Mim />} />
              <Route path="etica" element={<Etica />} />
              <Route path="marca" element={<Marca />} />
              <Route path="diario" element={<Diario />} />
              <Route path="juridico" element={<Juridico />} />
              <Route path="contato" element={<Contato />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
