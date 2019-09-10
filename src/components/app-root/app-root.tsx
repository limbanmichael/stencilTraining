import { Component, h, State } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() name;
  @State() tempName;
  @State() sampleText = 'sample';
  @State() dataVal: string;

  userData = name => {
    this.name = name;
  }

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
    const removeData = () => {
      this.name = [];
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
          <app-user-search-bar 
            handleChange={handleChange}
            dataVal={this.dataVal}
            removeData={removeData} 
            userData={this.name}></app-user-search-bar>

          <app-user-list-item 
            removeData={removeData} 
            userData={this.name}></app-user-list-item>
          
        </main>
      </div>
    );
  }
}
