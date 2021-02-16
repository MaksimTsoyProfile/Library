import React, { useMemo, useState } from 'react';
import { Dialog, DialogContentText } from './Dialog';
import Button from './Button';

const App = () => {
  const [open, setOpen] = useState(false);
  const btns = useMemo(() => [
    {
      type: 'button', variant: 'danger', action: () => setOpen(false), text: 'Close', id: 1,
    },
    {
      type: 'button', variant: 'success', action: () => setOpen(false), text: 'Accept', id: 2,
    },
    {
      type: 'button', variant: 'info', action: () => setOpen(false), text: 'Get Info', id: 3,
    },
  ], []);
  return (
    <div>
      <Button
        type="button"
        variant="info"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={(e) => {
          e.preventDefault();
          setOpen(false);
        }}
        title="My Dialog!"
        actionButtons={btns}
      >
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quidem!
        </DialogContentText>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quidem!
        </DialogContentText>
      </Dialog>
    </div>
  );
};

export default App;
