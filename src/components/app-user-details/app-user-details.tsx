import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'app-user-details',
    styleUrl: 'app-user-details.css',
    shadow: true
})

export class AppUserDetails {
    @Prop() userDetails
    @Prop() toggle;
    @Prop() collapsed;

    initializeValue() {
        if (!this.userDetails) {
            return <div class="user-list-container" hidden={this.collapsed}>
                        No Data To Display
                        <button onClick={this.toggle.bind(this)}>CLOSE</button>
                    </div>
        } else {
            return <div class="user-list-container" hidden={this.collapsed}>
                        <div class="post-header">
                            <div class="post-name">{this.userDetails.name}</div>
                            <div class="post-username">({ this.userDetails.username })</div>
                            <div class="post-company">Company : { this.userDetails.company.name }</div>
                            <div class="post-email">Email : { this.userDetails.email }</div>
                            <div class="post-email">Phone : { this.userDetails.phone }</div>
                            <div class="post-email">Website : { this.userDetails.website }</div>
                            <div>
                                <p class="detail-label">Address</p>
                                <p class="street">{ this.userDetails.address.street + ' '  + this.userDetails.address.suite + ' ' + this.userDetails.address.city + ' ' + this.userDetails.address.zip }</p>
                            </div>
                        </div>
                        <button onClick={this.toggle.bind(this)}>CLOSE</button>
                    </div>
        }
    }
    
    render() {
        return (
            <div>
                {this.initializeValue()}
            </div>
        );
    }
}