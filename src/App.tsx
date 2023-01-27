import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Initial from './pages/Initial';
import Learn from './pages/Learn';
import UserPage from './pages/UserPage';
import {Container} from './components/Box.js'
import GlobalStyle from './globalStyles';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/learn"  element={<Learn />} />
          <Route path="/userpage"  element={<UserPage />} />
        </Routes>
      </Router>
      </Container>
    </>
  );
}

export default App;
