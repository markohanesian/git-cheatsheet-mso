import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, Tooltip } from "@material-ui/core";
import FadingText from './FadingText';

class GitCommand extends React.Component {
  state = {
    value: this.props.command,
    copied: false,
  };

  render() {
    return (
      <div id="gitcommand-div">
        <Tooltip title={this.props.tooltip} placement="top-start" enterTouchDelay="0s">
          <Button id="gitcommand-button">
            <CopyToClipboard
              id="gc-button-click-area"
              text={this.state.value}
              onCopy={() => this.setState({ copied: true })}
            >
              <code>{this.props.name}</code>
            </CopyToClipboard>
          </Button>
        </Tooltip>
        {this.state.copied ? <FadingText /> : null}

      </div>
    );
  }
}

export default GitCommand;
