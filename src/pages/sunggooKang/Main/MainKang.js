import React from 'react';
import './MainKang.scss';
import Comments from './Comments';
import './Comments.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faSearch,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class MainKang extends React.Component {
  render() {
    return (
      <div className="Main">
        <nav className="firstLine">
          <div className="logo">
            <div className="innerLogo">
              <FontAwesomeIcon
                icon={faInstagram}
                className="fab fa-instagram"
              />
              {/* <i className="fab fa-instagram"></i> */}
            </div>
            <div className="innerLogo letter">| instagram</div>
          </div>
          <div className="search">
            <div className="searchLogo">
              <FontAwesomeIcon icon={faSearch} className="fas fa-search" />
              {/* <i className="fas fa-search"></i> */}
            </div>
            <input type="text" placeholder="검색" />
          </div>
          <div className="profile">
            <div>
              <FontAwesomeIcon icon={faCompass} className="far fa-compass" />
              {/* <i className="far fa-compass"></i> */}
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} className="far fa-heart" />
              {/* <i className="far fa-heart"></i> */}
            </div>
            <div>
              <FontAwesomeIcon
                icon={faUserCircle}
                className="far fa-user-circle"
              />
              {/* <i className="far fa-user-circle"></i> */}
            </div>
          </div>
        </nav>

        <div className="main">
          <main className="left"></main>
          <div className="feeds">
            <article>
              <div className="naming">
                <img
                  className="feedsProfile"
                  src="\images\sunggooKang\coffee2.jpg"
                  alt="내 사진"
                />
                <div className="naming2lines">
                  <div className="first">Wecode_bootcamp</div>
                  <div className="second">WeCode - 위코드</div>
                </div>
                <i className="far fa-ellipsis-h"></i>
              </div>

              <img
                className="articlePicture"
                src="\images\sunggooKang\coffee2.jpg"
                alt="error"
              />
              <div className="articleLogo">
                <div className="articleLogo3">
                  <div className="logo1">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="logo1">
                    <i className="fas fa-comment"></i>
                  </div>
                  <div className="logo1">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </div>
                <div className="save">
                  <i className="fas fa-bookmark"></i>
                </div>
              </div>

              <div className="friendLine">
                <img
                  className="friendImg"
                  alt="좋아요 누른사람"
                  src="\images\sunggooKang\coffee2.jpg"
                />
                <span className="friendSentence">
                  <span className="friend">Hongil</span>님
                  <span className="friend">외 4명</span>이 좋아합니다.
                </span>
              </div>

              <div id="lines2" className="lines2">
                {' '}
                <span className="lines2lines">Wecode_bootcamp</span>
                123항커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커피커
              </div>
              <button className="more">더보기</button>

              <div className="timeLimit">30분 전</div>

              <ul style={{ width: '100%' }} id="ul"></ul>
              <form className="delete" id="formSubmit">
                <Comments />
              </form>
            </article>
          </div>

          <div className="main-right">
            <div className="right">
              <img
                className="rightProfile"
                src="\images\sunggooKang\coffee2.jpg"
                alt=""
              />
              <div className="right2lines">
                <div className="rightFirst">Wecode_bootcamp</div>
                <div className="rightSecond">WeCode - 위코드</div>
              </div>
            </div>

            <div className="story">
              <div className="storyAll">
                <div className="storyLetter">스토리</div>
                <div className="all">모두 보기</div>
              </div>

              <div className="naming">
                <img
                  className="feedsProfile"
                  src="\images\sunggooKang\coffee2.jpg"
                  alt="friend1"
                />
                <div className="naming2lines">
                  <div className="first">AAAAAAAAAA</div>
                  <div className="second">aaaaaaaaaa</div>
                </div>
              </div>
              <div className="naming">
                <img
                  className="feedsProfile"
                  src="\images\sunggooKang\coffee2.jpg"
                  alt="friend1"
                />
                <div className="naming2lines">
                  <div className="first">BBBBBBBBBB</div>
                  <div className="second">bbbbbbbbbb</div>
                </div>
              </div>
              <div className="naming">
                <img
                  className="feedsProfile"
                  src="\images\sunggooKang\coffee2.jpg"
                  alt="friend1"
                />
                <div className="naming2lines">
                  <div className="first">CCCCCCCCCC</div>
                  <div className="second">cccccccccc</div>
                </div>
              </div>
              <div className="naming">
                <img
                  className="feedsProfile"
                  src="\images\sunggooKang\coffee2.jpg"
                  alt="friend1"
                />
                <div className="naming2lines">
                  <div className="first">DDDDDDDDDD</div>
                  <div className="second">dddddddddd</div>
                </div>
              </div>
            </div>

            <div className="story">
              <div className="storyAll">
                <div className="storyLetter">회원님을 위한 추천</div>
                <div className="all">모두 보기</div>
              </div>

              <div className="naming">
                <img
                  className="feedsProfile"
                  src="\images\sunggooKang\coffee2.jpg"
                  alt="friend1"
                />
                <div className="naming2lines">
                  <div className="first">EEEEEEEEEE</div>
                  <div className="second">eeeeeeeeee</div>
                </div>
                <div id="follow" className="follow">
                  팔로우
                </div>
              </div>

              <div className="naming">
                <img
                  className="feedsProfile"
                  src="\images\sunggooKang\coffee2.jpg"
                  alt="friend1"
                />
                <div className="naming2lines">
                  <div className="first">FFFFFFFFFF</div>
                  <div className="second">ffffffffff</div>
                </div>
                <div id="follow" className="follow">
                  팔로우
                </div>
              </div>

              <div className="naming">
                <img
                  className="feedsProfile"
                  src="\images\sunggooKang\coffee2.jpg"
                  alt="friend1"
                />
                <div className="naming2lines">
                  <div className="first">GGGGGGGGGG</div>
                  <div className="second">gggggggggg</div>
                </div>
                <div id="follow" className="follow">
                  팔로우
                </div>
              </div>

              <div className="naming">
                <img
                  className="feedsProfile"
                  src="\images\sunggooKang\coffee2.jpg"
                  alt="friend1"
                />
                <div className="naming2lines">
                  <div className="first">HHHHHHHHHHH</div>
                  <div className="second">hhhhhhhhhhh</div>
                </div>
                <div id="follow" className="follow">
                  팔로우
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Main 페이지에서 사용할 공통의 Nav Component를 하나 만들어서 import해서 사용해주시기 바랍니다.
// 학습 가이드중.
export default MainKang;
