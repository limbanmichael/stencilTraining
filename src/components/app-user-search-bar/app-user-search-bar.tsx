import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'app-user-search-bar',
    styleUrl: 'app-user-search-bar.css',
    shadow: true
})

// sample endpoint
// http://jsonplaceholder.typicode.com/users?username=Antonette
export class AppUserSearchBar {
    @Prop() userData;
    @Prop() removeData;
    @Prop() dataVal;
    @Prop() handleChange;
    

    render() {
        return (
            <div class="filter-parent">
                <input 
                    value={this.dataVal} 
                    onInput={(event: UIEvent) => this.handleChange(event)}
                    class="filter-field" 
                    autofocus type="text"/>
            </div>
        );
    }
}