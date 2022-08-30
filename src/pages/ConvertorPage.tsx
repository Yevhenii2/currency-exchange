import { ChangeEventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ACTION_TYPES } from '../redux/reducers/UAHValueReducer';
import { ROUTES } from '../constants';

import { Card, CardContent, CardHeader, Stack, TextField } from '@mui/material';

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

type ConvertorProps = { currency: typeof ROUTES[number] };

function ConvertorPage({ currency }: ConvertorProps) {
  const ratesState = useSelector((state: RootState) => state.rates);
  const UAHAmount = useSelector((state: RootState) => state.UAHValue);
  const isMobile = useSelector((state: RootState) => state.isMobile);

  const dispatch = useDispatch();

  const [assetAmount, setAssetAmount] = useState(0);

  useEffect(() => {
    setAssetAmount(UAHAmount * ratesState.rates[currency]);
  }, [currency]);

  const onUAHChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newUAHValue = +e.currentTarget.value;
    if (isNaN(newUAHValue)) return;

    dispatch({ type: ACTION_TYPES.UPDATE_UAH_VALUE, payload: newUAHValue });
    setAssetAmount(newUAHValue * ratesState.rates[currency]);
  };
  return (
    <Card variant="outlined" style={{ marginTop: '1rem', padding: '1rem' }}>
      <CardHeader title={currency} className="card-header"></CardHeader>
      <CardContent>
        <Stack
          direction={isMobile ? 'row' : 'column'}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <TextField
            label="UAH"
            variant="outlined"
            value={UAHAmount}
            fullWidth
            onChange={onUAHChange}
          />
          {isMobile ? (
            <CurrencyExchangeIcon />
          ) : (
            <KeyboardDoubleArrowDownIcon />
          )}
          <TextField
            label={currency}
            variant="outlined"
            disabled
            fullWidth
            value={assetAmount.toFixed(2)}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ConvertorPage;
