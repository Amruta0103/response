
import './App.css';
import styled from 'styled-components';
import CardList from './components/cardList';

function App() {
  const App = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  `
  return (
    <App>
      <CardList/>
    </App>
  );
}

export default App;
