import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Field, Form } from 'react-final-form';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { TextField } from 'mui-rff';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      console.log(values);
      handleClose();
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <>
      <Button
        color="primary"
        variant="outlined"
        onClick={handleOpen}
      >
        {'Регистрация'}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <Form
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit: onSubmit,
            submitting,
            pristine,
          }) => (
            <form onSubmit={onSubmit}>
              <DialogTitle>
                Регистрация
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <TextField
                      name="name"
                      label={'Введите имя'}
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      name="password"
                      label={'Введите пароль'}
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button variant="text" color="primary" type="submit" disabled={submitting || pristine}>
                  {'Добавить'}
                </Button>
              </DialogActions>
            </form>
          )}
        </Form>
      </Dialog>
    </>
  );
};

export default RegistrationForm;
