import React, { Component } from 'react';

export class RightTop extends Component {
  render() {
    return (
      <div className="right-top">
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="round-pics"
                  alt="profile pic"
                  src="/images/sangyoungHa/lettucedog.jpg"
                />
              </td>
              <td className="td-text">
                <strong>lettuce_the_dog</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RightTop;
