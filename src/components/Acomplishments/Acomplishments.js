import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Photograhpy'},
  {  text: 'Powerlifting', },
  {  text: 'music & gaming', },
  {  text: 'Travelling', }
];

const Acomplishments = () => (
 <Section>
  <SectionTitle>Interests</SectionTitle>
  <Boxes>
    {data.map((card ,index)=>(
<Box key={index}>
  <BoxNum>{card.number}</BoxNum>
  <BoxText>{card.text}</BoxText>
</Box>
    ))}
  </Boxes>
 </Section>
);

export default Acomplishments;
