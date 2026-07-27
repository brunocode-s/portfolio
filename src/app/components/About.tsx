'use client'

import Image from 'next/image'
import styled from 'styled-components'

/* === Styled Components === */
const Section = styled.section`
  padding: 5rem 0;
  background: white;
`

const Container = styled.div`
  max-width: 1280px;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Title = styled.h2`
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem; /* text-4xl */
  }
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 640px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Paragraph = styled.p`
  color: #374151;
  line-height: 1.75;
`

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const Badge = styled.div`
  background: var(--color-primary-50);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  span {
    color: var(--color-primary-700);
    font-weight: 500;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ProfileCircle = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  background: linear-gradient(to bottom right, var(--color-primary-200), var(--color-primary-400));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerCircle = styled.div`
  width: 18rem;
  height: 18rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileImage = styled(Image)`
  border-radius: 6rem;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`

/* === Component === */
const About = () => {
  return (
    <Section id="about">
      <Container>
        <Header>
          <Title>About Me</Title>
          <Subtitle>
            I&apos;m a passionate developer with expertise in modern web technologies
          </Subtitle>
        </Header>

        <Grid>
          <TextBlock>
            <Paragraph>
              With over 3 years of experience in web development, I specialize in creating 
              scalable, user-friendly applications using cutting-edge technologies. My journey 
              began with getting a Computer Science degree and has evolved through hands-on experience 
              with various frameworks and tools.
            </Paragraph>
            <Paragraph>
              I&apos;m passionate about clean code, performance optimization, and creating 
              seamless user experiences. When I&apos;m not coding, you&apos;ll find me exploring 
              new technologies, contributing to open-source projects, or sharing knowledge 
              with the developer community.
            </Paragraph>
            <BadgeContainer>
              <Badge>
                <span>3+ Years Experience</span>
              </Badge>
              <Badge>
                <span>20+ Projects Completed</span>
              </Badge>
            </BadgeContainer>
          </TextBlock>

          <ImageWrapper>
            <ProfileCircle>
              <InnerCircle>
                <ProfileImage
                  src="/assets/my_profile.jpeg"
                  alt="Profile Picture"
                  width={280}
                  height={150}
                />
              </InnerCircle>
            </ProfileCircle>
          </ImageWrapper>
        </Grid>
      </Container>
    </Section>
  )
}

export default About
