import styled from "styled-components";
const LoadingDots = () => (
  <span>
    <Dot>.</Dot>
    <Dot>.</Dot>
    <Dot>.</Dot>
  </span>
);

const Dot = styled.span`
  animation: loading-dots 1.5s infinite;
  display: inline-block;
  margin-left: 2px;
  margin-right: 2px;
  font-size: 1.2em;
  color: white;

  @keyframes loading-dots {
    0%, 20% {
      color: #97cba9;
    }
    40% {
      color: #97cba9;
    }
    60% {
      color: #97cba9;
    }
    80%, 100% {
      color: #97cba9;
    }
  }
`;


export default LoadingDots;