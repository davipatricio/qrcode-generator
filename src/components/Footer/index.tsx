import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Icons } from './styled';

const IconLink = ({ icon, url }: { icon: JSX.Element; url: string }) => (
  <a href={url} rel="noreferrer" target="_blank">
    {icon}
  </a>
);

export default function Footer() {
  return (
    <Container>
      <span>Created by Davi Patricio.</span>

      <Icons>
        <IconLink icon={<FaGithub />} url="https://github.com/davipatricio" />
        <IconLink
          icon={<FaLinkedin />}
          url="https://www.linkedin.com/in/davipatricio/"
        />
      </Icons>
    </Container>
  );
}
