import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* HOC that generates a container component to 
   provide any component with the store object 
   without dealing directly with the context API.
*/

const StoreProvider = (extraProps) => (Comp) => {
  // create a container component

  return class extends Component {
    static displayName = `${Comp.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      return <Comp
        {...this.props}
        {...extraProps(this.context.store, this.props)}
        store={this.context.store}
      />;
    }
  };
};

export default StoreProvider;