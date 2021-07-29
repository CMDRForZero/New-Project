import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Placemark } from 'react-yandex-maps';

const makeLayout = (layoutFactory, component, contentKey) => {
  const Layout = layoutFactory.createClass('<div></div>', {
    build: function() {
      Layout.superclass.build.call(this);
      Layout.updateReactTree = () => ReactDOM.unstable_renderSubtreeIntoContainer(
        component,
        <div>{component.props[contentKey]}</div>,
        this.getElement().querySelector('div'),
      );
      const test = Layout.updateReactTree();
    },
    clear: function() {
      Layout.updateReactTree = null;
      Layout.superclass.clear.call(this);
    },
  });

  return Layout;
};

class ActivePlacemark extends React.Component {

  static propTypes = {
    balloonContent: PropTypes.node.isRequired,
    ymaps: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props);

    this.balloonLayout = makeLayout(
      ymaps.templateLayoutFactory, this, 'balloonContent');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.balloonContent !== this.props.balloonContent) {
      if (this.balloonLayout.updateReactTree) {
        console.log("updateReactTree")
        this.balloonLayout.updateReactTree();
      }
    }
  }

  render() {
    return (
      <Placemark
        key={this.props.i} geometry={this.props.geometry}
        properties={this.props.properties}
        options={{
          balloonContentLayout: this.balloonLayout,
          balloonPanelMaxMapArea: 0,
          ...this.props.options,
        }}
      />
    );
  }
}

export default ActivePlacemark;