import React from "react";
import PropTypes from "prop-types";

import { Consumer } from "/components/relocation/Relocation";
import { TOAST } from "/components/relocation/types";

class ToastConnector extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Consumer>
        {({ createChild }) =>
          this.props.children({
            addToast: render => createChild({ render, type: TOAST }),
          })
        }
      </Consumer>
    );
  }
}

export default ToastConnector;
