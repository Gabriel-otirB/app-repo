import { useState, useCallback, useEffect } from 'react';
import { Container, Form, SubmitButton, List, DeleteButton, AlertError } from './styles.js';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api.js';

const Main = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // DidMount // Buscar
  useEffect(() => {
    const repoStorage = localStorage.getItem('repos');

    if (repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    }

  }, []); // Apenas na montagem do componente

  // DidUpdate // Salvar alterações
  useEffect(() => {
    if (repositorios.length) {
      localStorage.setItem('repos', JSON.stringify(repositorios));
    } else {
      // Se o estado estiver vazio, remover o item do localStorage
      localStorage.removeItem('repos');
    }
  }, [repositorios]); // Monitorando mudanças no estado

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    async function submit() {
      setLoading(true);
      setAlert(null);
      try {
        if (newRepo.trim() === '') {
          throw new Error('Você precisa indicar um repositório!');
        }

        const response = await api.get(`repos/${newRepo}`);

        const hasRepo = repositorios.find(r => r.name === newRepo);

        if (hasRepo) {
          throw new Error('Repositório Duplicado');
        }

        const data = {
          name: response.data.full_name,
        };

        setRepositorios(prevRepos => [...prevRepos, data]);
        setNewRepo('');
      } catch (error) {
        if (error.isAxiosError) {
          if (error.response && error.response.status === 404) {
            setAlert('Repositório não encontrado!');
          } else {
            setAlert(error.message);
          }
        } else {
          setAlert(error.message);
        }

        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    submit();

  }, [newRepo, repositorios]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setAlert(null);
  }

  const handleDelete = useCallback((repo) => {
    setRepositorios(prevRepos => prevRepos.filter(r => r.name !== repo));
  }, []);

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit} error={alert}>
        <input
          type="text"
          placeholder="Adicionar Repositorios"
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      {alert && <AlertError>{alert}</AlertError>}

      <List>
        {repositorios.map(repo => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Main;
