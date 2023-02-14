import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Initial from './pages/Initial';
import Learn from './pages/Learn';
import UserPage from './pages/UserPage';
import { Container } from './components/Box.js'
import GlobalStyle from './globalStyles';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Option from './pages/Options';

import { UserProvider } from './contexts/UserContext';
import { ConfigProvider } from './contexts/ConfigContext';
import Soon from './pages/Soon';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <UserProvider>
        <ConfigProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/menu" element={<Initial />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/userpage" element={<UserPage />} />
              <Route path="/option" element={<Option />} />
              <Route path="/ranking" element={<Soon />} />
              <Route path="/historic" element={<Soon />} />
            </Routes>
          </Router>
          </ConfigProvider>
        </UserProvider>
      </Container>
    </>
  );
}

export default App;
