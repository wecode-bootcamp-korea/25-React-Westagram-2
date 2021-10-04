import React, { Component } from 'react';

export class RightMiddle extends Component {
  render() {
    return (
      <div className="right-middle">
        <table>
          <tbody>
            <tr>
              <td className="gray-text">스토리</td>
              <td>   </td>
              <td>   </td>
              <td>    </td>
              <td>
                <strong>모두보기</strong>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="round-pics"
                  alt="dog profile1"
                  src="/images/sangyoungHa/dogprof1.jpg"
                />
              </td>
              <td className="td-text">
                <strong>big_sh!t</strong>
                <br />
                <span className="gray-text">16분전</span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="round-pics"
                  alt="dog profile2"
                  src="/images/sangyoungHa/dogprof2.jpg"
                />
              </td>
              <td className="td-text">
                <strong>husky_dusky</strong>
                <br />
                <span className="gray-text">2시간전</span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="round-pics"
                  alt="dog profile2"
                  src="/images/sangyoungHa/dogprof3.jpg"
                />
              </td>
              <td className="td-text">
                <strong>little_sh!t</strong>
                <br />
                <span className="gray-text">6시간전</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RightMiddle;
