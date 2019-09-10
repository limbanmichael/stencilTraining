import { Component, h, State } from '@stencil/core';
import Tunnel from '../data/user';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() name;
  @State() tempName;
  @State() dataVal: string;

  componentWillLoad() {
    fetch('http://jsonplaceholder.typicode.com/users/')
      .then((response: Response) => response.json())
      .then(response => {
        this.name = response;
        this.tempName = this.name;
        console.log(this.name);
      });
  }


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
      this.dataVal = event.target.value;
      console.log(this.dataVal);

      if (!this.dataVal) {
        this.name = this.tempName;
        return false;
      }
      const foundUsers = this.tempName.filter(user => {
          return user.name.toLowerCase().indexOf(this.dataVal.toLowerCase()) > -1;
      });
      this.name = foundUsers;
      console.log(this.name);
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
