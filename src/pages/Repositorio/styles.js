import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
`;

export const FilterActions = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;

  button{
  margin: 10px 5px;
  padding: 5px 5px;
  outline: 0;
  border: 0;
  background-color: #222;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background-color: #0071db;
  }

  &:disabled{
    background-color: #0071db;
    opacity: 50%;
    cursor: not-allowed;
  }

  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 20%;
    margin: 20px 0;
  }

  h1 {
    font-size: 30px;
    color: #0D2636;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background-color: transparent;
`;

export const IssuesList = styled.ul`
  padding-top: 15px;
  padding-bottom: 10px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;

    & + li {
    border-top: 1px solid #eee;
  }

  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #0D2636;
  }

  div {
    flex: 1;
    margin-left: 12px;

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #000;
    }
  }

  strong {
    font-size: 15px;

    a {
      text-decoration: none;
      color: #222;
      transition: all 0.3s;

      &:hover {
        color: #0071db;
      }
    }

    span {
      background-color: #222;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 7px;
      margin-left: 10px;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    outline: 0;
    border: 0;
    background-color: #222;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;

    &:disabled{
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;