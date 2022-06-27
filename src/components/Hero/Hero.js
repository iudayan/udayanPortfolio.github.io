import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
<LeftSection>
  <SectionTitle>
    Welcome to <br />
    My Personal Portfolio
  </SectionTitle>
  <SectionText>

  </SectionText>
  <Button onClick={()=>window.location = "iamudayan.9@gmail.com"}>Learn More</Button>
</LeftSection>

</Section>
);

export default Hero;