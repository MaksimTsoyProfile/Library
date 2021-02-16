import React, { useState } from 'react';
import { TextField } from 'mui-rff';
import { Field, Form, useField } from 'react-final-form';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import AutocompleteContainer from './AutoCompleteContainer';

const SearchForm = () => {
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
      handleClose();
    } catch (e) {
      console.log('error');
    }
  };
  const genre = ['action', 'fantasy', 'drama'];
  return (
    <>
      <Button
        color="primary"
        variant="outlined"
        onClick={handleOpen}
      >
        {'Поиск книги'}
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
                Поиск книги
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="year"
                      label={'Введите год'}
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

export default SearchForm;
