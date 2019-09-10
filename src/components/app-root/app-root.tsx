import { Component, h, State } from '@stencil/core';
import Tunnel from '../data/user';
import { allUserData } from '../data/user';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() name;
  @State() tempName;
  @State() dataVal: string;

  async componentWillLoad() {
    const retrievedData = await allUserData.getUserData();
    this.name = retrievedData;
    this.tempName = retrievedData;
    console.log(this.tempName, ' retrieve data');
  };


  render() {

    const state = {
      allUsers: this.name,
      userDetails: {
        name: '',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zip: ''
        },
        phone: '',
        website: '',
        company: {
          name: '',
          catchPhrase: ''
        }
      }
    };

    const handleChange = event => {
      const foundUsers = allUserData.handleChangeFromTunnel(event, this.tempName);
      this.name = foundUsers;
      console.log(foundUsers, ' found users');
    };

    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <Tunnel.Provider state={state}>
            <app-user-search-bar 
              handleChange={handleChange}
              dataVal={this.dataVal}
              userData={this.name}></app-user-search-bar>

            <app-user-list-item 
              userData={this.name}></app-user-list-item>
          </Tunnel.Provider>
          
        </main>
      </div>
    );
  }
}
