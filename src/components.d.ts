/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface AppUserDetails {
    'collapsed': any;
    'toggle': any;
    'userDetails': any;
  }
  interface AppUserListItem {
    'company': string;
    'companyAddress': string;
    'email': string;
    'fullName': string;
    'removeData': any;
    'userData': any;
    'userDetails': { name: string; username: string; email: string; address: { street: string; suite: string; city: string; zip: string; }; phone: string; website: string; company: { name: string; catchPhrase: string; }; };
    'userName': string;
  }
  interface AppUserSearchBar {
    'dataVal': any;
    'handleChange': any;
    'removeData': any;
    'userData': any;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppUserDetailsElement extends Components.AppUserDetails, HTMLStencilElement {}
  var HTMLAppUserDetailsElement: {
    prototype: HTMLAppUserDetailsElement;
    new (): HTMLAppUserDetailsElement;
  };

  interface HTMLAppUserListItemElement extends Components.AppUserListItem, HTMLStencilElement {}
  var HTMLAppUserListItemElement: {
    prototype: HTMLAppUserListItemElement;
    new (): HTMLAppUserListItemElement;
  };

  interface HTMLAppUserSearchBarElement extends Components.AppUserSearchBar, HTMLStencilElement {}
  var HTMLAppUserSearchBarElement: {
    prototype: HTMLAppUserSearchBarElement;
    new (): HTMLAppUserSearchBarElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'app-user-details': HTMLAppUserDetailsElement;
    'app-user-list-item': HTMLAppUserListItemElement;
    'app-user-search-bar': HTMLAppUserSearchBarElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AppUserDetails extends JSXBase.HTMLAttributes<HTMLAppUserDetailsElement> {
    'collapsed'?: any;
    'toggle'?: any;
    'userDetails'?: any;
  }
  interface AppUserListItem extends JSXBase.HTMLAttributes<HTMLAppUserListItemElement> {
    'company'?: string;
    'companyAddress'?: string;
    'email'?: string;
    'fullName'?: string;
    'removeData'?: any;
    'userData'?: any;
    'userDetails'?: { name: string; username: string; email: string; address: { street: string; suite: string; city: string; zip: string; }; phone: string; website: string; company: { name: string; catchPhrase: string; }; };
    'userName'?: string;
  }
  interface AppUserSearchBar extends JSXBase.HTMLAttributes<HTMLAppUserSearchBarElement> {
    'dataVal'?: any;
    'handleChange'?: any;
    'removeData'?: any;
    'userData'?: any;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'app-user-details': AppUserDetails;
    'app-user-list-item': AppUserListItem;
    'app-user-search-bar': AppUserSearchBar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


