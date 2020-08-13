import React from "react";
import "./App.css";

import logo from "./resources/fresh_farm_logo_transparent.png";

import select_livestock_image from "./resources/select_livestock.png";
import selected_list from "./resources/selected_livestock_list.png";

import disease_information_image from "./resources/tpus_information.png";
import chicken_information_image from "./resources/chicken_information.png";
import report_image from "./resources/do_report.jpg";

import map_image from "./resources/located_disease_map.png";
import search_view_image from "./resources/search_view_dis.png";

function App() {
  return (
    <div className="App">
      <img className="main_logo" src={logo} alt="{null}" />
      <div className="Title">
        <h2>우리들의</h2>
        <h1>후레쉬-팜</h1>
      </div>
      <div className="Introduce">
        <h3>간단한 소개</h3>
        <h4>
          후레쉬-팜은 축산 질병의 전파 방지 및 예방을 위한 어플리케이션입니다.
        </h4>
        <p>
          질병의 의심 신고 및 질병 정보를 앱 내부에서 열람할 수 있으며, 이메일을
          통한 손쉬운 회원가입으로 개인만의 어플리케이션을 만들 수 있습니다.
        </p>
      </div>
      <div className="Content">
        <div className="content_first">
          <h4>내 농장 정보를 입력하여 관련된 정보만을 쉽게 받아옵니다.</h4>
          <div className="image_container">
            <img src={select_livestock_image} alt="" />
            <img src={selected_list} alt="" />
          </div>
        </div>
        <div className="content_second">
          <h4>질병 정보를 열람하고, 의심 질병을 신고할 수도 있습니다.</h4>
          <div className="image_container">
            <img src={chicken_information_image} alt="" />
            <img src={disease_information_image} alt="" />
            <img src={report_image} alt="" style={{ marginRight: 0 }} />
          </div>
        </div>
        <div className="content_third">
          <h4>질병의 발생 동향 또한 앱 내에서 확인 가능합니다.</h4>
          <div className="image_container">
            <img src={map_image} alt="" />
            <img src={search_view_image} alt="" style={{ marginRight: 0 }} />
          </div>
        </div>
      </div>
      <div className="Footer">
        <p>
          앱 다운로드 :
          <a href="https://play.google.com/store/apps/details?id=com.sun.freshfarm">
            in google Playstore
          </a>
        </p>
        <p>
          깃허브 :
          <a href="https://github.com/Sunny-Fresh-Farm/fresh-farm-document">
            Organization 'Sunny-Fresh-Farm'
          </a>
        </p>
        <p>pandajiny : astic1764@gmail.com</p>
        <p>sunnydogi : gildogi@naver.com</p>
      </div>
    </div>
  );
}

export default App;
