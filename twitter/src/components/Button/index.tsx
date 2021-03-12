import styled from 'styled-components'

interface Props {
  outlined?: boolean
}

export default styled.button<Props>`
  background: ${(props) =>
    props.outlined
      ? 'transparent'
      : '${({ theme }) => theme.colors.twitter}'};
  color: ${(props) =>
    props.outlined
      ? '${({ theme }) => theme.colors.twitter}'
      : '${({ theme }) => theme.colors.white}'};
  border: ${(props) =>
    props.outlined
      ? '1px solid ${({ theme }) => theme.colors.twitter}'
      : 'none'};
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  &:hover {
    background: ${(props) =>
      props.outlined
        ? '${({ theme }) => theme.colors.twitter_dark_hover}'
        : '${({ theme }) => theme.colors.twitter_light_hover}'};
  }
`
