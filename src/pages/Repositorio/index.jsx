import { useParams } from 'react-router-dom';

const Repositorio = () => {
  // Using the useParams hook to access URL parameters
  const { repositorio } = useParams();

  return (
    <h1>REPOSITORIO FOI RENDERIZADO: {repositorio}</h1>
  );
}

export default Repositorio;
