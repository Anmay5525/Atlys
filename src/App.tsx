import { Flex } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppContext } from './appState/context';
import { routes } from './constants';
import { Home } from './Routes/Home';
import { Login } from './Routes/Login';
import UserOne from './assets/user_1_thumbnail.svg';
import UserTwo from './assets/user_2_thumbnail.svg';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const providerValue = useMemo(
    () => ({
      user: {
        name: userName,
        feed: [
          {
            userName: 'Theresa Webb',
            postedAt: Date.now(),
            description:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            comments: ['world', 'hello'],
            editedAt: 0,
            emoji: `👋`,
            image: UserOne,
          },
          {
            userName: 'Marvin McKinney',
            postedAt: Date.now(),
            description:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            comments: ['world'],
            editedAt: 83478487378,
            emoji: `😞`,
            image: UserTwo,
          },
        ],
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
      >
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path='*' element={<Navigate to={routes.home} replace />} />
        </Routes>
      </Flex>
    </AppContext.Provider>
  );
}

export default App;
