import  { Component, h, Prop, State, Element } from  '@stencil/core';
import Tunnel from '../data/user';

@Component({
  tag: 'app-user-list-item',
  styleUrl: 'app-user-list-item.css',
  shadow: true
})
export class AppUserListItem  {
  
  @Prop() userData;
  @State() collapsed: boolean = true;
  @Prop() userDetails;
  @Element() el: AppUserListItem;
  @Prop() allUsers = new Array();

  viewFullDetails(details) {
    console.log(details, ' details');
    this.userDetails = {
      name: details.name,
      username: details.username,
      email: details.email,
      address: {
        street: details.address.street,
        suite: details.address.suite,
        city: details.address.city,
        zip: details.address.zipcode
      },
      phone: details.phone,
      website: details.website,
      company: {
        name: details.company.name,
        catchPhrase: details.catchPhrase
      }
    };
    this.collapsed = false;
  }
  
  render() {
    const toggle = () => {
      this.collapsed = !this.collapsed
    };

    return  (
      <div class="list-item-parent">

        <div class="first-level">
          {this.userData.map((user) =>
            <div class="user-list-container" onClick={this.viewFullDetails.bind(this, user)}>
              <div class="post-header">
                <div class="post-name">{user.name}</div>
              </div>
            </div>
          )}
        </div>

        <div class="second-level">

          <app-user-details
            userDetails={this.userDetails}
            collapsed={this.collapsed}
            toggle={toggle}></app-user-details>

        </div>
      </div>
      );
  }
}

Tunnel.injectProps(AppUserListItem, ['allUsers', 'userDetails'])