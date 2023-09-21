import { Flex } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppContext } from './appState/context';
import { routes } from './constants';
import { mockFeed } from './mock';
import { Home } from './Routes/Home';
import { Login } from './Routes/Login';
import { Register } from './Routes/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const providerValue = useMemo(
    () => ({
      user: {
        name: userName,
        feed: mockFeed,
      },
      isLoggedIn: isLoggedIn,
      setIsLoggedIn,
      setUserName,
    }),
    [isLoggedIn, userName, setIsLoggedIn, setUserName]
  );

  return (
    <AppContext.Provider value={providerValue}>
      <Flex
        backgroundColor='#131319'
        width='100%'
        height='100%'
        color='white'
        justifyContent='center'
        fontFamily='Inter'
        overflowY='scroll'
        paddingBottom='12px'
      >
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route path='*' element={<Navigate to={routes.home} replace />} />
        </Routes>
      </Flex>
    </AppContext.Provider>
  );
}

export default App;
