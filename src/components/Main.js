import React from 'react';
//import styled from 'styled-components';
import { Box, Text, Footer, TextInput } from 'grommet';
import { Hpe as HpeIcon, Send as SendIcon } from 'grommet-icons';

const MainPage = () => {

  const [value, setValue] = React.useState('');
  //const size = useContext(ResponsiveContext);
  //const [focused] = useState(false);
  //const [focused, setFocused] = useState(false);

  return (

    <Box background="background-back" elevation="medium" flex>

        <Box flex justify="center">

          <Box direction="row" justify="center">
            <HpeIcon color="brand" alignSelf="center"/>
          </Box>  

          <Box direction="row" justify="center">
            <Text size="20pt" alignSelf="center" style={{fontWeight: 'bold'}}>How can ChatHPE help you today?</Text>
          </Box>  

          <Box direction="row" justify="center" margin={{ top: "15px", bottom: "5px", left: "40px", right: "40px" }}>
            <TextInput
                placeholder="Message ChatHPE..."
                icon={<SendIcon id="send-icon" />}
                reverse
                value={value}
                onChange={event => setValue(event.target.value)}
            />
          </Box>  

          <Box direction="row" justify="center">
            <Text size="10pt">AI-Generated content may be inaccurate.</Text>
          </Box>  

        </Box>         

        <Footer pad="xsmall" justify="center">
            <Text size="11pt" style={{fontStyle: 'italic', fontWeight: 'bold'}}>Powered by HPE IT & PCAI</Text>
        </Footer>

    </Box>


  );
};

export { MainPage as Main };

