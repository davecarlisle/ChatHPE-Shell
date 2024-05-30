// SidebarExample.js
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Avatar, Box, Button, Text, Sidebar, Nav } from 'grommet';
import { Chat, Notes, DocumentTest, Calculator, Deliver, Nodes, Money, Support, Notification, Clock, Apps, Terminal, StatusUnknown, HelpOption } from 'grommet-icons';

const AppSidebar = () => {

  const theme = useContext(ThemeContext);

  return (
    <Sidebar background="#01A982" elevation="medium" pad="8px" align="start" responsive={true} 

        header={
          <Text size="18pt">Sessions</Text>
        }
        footer={
          <Text size="10pt">Powered by HPE IT</Text>
        }
    >
    
      <Nav gap="small">
        <Box align="start" pad="0px">
          <Text size="12pt">Previous 7 days:</Text>
          <Button label={<Text size='small'>HPE Servers</Text>} icon={<Chat />} hoverIndicator />
          <Button label={<Text size='small'>GenAI Private Cloud</Text>} icon={<Chat />} hoverIndicator />
          <Button label={<Text size='small'>Market reseach summary</Text>} icon={<Notes />} hoverIndicator />
          <Button label={<Text size='small'>RFP Q&A</Text>} icon={<DocumentTest />} hoverIndicator />
        </Box>
      </Nav>
    </Sidebar>




    // <Sidebar
    //   //background={{ color: !theme.dark ? 'background' : 'blue', dark: true }}
    //   //background="#00739D"
    //   background="brand"
    //   pad="small"
    //   flex={false}
    //   round="small"
    //   // height for demo purposes only, remove in production
    //   //height="large"
    // >
    //   <Avatar
    //     margin={{ bottom: 'medium' }}
    //     src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
    //   />
    //   <Box flex="grow" align="start">
    //     <Button align="start" label="Sales" a11yTitle="Clock" icon={<Clock />} />
    //     <Button align="start" label="Order Mgmt" a11yTitle="Order Mgmt" icon={<Apps />} />
    //     <Button align="start" label="Subscription Mgmt" a11yTitle="Subscription Mgmt" icon={<Terminal />} />
    //   </Box>
    //   <Box>
    //     <Button a11yTitle="Chat" icon={<Chat />} />
    //     <Button a11yTitle="Help" icon={<StatusUnknown />} />
    //   </Box>
    // </Sidebar>

  );
};

export { AppSidebar as Sidebar };