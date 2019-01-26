import React, { Component } from 'react';

class ChatHeader extends Component {
  render() {
    return (
      <section id="users">
        <div id="users-icons">
          <div>
            <img className="avatar" src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt=""/>
          </div>
          <div>
            <img className="avatar" src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt=""/>
          </div>
          <div>
            <img className="avatar" src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt=""/>
          </div>
        </div>
        <hr />  
      </section>
    );
  }
}

export default ChatHeader;