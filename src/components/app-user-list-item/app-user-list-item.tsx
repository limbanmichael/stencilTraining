import  { Component, h, Prop, State } from  '@stencil/core';

@Component({
  tag: 'app-user-list-item',
  styleUrl: 'app-user-list-item.css',
  shadow: true
})
export class AppUserListItem  {
  
  @Prop() userData;
  @Prop() removeData;
  @State() collapsed: boolean = true;
  @Prop() userDetails = {
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
  };

  componentDidLoad() {
  }

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