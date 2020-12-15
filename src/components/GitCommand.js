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

          {this.state.copied ? <span style={{color: '#3CF639', backgroundColor: 'black', marginLeft: '4rem'}}>Copied.</span> : null}
        </div>
      );
    }
  }
   
export default GitCommand;

