import { createProviderConsumer } from '@stencil/state-tunnel';
import { h } from '@stencil/core';

export interface State {
  allUsers: string[];
  userDetails: any;
}

export default createProviderConsumer<State>(
  {
    allUsers: null,
    userDetails: null
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
  
);