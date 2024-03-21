import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CssBaseline, Toolbar } from '@material-ui/core/';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    footer: {
      top: 'auto',
      bottom: 0,
      backgroundColor: 'transparent',
      marginTop: '2rem',
    },
    icon: {
      color: 'black'
    },
    grow: {
      flexGrow: 1,
    },
  }),
);

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid position="relative" color="primary" className={classes.footer}>
        <Toolbar>
            <div>
                <Typography variant="body1" color="black" gutterBottom>
                    2024 Mark Ohanesian
                </Typography>
            </div>
          <div className={classes.grow} />
          <IconButton className={classes.icon} href="https://github.com/markohanesian/git-cheatsheet-mso">
            <GitHubIcon/>
          </IconButton>
          <IconButton edge="end" className={classes.icon} href="mailto:mso872@gmail.com">
            <EmailIcon />
          </IconButton>
        </Toolbar>
      </Grid>
    </React.Fragment>
  );
}
