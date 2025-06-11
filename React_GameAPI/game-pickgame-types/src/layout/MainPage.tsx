import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  margin-left: 240px;

  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;

const MainPage: React.FC = () => {
  return (
    <div className="bg-[#1e1f24] text-white py-6 w-full">
      <MainContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dummyData.map((item, idx) => (
          <div key={idx} className="bg-[#3a3c42] p-3 rounded-md text-center">
            <img
              src={item.img}
              alt="Game"
              className="w-full h-[174px] md:h-[300px] bg-[#555] rounded"
            />
            <p className="mt-2 mb-1 font-bold text-ellipsis overflow-hidden whitespace-normal line-clamp-2">
              {item.title}
            </p>
            <span className="text-[#1ea7fd]">{item.price}</span>
          </div>
        ))}
      </MainContainer>
    </div>
  );
};

const dummyData = [
  { title: "둠: 암흑 시대", price: "₩69,999", img: "" },
  { title: "클레어 옵스큐: 탐험 33", price: "₩49,999", img: "" },
  { title: "스펠던 블레이드 전편판", price: "₩79,999", img: "" },
  { title: "엘더스크롤: 아카이브", price: "₩59,999", img: "" },
  { title: "둠: 암흑 시대 aaaaaaaa", price: "₩69,999", img: "" },
  { title: "클레어 옵스큐: 탐험 33", price: "₩49,999", img: "" },
  { title: "스펠던 블레이드 전편판", price: "₩79,999", img: "" },
  { title: "엘더스크롤: 아카이브", price: "₩59,999", img: "" },
  { title: "둠: 암흑 시대", price: "₩69,999", img: "" },
  { title: "클레어 옵스큐: 탐험 33", price: "₩49,999", img: "" },
  { title: "스펠던 블레이드 전편판", price: "₩79,999", img: "" },
  { title: "엘더스크롤: 아카이브", price: "₩59,999", img: "" },
];
export default MainPage;
