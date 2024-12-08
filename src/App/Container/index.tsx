import { ContainerBody, ContainerElement } from "./styled";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => (
  <ContainerBody>
    <ContainerElement>{children}</ContainerElement>
  </ContainerBody>
);

export default Container;
