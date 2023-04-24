import { Container } from "./styles";

export function ButtonText ({ title, isActive = false, loading, ...rest }) {
  return (
    <Container 
      type="button"
      isActive={isActive}
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}