import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

function RouterTabs() {
  const [tabsValue, setTabsValue] = useState<string>(ROUTES[0]);
  function onChange(e: React.SyntheticEvent, newValue: string) {
    setTabsValue(newValue);
  }
  return (
    <Tabs
      className={'tabs'}
      value={tabsValue}
      variant="fullWidth"
      onChange={onChange}
    >
      {ROUTES.map((route) => (
        <Tab
          key={route}
          label={route}
          component={Link}
          to={`/${route}`}
          className="tab"
          value={route}
        />
      ))}
    </Tabs>
  );
}

export default RouterTabs;
