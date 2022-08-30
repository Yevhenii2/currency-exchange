import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPES } from './redux/reducers/ratesReducer';
import { RootState } from './redux/store';

import { Card, CardHeader, Container, Stack } from '@mui/material';
import RouterTabs from './components/RouterTabs/RoutersTabs';
import ConvertorPage from './pages/ConvertorPage';

import ExchangeService from './services/ExchangeService';
import { abortController } from './axios';

import { ROUTES } from './constants';
import useWindowSize from './hooks/useWindowSize';

import './App.scss';

function App() {
  useWindowSize();

  const exchangeService = new ExchangeService();

  const ratesState = useSelector((state: RootState) => state.rates);
  const isMobile = useSelector((state: RootState) => state.isMobile);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    return function () {
      abortController.abort();
    };
  }, []);

  async function getData() {
    const rate = await exchangeService.getAllExhangeRates();

    if (rate.success) {
      dispatch({
        type: ACTION_TYPES.UPDATE_RATES,
        payload: rate,
      });
    }
    return rate;
  }

  return (
    <Container>
      <header>
        <Stack
          direction={isMobile ? 'row' : 'column'}
          justifyContent="space-between"
        >
          {ROUTES.map((route) => (
            <Card key={route}>
              <CardHeader
                title={route + ': ' + (1 / ratesState.rates[route]).toFixed(2)}
              ></CardHeader>
            </Card>
          ))}
        </Stack>
      </header>
      <BrowserRouter>
        <RouterTabs />
        <Routes>
          {ROUTES.map((route, index) => (
            <Route
              key={index}
              path={`/${route}`}
              element={<ConvertorPage currency={route} />}
            />
          ))}
          <Route path="*" element={<Navigate to={`/${ROUTES[0]}`} replace />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
