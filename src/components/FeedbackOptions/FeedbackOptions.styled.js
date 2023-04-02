import styled from "styled-components";

export const ButtonFeedback = styled.button`
margin:10px;
vertical-align: middle;
font-weight: 600;
font-size: 16px;
width: 90px;
border: 1px black solid;
border-radius:5px;
cursor:pointer;
background-color: transparant;
transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);


&:hover,
&:focus{
background-color: #006CB5;
}`;
