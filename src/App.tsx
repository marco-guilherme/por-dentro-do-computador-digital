import { Provider } from 'react-redux';
import { HashRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { ASCIITable } from './components/ASCIITable';
import { Content } from './components/Content';
import { Home } from './components/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import './styles/App.scss';
import { store } from './store';
import { WhatIsElectronics } from './pages/digital-electronics/about-electronics/WhatIsElectronics';
import { WhyLearnElectronics } from './pages/digital-electronics/about-electronics/WhyLearnElectronics';
import { AndGate } from './pages/digital-electronics/logic-gates/AndGate';
import { PageNotFound } from './pages/PageNotFound';
import { LogicGates } from './pages/digital-electronics/logic-gates/LogicGates';
import { OrGate } from './pages/digital-electronics/logic-gates/OrGate';
import { NotGate } from './pages/digital-electronics/logic-gates/NotGate';
import { XorGate } from './pages/digital-electronics/logic-gates/XorGate';
import { XnorGate } from './pages/digital-electronics/logic-gates/XnorGate';
import { NandGate } from './pages/digital-electronics/logic-gates/NandGate';
import { NorGate } from './pages/digital-electronics/logic-gates/NorGate';
import { ProgrammingLanguages } from './pages/assembly-language/ProgrammingLanguages';
import { AnalogueElectronics } from './pages/digital-electronics/about-electronics/AnalogueElectronics';
import { DigitalElectronics } from './pages/digital-electronics/about-electronics/DigitalElectronics';
import { AssemblyLanguage } from './pages/assembly-language/AssemblyLanguage';
import { Datasheets } from './pages/digital-electronics/about-electronics/Datasheets';
import { ElectronicComponents } from './pages/digital-electronics/about-electronics/ElectronicComponents';
import { Voltage } from './pages/digital-electronics/review-of-basic-concepts/Voltage';
import { Current } from './pages/digital-electronics/review-of-basic-concepts/Current';
import { Resistance } from './pages/digital-electronics/review-of-basic-concepts/Resistance';
import { Power } from './pages/digital-electronics/review-of-basic-concepts/Power';
import { Circuits } from './pages/digital-electronics/review-of-basic-concepts/Circuits';
import { ArithmeticCircuits } from './pages/digital-electronics/arithmetic-circuits/ArithmeticCircuits';
import { HalfAdder } from './pages/digital-electronics/arithmetic-circuits/HalfAdder';
import { NumeralSystem } from './pages/digital-electronics/numeral-system/NumeralSystem';
import { FlipFlopsAndLatches } from './pages/digital-electronics/flip-flops-and-latches/FlipFlopsAndLatches';
import { AssemblyOrAssembler } from './pages/assembly-language/AssemblyOrAssembler';
import { Counters } from './pages/digital-electronics/Counters';
import { BinaryToDecimal } from './pages/digital-electronics/conversion-between-number-systems-and-codes/BinaryToDecimal';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Navigate to="/inicio" />} />

            <Route path="/inicio" element={<Home />} />

            <Route path="/aulas" element={<Outlet />}>
              <Route index element={<Content />} />

              <Route path="eletronica-digital" element={<Outlet />}>
                <Route path="sobre-eletronica" element={<Outlet />}>
                  <Route
                    path="o-que-e-eletronica"
                    element={<WhatIsElectronics />}
                  />

                  <Route
                    path="por-que-aprender-eletronica"
                    element={<WhyLearnElectronics />}
                  />

                  <Route
                    path="eletronica-analogica"
                    element={<AnalogueElectronics />}
                  />

                  <Route
                    path="eletronica-digital"
                    element={<DigitalElectronics />}
                  />

                  <Route
                    path="componentes-eletronicos"
                    element={<ElectronicComponents />}
                  />

                  <Route path="datasheets" element={<Datasheets />} />
                </Route>

                <Route path="revisao-de-conceitos-basicos" element={<Outlet />}>
                  <Route path="tensao" element={<Voltage />} />

                  <Route path="corrente" element={<Current />} />

                  <Route path="resistencia" element={<Resistance />} />

                  <Route path="potencia" element={<Power />} />

                  <Route path="circuitos" element={<Circuits />} />
                </Route>

                <Route
                  path="sistemas-de-numeracao-e-codigos"
                  element={<Outlet />}
                >
                  <Route
                    path="sistemas-de-numeracao"
                    element={<NumeralSystem />}
                  />
                </Route>

                <Route
                  path="conversao-entre-sistemas-de-numeracao-e-codigos"
                  element={<Outlet />}
                >
                  <Route
                    path="binario-para-decimal"
                    element={<BinaryToDecimal />}
                  />
                </Route>

                <Route path="portas-logicas" element={<Outlet />}>
                  <Route index element={<LogicGates />} />

                  <Route path="porta-and" element={<AndGate />} />

                  <Route path="porta-or" element={<OrGate />} />

                  <Route path="porta-not" element={<NotGate />} />

                  <Route path="porta-xor" element={<XorGate />} />

                  <Route path="porta-xnor" element={<XnorGate />} />

                  <Route path="porta-nand" element={<NandGate />} />

                  <Route path="porta-nor" element={<NorGate />} />
                </Route>

                <Route path="circuitos-aritmeticos" element={<Outlet />}>
                  <Route
                    path="circuitos-aritmeticos"
                    element={<ArithmeticCircuits />}
                  />

                  <Route path="meio-somador" element={<HalfAdder />} />
                </Route>

                <Route path="flip-flops-e-latches" element={<Outlet />}>
                  <Route
                    path="flip-flops-e-latches"
                    element={<FlipFlopsAndLatches />}
                  />
                </Route>

                <Route path="contadores" element={<Counters />} />
              </Route>

              <Route path="linguagem-assembly" element={<Outlet />}>
                <Route
                  path="linguagens-de-programacao"
                  element={<ProgrammingLanguages />}
                />

                <Route
                  path="linguagem-assembly"
                  element={<AssemblyLanguage />}
                />

                <Route
                  path="assembly-ou-assembler"
                  element={<AssemblyOrAssembler />}
                />
              </Route>
            </Route>

            <Route path="/ascii" element={<ASCIITable />} />

            <Route path="/sobre" element={<About />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
};

export default App;
