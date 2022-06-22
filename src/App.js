/* eslint-disable */ //warning 경고 제거

import "./App.css";
import React, { useState } from "react";

function App() {
  let post = "양성진 블로그";
  let [글제목, 글제목변경] = useState([
    "build update 테스트",
    "하하성진이 글",
    "으아아아",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  [1, 2, 3].map(function () {});

  let changeTitle = () => {
    let copy = [...글제목];
    copy[0] = "여자 코트 추천";
    글제목변경(copy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "17px" }}>{logo}</h4>
      </div>
      <button onClick={changeTitle}>가나다순 정렬</button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글제목 바꾸기
      </button>
      {글제목.map(function (data, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                modal == false ? setTitle(i) & setModal(true) : setModal(false);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                  console.log(따봉);
                }}
              >
                👍🏻
              </span>
              {따봉[i]}
            </h4>
            <p>6월 16일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input onChange={(e) => 입력값변경(e.target.value)}></input>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        등록
      </button>

      <Profile />

      {modal == true ? (
        <Modal
          color={"skyblue"}
          글제목={글제목}
          title={title}
          changeTitle={changeTitle}
        ></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle}>글 수정</button>
    </div>
  );
}

//옛날 react
class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "kim", age: 25 };
  }
  changeName() {
    this.setState({ name: "Yang" });
  }
  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name} 입니다</p>
        <button onClick={this.changeName.bind(this)}>이름변경</button>
      </div>
    );
  }
}

export default App;
