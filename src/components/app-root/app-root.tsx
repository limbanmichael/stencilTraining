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
  @State() userDetails;
  @State() collapsed: boolean = true;

  async componentWillLoad() {
    const retrievedData = await allUserData.getUserData();
    this.name = retrievedData;
    this.tempName = retrievedData;
  };

  componentDidRender() {
    console.log(this.userDetails, ' from root');
  }


  render() {

    const state = {
      allUsers: this.name,
      userDetails: this.userDetails
    };

    const handleChange = event => {
      const foundUsers = allUserData.handleChangeFromTunnel(event, this.tempName);
      this.name = foundUsers;
    };

    const viewFullDetails = (detail) => {
      const foundDetail = allUserData.viewFullDetails(detail);
      this.collapsed = false;
      this.userDetails = foundDetail;
    }

    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <Tunnel.Provider state={state}>
            <app-user-search-bar 
              handleChange={handleChange}
              dataVal={this.dataVal}></app-user-search-bar>

            <app-user-list-item viewFullDetails={viewFullDetails}>
            </app-user-list-item>

            {/* <app-user-details></app-user-details> */}
          </Tunnel.Provider>
          
        </main>
      </div>
    );
  }
}
