import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 19px;
    display: flex;
    flex-direction: row;
    align-items: center
  }

  h1 svg {
    margin-right: 10px;
  }
  `;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
      flex: 1;
      border: 1px solid ${props => (props.error ? '#FF0000' : '#eee')};
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 17px;
    }
  `;

//Button animation
const animate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
    background-color: #0D2636;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }

    ${props => props.loading &&
    css`
        svg {
          animation: ${animate} 2s linear infinite;
        }
      `
  }
  `;

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li {
      padding: 15px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      & + li {
        border-top: 1px solid #eee;
      }

      a {
        color: #0D2636;
        text-decoration: none;
      }

    }
  `;

export const DeleteButton = styled.button.attrs({
  type: 'button'
})`
    background: transparent;
    color: #0D2636;
    border: 0;
    padding: 8px 7px;
    outline: 0;
    border-radius: 4px;
  `;

export const AlertError = styled.div`
  text-align: center;
    margin-top: 10px;
    padding: 10px;
    background-color: #f8d7da;  
    color: #721c24; 
    border: 1px solid #f5c6cb;
    border-radius: 4px;
  `;