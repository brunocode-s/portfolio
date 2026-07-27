"use client";

import styled, { keyframes } from "styled-components";
import { Github, Linkedin, Mail, Download } from "lucide-react";

/* === Animations === */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* === Styled Components === */
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: linear-gradient(to bottom right, var(--color-primary-50), white);
`;

const Container = styled.div`
  max-width: 1280px;
  padding: 4rem 1rem;
  text-align: center;
`;

const Content = styled.div`
  animation: ${fadeIn} 1s ease-out forwards;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }

  span {
    color: var(--color-primary-600);
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  background: var(--color-primary-600);
  color: #4b5563;
  padding: 0.75rem 2rem;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  transform: translateZ(0);

  &:hover {
    border: 2px solid var(--color-primary-600);
    background: var(--color-primary-700);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }
`;

const OutlineButton = styled.a`
  border: 2px solid var(--color-primary-600);
  color: var(--color-primary-600);
  padding: 0.75rem 2rem;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  transform: translateZ(0);

  &:hover {
    background: var(--color-primary-600);
    color: #4b5563;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: #4b5563;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary-600);
  }
`;

/* === Component === */
const Hero = () => {
  return (
    <Section className="diagonal-split">
      <Container>
        <Content className="adaptive-tex">
          <Title>
            Hi, I&apos;m <span>Alain Bruno</span>
          </Title>
          <Subtitle>
            A FRONT-END Developer creating amazing web experiences with modern
            technologies and clean code.
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton href="#contact">
              <Mail size={20} />
              Get In Touch
            </PrimaryButton>
            <OutlineButton href="/assets/ALAINresume.pdf">
              <Download size={20} />
              Download Resume
            </OutlineButton>
          </ButtonGroup>
          <SocialLinks>
            <SocialLink
              href="https://github.com/brunocode-s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/bruno-alain-269143266"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </SocialLink>
            <SocialLink href="mailto:alainbrunoofficial@gmail.com">
              <Mail size={24} />
            </SocialLink>
          </SocialLinks>
        </Content>
      </Container>
    </Section>
  );
};

export default Hero;
