import React from 'react';
import PropTypes from 'prop-types';

/* HOC that generates a container component to 
   provide any component with the store object 
   without dealing directly with the context API.
*/

const StoreProvider = (Component) => {
  // create a container component
  const WithStore = (props, { store }) => 
    <Component {...props} store={store} />;

  // declare that the component is allowed to use the context obj
  WithStore.contextTypes = {
    store: PropTypes.object
  };

  WithStore.displayName = `${Component.name}Container`;

  return WithStore;
};

export default StoreProvider;