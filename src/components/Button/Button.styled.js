import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  padding: 10px 20px;
  gap: 6px;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: var(--primary);
  background: var(--second);
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  &[data-is-add='true'] {
    background: var(--active);
  }
  &[data-visible='false'] {
    display: none;
  }

  cursor: pointer;
  :hover {
    background: var(--shadow);
  }
  :disabled {
    display: none;
  }
`;
