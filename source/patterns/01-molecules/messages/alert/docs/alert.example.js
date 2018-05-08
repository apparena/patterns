import React from 'react';
import { Alert } from 'apparena-patterns-react';

export default function AlertExample() {
  return (
    <div>
      <Alert
        type="success"
      >
        Type: <strong>success</strong>
      </Alert>
      <Alert
        type="info"
      >
        Type: <strong>info</strong>
      </Alert>
      <Alert
        type="warning"
      >
        Type: <strong>warning</strong>
      </Alert>
      <Alert
        type="danger"
      >
        Type: <strong>danger</strong>
      </Alert>

      <hr />
      <Alert
        type="info"
        dismissible
      >
        Dismissable
      </Alert>
      <Alert
        type="success"
      >
        <h4>Huge Alert!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque cupiditate delectus dolor doloribus ea exercitationem fugit id labore magnam maxime nisi non, perferendis quas, quo unde ut veniam voluptates.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque cupiditate delectus dolor doloribus ea exercitationem fugit id labore magnam maxime nisi non, perferendis quas, quo unde ut veniam voluptates.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque cupiditate delectus dolor doloribus ea exercitationem fugit id labore magnam maxime nisi non, perferendis quas, quo unde ut veniam voluptates.
        </p>
      </Alert>

    </div>
  );
}
