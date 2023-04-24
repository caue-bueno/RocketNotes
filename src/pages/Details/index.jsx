import { Container, Links, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

            <h1>
              Introdução ao React
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Necessitatibus inventore nostrum quaerat ratione quas quae,
               asperiores nihil laudantium, vitae at suscipit consectetur 
               eius quis labore quibusdam aliquid autem pariatur nesciunt.
            </p>

          <Section title="Link úteis">
            <Links>
              <li><a href="#">http://rocketseat.com.br</a></li>
              <li><a href="#">http://rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>

  )
}