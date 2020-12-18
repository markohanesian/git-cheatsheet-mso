import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, Tooltip } from "@material-ui/core";

class GitCommand extends React.Component {
  state = {
    value: this.props.command,
    copied: false,
  };

  render() {
    return (
      <div>
        <Tooltip title={this.props.tooltip} placement="right-start">
          <Button>
            <CopyToClipboard
              text={this.state.value}
              onCopy={() => this.setState({ copied: true })}
            >
              <code>{this.props.name}</code>
            </CopyToClipboard>
          </Button>
        </Tooltip>

        {this.state.copied ? <span id="copied-text">Copied.</span> : null}
      </div>
    );
  }
}

export default GitCommand;
