import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/* HOC that generates a container component to 
   provide any component with the store object 
   without dealing directly with the context API.
*/

const StoreProvider = (extraProps = () => ({})) => (Comp) => {
  // create a container component

  return class extends PureComponent {
    static displayName = `${Comp.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    }

    state = this.usedState();

    onStoreChange = () => {
      if(this.subscriptionId) {
        // this.forceUpdate();
        this.setState(this.usedState());
      }
    }
  
    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }
  
    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render() {
      return <Comp
        {...this.props}
        {...this.usedState()}
        store={this.context.store}
      />;
    }
  };
};

export default StoreProvider;