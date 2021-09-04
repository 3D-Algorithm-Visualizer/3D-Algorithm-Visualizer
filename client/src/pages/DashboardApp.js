// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppPFAlgorithms,
  AppDataStructures,
  AppSortingAlgorithms,
  AppTotalBlogs
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppSortingAlgorithms />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppPFAlgorithms />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppDataStructures />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTotalBlogs />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
