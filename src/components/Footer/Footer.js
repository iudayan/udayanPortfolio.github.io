import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { ListItem } from '../Technologies/TechnologiesStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <ListItem href="tel:+91 8826241172">+91 8826241172</ListItem>
</LinkColumn>
 <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <ListItem href="Mailtp:iamudayan.9@gmail.com">iamudayan.9@gmail.com</ListItem>
</LinkColumn>
    </LinkList>
  </FooterWrapper>
  );
};

export default Footer;
