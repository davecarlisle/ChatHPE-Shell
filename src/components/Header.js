import React, { useContext, useState } from 'react';
import { Box, Button, Header, Text, Menu, Nav, ResponsiveContext, Tip } from 'grommet';
import { Hpe as HpeIcon, Slack as SlackIcon, User as UserIcon } from 'grommet-icons';

function goNav(url) {
  window.parent.location.href = url;
}

const items = [
  { label: 'AI Chat', 
    onClick: () => { goNav('/') } ,
    tooltip: "Go to AI Chat..." 
  },
  { label: 'Doc Q&A', 
    onClick: () => { goNav('/') } ,
    tooltip: "Go to document app..." 
  },  
  { label: 'Doc Summary', 
    onClick: () => { goNav('/') } ,
    tooltip: "Go to document Q&A app..." 
  },    
  { label: 'Guides', 
    onClick: () => { goNav('/') } ,
    tooltip: 'View ChatHPE guides...' 
  },    
  { 
    icon: (<SlackIcon color="plain" size="medium" />),
    onClick: () => { goNav('slack://channel?team=E01LD9FH0JZ&id=C075335V55E') } ,
    tooltip: 'ChatHPE Slack Community...' 
  },
  { 
    icon: (<UserIcon size="medium" />),
    onClick: () => { goNav('/') } ,
    tooltip: 'User profile...' 
  },  
];

const AppHeader = () => {

  const size = useContext(ResponsiveContext);
  const [focused] = useState(false);
  //const [focused, setFocused] = useState(false);


  return (
    <Header fill="horizontal" pad={{ horizontal: 'medium' }} background="background-front">
      <Tip content="Chat HPE home...">
        <Button onClick={() => { goNav("/"); }}>
          <Box direction="row" align="start" gap="medium" pad={{ vertical: 'small' }} responsive={false}>
            <Box height="24px" justify="center">
              <HpeIcon color="brand"/>
            </Box>
            {(!['xsmall', 'small'].includes(size) ||
              (['xsmall', 'small'].includes(size) && !focused)) && (
              <Box direction="row" gap="xsmall">
                <Text color="text-strong" weight="bold">HPE</Text>
                <Text color="text-strong">ChatHPE</Text>
              </Box>
            )}
          </Box>
        </Button>
      </Tip>

      {!['xsmall', 'small'].includes(size) ? (
        <Nav direction="row" gap="small">
          {items.map(item => (
            <Tip content={item.tooltip}>
              <Button label={item.label}
                      icon={item.icon}
                      key={item.label} 
                      onClick={item.onClick}
                      size="small"/>
            </Tip>  
          ))}
        </Nav>
      ) : (
        <Menu label="Menu" items={items} /> 
      )}
    </Header>
  );
};

export { AppHeader as Header };
