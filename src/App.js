import Top from 'Sections/0_Top';
import About from 'Sections/1_About';
import How from 'Sections/2_How';
import Benefits from 'Sections/3_Benefits';
import Team from 'Sections/4_Team';
import Roadmap from 'Sections/5_Roadmap';
import Faq from 'Sections/6_Faq';
import Bottom from 'Sections/7_Bottom';

import 'App.css';
import 'Fonts.css';

function App() {
  return (
    <div>
      <Top/>
      <About/>
      <How/>
      <Benefits/>
      <Team/>
      <Roadmap/>
      <Faq/>
      <Bottom/>
    </div>
  );
}

export default App;
