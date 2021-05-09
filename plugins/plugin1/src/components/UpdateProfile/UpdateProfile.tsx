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
import { useNavigate } from 'react-router';

export const UpdateProfile = () => {
  const navigate = useNavigate();
  let to = 'timeline';
  const isFirstTimeLogin = false;
  if(isFirstTimeLogin) {
    to = 'updateProfile';
  }
  navigate('timeline', { replace: true  })
  return (
    <Content>
      <ContentHeader title='Update Profile' />
      <Grid container spacing={3} direction="column">
        <Grid item>

        </Grid>
      </Grid>
    </Content>
  );
}
