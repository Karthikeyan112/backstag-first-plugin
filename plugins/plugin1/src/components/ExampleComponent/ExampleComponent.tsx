import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { UpdateProfile } from '../UpdateProfile';
import { Route, Routes } from 'react-router-dom';

export const ExampleComponent = () => {
  // let history = useLocation(); 
  // const navigate = useNavigate();
  let to = 'timeline';
  const isFirstTimeLogin = false;
  if(isFirstTimeLogin) {
    to = 'updateProfile';
  }
  // history.
  // navigate(to, { replace: false  })
  return (
  <Page themeId="tool">
    <Header title="Developer Community!" />
    <Routes>
      <Route path="/" />
      <Route path="/timeline" />
      <Route path="/updateProfile" element={<UpdateProfile />} />
    </Routes>
  </Page>
);
}
