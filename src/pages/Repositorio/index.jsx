import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Owner, Loading, BackButton, IssuesList, PageActions, FilterActions } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';


const Repositorio = () => {
  // Using the useParams hook to access URL parameters
  const { repoName } = useParams();

  const [repositorio, setRepositoiro] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('open');

  useEffect(() => {
    async function load() {
      // Carregando o repositório e as issues simultaneamente
      setLoading(true); // Start loading
      try {
        const [repositorioData, issuesData] = await Promise.all([
          api.get(`/repos/${repoName}`),
          api.get(`/repos/${repoName}/issues`, {
            params: {
              state: filter,
              page,
              per_page: 5
            }
          })
        ]);

        setRepositoiro(repositorioData.data);
        setIssues(issuesData.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    load();
  }, [repoName, page, filter]); // Observe repoName, page and filter

  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleFilter(newFilter) {
    setFilter(newFilter);
    setPage(1);
  }

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30} />
      </BackButton>

      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>

      <FilterActions>
        <button type="button" onClick={() => handleFilter('open')} disabled={filter === 'open'}>
          Abertas
        </button>
        <button type="button" onClick={() => handleFilter('closed')} disabled={filter === 'closed'}>
          Fechadas
        </button>
        <button type="button" onClick={() => handleFilter('all')} disabled={filter === 'all'}>
          Todas
        </button>
      </FilterActions>

      <IssuesList>
        {issues.map((issue) => (
          <li key={issue.id}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a href={issue.html_url} target="_blank" rel="noopener noreferrer">{issue.title}</a>
                {issue.labels.map((label) => (
                  <span key={label.id}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button type="button" onClick={() => handlePage('back')} disabled={page < 2}>
          Voltar
        </button>
        <button type="button" onClick={() => handlePage('next')}>
          Próxima
        </button>
      </PageActions>
    </Container>
  );
};

export default Repositorio;
