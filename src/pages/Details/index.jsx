import { Container, Links, Content } from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  async function handleDelete() {
    const confirm = window.confirm("Deseja realmente exluir essa nota?");
    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      handleBack();
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText
              title="Excluir nota"
              onClick={() => handleDelete(params.id)}
            />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>
            {data.links &&
              <Section title="Link úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>

                        <a href={link.url} target='blank'>
                          {link.url}
                        </a>
                      </li>
                    ))


                  }

                </Links>
              </Section>
            }

            {data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name} />
                  ))
                }
              </Section>
            }
            <Button
              title="Voltar"
              onClick={handleBack}
            />
          </Content>
        </main>
      }

    </Container>

  )
}