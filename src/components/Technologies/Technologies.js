import React from 'react';
import { DiFirebase, DiGit, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
<SectionDivider/>
<SectionTitle>Technologies</SectionTitle>
<SectionText>I have worked with a range of Technologies in the web developmen world.
From front end to Backend.</SectionText>
<List>
<ListItem>
    <DiPython size="3rem" />
    <ListContainer>
      <ListTitle>Languages</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Python and C++
        </ListParagraph>
      
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Html,Css ,Javascript and React.Js
        </ListParagraph>
      
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Node.Js and Databases
        </ListParagraph>
      
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiGit size="3rem" />
    <ListContainer>
      <ListTitle>Tools</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Git and Burpsuite
        </ListParagraph>
      
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;
