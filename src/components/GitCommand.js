import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class GitCommand extends React.Component {
    state = {
      value: this.props.command,
      copied: false,
    };
   
    render() {
      return (
        <div>
          <CopyToClipboard text={this.state.value}
            onCopy={() => this.setState({copied: true})}>
            <code>{this.props.name}</code>
          </CopyToClipboard>

          {this.state.copied ? <span id="copied-text" >Copied.</span> : null}
        </div>
      );
    }
  }
   
export default GitCommand;

