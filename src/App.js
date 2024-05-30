import { Grommet, Box } from 'grommet'
import { hpe } from 'grommet-theme-hpe';
import { Header, Sidebar, Main, Footer } from './components';
import React from "react";

function App() {

  // const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Grommet className="App" theme={hpe} full>

      <Box fill> {/* new box */}

        <Box elevation="medium">
           <Header />
        </Box>

        <Box direction='row' flex>
            <Sidebar />
            <Main />
        </Box>

        <Box elevation="medium">
          <Footer />
        </Box>

      </Box>

    </Grommet>
  );
}

export default App;
