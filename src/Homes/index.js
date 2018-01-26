import React from 'react';
import { Route } from 'react-router-dom';

import List from './List';
import Show from './Show';

export default function () {
  return (
    <div>
      <Route exact path="/homes" component={List} />
      <Route exact path="/homes/:id" component={Show} />
    </div>
  );
}
