import React, { Component } from 'react'
import styled from 'styled-components'

class Filter extends Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
      }

      showMenu(event) {
          event.preventDefault();

          this.setState({
              showMenu: true,
          })
      }

    render() {
        return (
          <div>
            <button onClick={this.showMenu}>
              Location
            </button>

            {
                this.state.showMenu
                ? (
                <div className="menu">
                    <button> Local </button>
                    <button> Remote </button>
                </div>
                )
                : (
                    null
                )
            }

          </div>
        );
      }
}

// const Filter = ({ filter, setFilter }) => {
//     return <div className="dd-wrapper">
//     <div className="dd-header">
//       <div className="dd-header-title">Location</div>
//     </div>
//     <div className="dd-list">
//       <button className="dd-list-item">Local</button>
//       <button className="dd-list-item">Remote</button>
//     </div>
//   </div>
// }

export default Filter