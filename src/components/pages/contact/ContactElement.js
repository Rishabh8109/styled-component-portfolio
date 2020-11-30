import styled from 'styled-components';

export const Input = styled.input`
    height: 60px;
    width:100%;
    border-style: solid;
    border-width: 1px;
    border-color: #dadada;
    border-radius: 10px;
    background-color: #fff;
    padding-left:1em;
    transition: box-shadow .2s cubic-bezier(.55, .055, .675, .19);
    font-family: Poppins, sans-serif;
    font-weight: 500;

    &:placeholder {
      font-size:13px;
    }

    &:focus {
      box-shadow: 4px 4px 10px 0 #c9c9c9;
     outline:none;
      border:1px solid #4169E1;
    }

    @media screen and (max-width:500px) {
      margin-bottom : 14px;
    }
`
export const TextArea = styled.textarea`
    height: 150px;
    width:100%;
    border-style: solid;
    border-width: 1px;
    border-color: #dadada;
    border-radius: 10px;
    background-color: #fff;
    padding-left:1em;
    transition: box-shadow .2s cubic-bezier(.55, .055, .675, .19);
    font-family: Poppins, sans-serif;
    font-weight: 500;

    &:placeholder {
      font-size:13px;
    }

    &:focus {
      box-shadow: 4px 4px 10px 0 #c9c9c9;
     outline:none;
      border:1px solid #4169E1;
    }
`
export const Button = styled.button`
    width: 180px;
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 8px;
    transition: background-color 400ms ease;
    background-color: indigo;
    color: white;
    font-family: 'Poppins' , monospace;
    border:none;

   &:hover {
     border:2px solid indigo;
     background:none;
     color:indigo;
   }
`
