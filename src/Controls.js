import React, { PureComponent } from 'react';

// PureComponent replaces shouldComponentUpdate
// compares prevState/current state for changes to decide whether to rerender
class Controls extends PureComponent {

  render() {
    return (
      <div>
        <div>
          <button type="text" onClick={() => this.props.updateIntervalSetting(-1)}>-</button>
          {this.props.updateInterval}
          <button type="text" onClick={() => this.props.updateIntervalSetting(1)}>+</button>
        </div>
        <button onClick={this.props.handleAddTimer}>Add New Timer</button>
      </div>
    );
  }


}

export default Controls
