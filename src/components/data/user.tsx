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

class UserController {
  constructor() {}

  async getUserData() {
    const retrievedData = fetch('http://jsonplaceholder.typicode.com/users/')
      .then((response: Response) => response.json())
      .then(response => {
        return response;
    });
    return retrievedData;
  }

  handleChangeFromTunnel(event, tempName) {
    const dataVal = event.target.value;

    if (!dataVal) {
      return tempName;
    } else {
      const foundUsers = tempName.filter(user => {
        return user.name.toLowerCase().indexOf(dataVal.toLowerCase()) > -1;
      });
      return foundUsers;
    }
  }
}

export const allUserData = new UserController();