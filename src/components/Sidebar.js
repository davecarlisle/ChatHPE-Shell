// SidebarExample.js
import React from 'react';
//import { ThemeContext } from 'styled-components';
import { Box, Button, Text, Nav} from 'grommet';
import { Sidebar } from 'grommet-controls';
import { Chat, Notes, DocumentTest } from 'grommet-icons';

const AppSidebar = () => {

  //const theme = useContext(ThemeContext);

  return (

    <Sidebar background="#FFFFFF" elevation="medium" 
             pad="5px" align="start"    
             title="Sessions" responsive={true}>
    
        <Text size="12pt" margin={{left: "20px"}}>Previous 7 days:</Text>

        <Nav gap="small">
          <Box align="start" pad="5px">
            <Button label={<Text size='small'>HPE servers</Text>} icon={<Chat />} hoverIndicator />
            <Button label={<Text size='small'>GenAI private cloud</Text>} icon={<Chat />} hoverIndicator />
            <Button label={<Text size='small'>Market reseach summary</Text>} icon={<Notes />} hoverIndicator />
            <Button label={<Text size='small'>RFP Q&A</Text>} icon={<DocumentTest />} hoverIndicator />
          </Box>
        </Nav>

    </Sidebar>

  );
};

export { AppSidebar as Sidebar };