import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { values } from 'lodash';
import { SetMealSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  status: {
    color: 'red',
    alignItems: 'left'
  }
}));

const Register = () => {
  const classes = useStyles();
  Axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [account_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordConfirm] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const submitRegister = () => {
    Axios.post('http://localhost:5000/api/register', {
      account_name: account_name,
      email: email,
      password: password
    })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          console.log(response.data.message);
        }
        if (!response.data.message) {
          window.sessionStorage.setItem('email', email);
          navigate('/app/dashboard', { replace: true });
          setLoginStatus('Success the account has been registered');
        }
      })
      .catch(function (error) {   
          setLoginStatus('Email Already in Use');
      });
  };

  const handleNameChange = (e) => {
    console.log('Typed = ${e.target.value}');
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log('Typed = ${e.target.value}');
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    console.log('Typed = ${e.target.value}');
    setPassword(e.target.value);
  };
  const handlePassConfChange = (e) => {
    console.log('Typed = ${e.target.value}');
    setPasswordConfirm(e.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
        className={classes.image}
      >
        <Container
          maxWidth="sm"
          maxWidth="sm"
          sx={{
            backgroundColor: 'background.default',
            minHeight: '50%',
            py: 3
          }}
        >
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
              policy: false
            }}
            onSubmit={submitRegister}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                  <h2 className="error">{loginStatus} </h2>
                </Box>
                <TextField
                  error={Boolean(touched.account_name && errors.account_name)}
                  fullWidth
                  helperText={touched.account_name && errors.account_name}
                  //nameval = {nameval}
                  onChange={handleNameChange}
                  //namevalue = {namevalue}
                  variant="outlined"
                  label="Account Name"
                  margin="normal"
                  name="account_name"
                  type="name"
                  onBlur={handleBlur}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleEmailChange}
                  type="email"
                  //value={email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handlePassChange}
                  type="password"
                  //value={values.password}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    touched.passwordconfirm && errors.passwordconfirm
                  )}
                  fullWidth
                  helperText={touched.passwordconfirm && errors.passwordconfirm}
                  label="Confirm Password"
                  margin="normal"
                  name="passwordconfirm"
                  onBlur={handleBlur}
                  onChange={handlePassConfChange}
                  //setPasswordConfirm = {onChange}
                  type="password"
                  //value={values.passwordconfirm}
                  variant="outlined"
                />
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1
                  }}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography color="textSecondary" variant="body1">
                    I have read the{' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>{errors.policy}</FormHelperText>
                )}
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={submitRegister}
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Have an account?{' '}
                  <Link component={RouterLink} to="/login" variant="h6">
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
