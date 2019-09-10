import  { Component, h, Prop, State, Element } from  '@stencil/core';
import Tunnel from '../data/user';

@Component({
  tag: 'app-user-list-item',
  styleUrl: 'app-user-list-item.css',
  shadow: true
})
export class AppUserListItem  {
  
  // @Prop() userData;
  @State() collapsed: boolean;
  @Prop() userDetails;
  @Element() el: AppUserListItem;
  @Prop() allUsers = new Array();
  @Prop() viewFullDetails;

  componentDidRender() {
    console.log(this.userDetails, ' did render');
  }
  
  render() {
    const toggle = () => {
      this.collapsed = !this.collapsed
    };

    return  (
      <div class="list-item-parent">

        <div class="first-level">
          {this.allUsers.map((user) =>
            <div class="user-list-container" onClick={this.viewFullDetails.bind(this, user)}>
              <div class="post-header">
                <div class="post-name">{user.name}</div>
              </div>
            </div>
          )}
        </div>

        <div class="second-level">

          <app-user-details
            collapsed={this.collapsed}
            toggle={toggle}></app-user-details>

        </div>
      </div>
      );
  }
}

Tunnel.injectProps(AppUserListItem, ['allUsers', 'userDetails'])