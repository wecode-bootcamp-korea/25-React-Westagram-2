import React, { Component } from 'react';

export class RightBottom extends Component {
  render() {
    return (
      <div className="right-bottom">
        <table>
          <tbody>
            <tr>
              <td className="gray-text">회원님을 위한 추천</td>
              <td>   </td>
              <td>   </td>
              <td>   </td>
              <td>
                <strong>모두보기</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  className="round-pics"
                  alt="dog profile4"
                  src="/images/sangyoungHa/dogprof4.jpg"
                />
              </td>
              <td className="td-text">
                <strong>green_doggo</strong>
                <br />
                <span className="gray-text">husky_dusky님 외 1명이..</span>
                <span className="blue-text">팔로우</span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="round-pics"
                  alt="dog profile5"
                  src="/images/sangyoungHa/dogprof5.jpg"
                />
              </td>
              <td className="td-text">
                <strong>bigger_doggo</strong>
                <br />
                <span className="gray-text">little_sh!t님 외 2명이..</span>
                <span className="blue-text">팔로우</span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="round-pics"
                  alt="dog profile6"
                  src="/images/sangyoungHa/dogprof6.jpg"
                />
              </td>
              <td className="td-text">
                <strong>husky_blacky</strong>
                <br />
                <span className="gray-text">big_dog님 외 4명이..</span>
                <span className="blue-text">팔로우</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RightBottom;
