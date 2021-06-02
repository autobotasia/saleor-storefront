import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: flex-end;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  border-radius: 50%;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Wrapper = styled.div<{ stt: boolean }>`
  width: 400px;
  background: #fff;
  min-height: 500px;
  border-radius: 1rem;
  overflow: hidden;
  display: ${props => props.stt && "none"};
  box-shadow: -1px 0px 24px -7px #00000050;
  z-index: 100;
`;

// detail
export const DetailWrap = styled.div`
  padding: 1rem 0.875rem;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const ProductName = styled.a`
  text-decoration: none;
  color: #5d5d5d;
  font-size: 0.875rem;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const ButtonDetail = styled.a`
  text-decoration: none;
  font-size: 1rem;
  background: #d5d5d5;
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
  flex: 1;
  text-align: center;
  margin: 0 10px;
`;

export const InfoWrap = styled.div``;

//
// header

export const Head = styled.div`
  width: 100%;
  // background: red;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.875rem;
  box-sizing: border-box;
  box-shadow: 1px -5px 9px 2px #000;
`;

export const AvatarBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const OptionBox = styled.div`
  flex: 1;
  color: red;
  display: flex;
  justify-content: flex-end;
`;

export const OptionItem = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: poiter;
  // background: red;
  margin-left: 10px;
`;
//

// content

export const Content = styled.div`
  width: 100%;
  background: #e6f3f6;
  min-height: 450px;
  padding: 0.5rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;

export const InComing = styled.p`
  background: #fff;
  margin: 0.5rem;
  padding: 0.75rem;
  width: fit-content;
`;

export const OutComing = styled.p`
  background: #fff;
  margin: 0.5rem;
  padding: 0.75rem;
  width: fit-content;
  align-self: flex-end;
`;

//
// chat box
export const ChatBox = styled.div`
  width: 100%;
  // background: red;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.5rem;
  box-sizing: border-box;
`;

export const InputWrap = styled.form`
  display: flex;
  width: 100%;
  background: #f0f2f5;
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: #f0f2f5;
`;

export const Sendbtn = styled.img`
  width: 25px;
  height: 25px;
`;