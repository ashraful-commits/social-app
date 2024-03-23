import styled from "styled-components";

import logo from "../../../public/LOGO.png";
const Navbar = () => {
  return (
    <Container>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="creator">
          <span>Creator</span>
          <button>Get App</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 130px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 0;
  background: linear-gradient(0deg, #ebf2e3 73.91%, #fff 127.85%);
  &::before {
    content: "";
    width: 100%;
    height: 50px;
    position: absolute;
    background-color: #fff;
    z-index: 1;
    bottom: 0;
    border-top-right-radius: 100%;
    border-top-left-radius: 100%;
  }
  .container {
    width: 1452.5px;
    flex-shrink: 0;
    border-radius: 40px;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    padding: 0 65px;
    .logo {
      display: flex;
      margin-left: 84px;
      align-items: center;
      margin-bottom: 20px;
      img {
        width: 51px;
        height: 27px;
        object-fit: contain;
      }
    }
    .creator {
      display: flex;
      align-items: center;
      justify-content: end;
      margin-right: 32px;
      padding-bottom: 35px;

      gap: 25px;
      button {
        color: #fff;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        width: 133px;
        height: 50px;
        border: none;
        border-radius: 50px;
        flex-shrink: 0;
        line-height: normal;
        background-image: linear-gradient(
          168deg,
          #8fdd5d -2.74%,
          #71bb42 69.1%
        );
      }
      span {
        color: #3c3c3c;
        font-family: Poppins;
        font-size: 14px;
        height: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-top: 8px;
        border-right: 1px solid gray;
        padding-right: 20px;
      }
    }
  }
`;
export default Navbar;
