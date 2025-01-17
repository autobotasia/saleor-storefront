import { media, styled } from "@styles";
import { gray } from "@styles/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: 540px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const InputUploadPhoto = styled.input`
  :hover {
    color: orange;
    text-decoration: underline;
  }
`;

export const LinkUserProfile = styled.a`
  font-size: 15px;
  color: white;
  // :hover {
  //   color: orange;
  //   text-decoration: underline;
  // }
`;

export const UpLoadPhoto = styled.div`
  border-right: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 540px) {
    border-right: 1px solid #dae3ed;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  img {
    margin-right: 10px;
    @media (min-width: 540px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export const FlexOneCol = styled.div`
  flex: 1;
`;

export const YourMemberID = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Email = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const FlexDivTwoCol = styled.div`
  flex: 2;
`;

export const UpdateProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const TextColor = styled.span`
  color: #999999;
`;

export const FlexFourCol = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;

export const WrapperChildUP = styled.div`
  display: flex;
`;

export const WrapperUP = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: 540px) {
    grid-template-columns: 0.5fr 2fr;
  }
`;

export const LinkTag = styled.a`
  color: ${gray};
  :hover {
    color: orange;
  }
`;

export const MarginLink = styled.div`
  margin-bottom: 5px;
`;

export const TileWrapper = styled.div`
  height: auto;
  margin-bottom: 1.5rem;
`;

export const Header = styled.div`
  width: 95%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.dividerDark};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  font-size: ${props => props.theme.typography.h4FontSize};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const HeaderSmall = styled.div`
  width: 100%;
  border-bottom: none;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.dividerDark};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  font-size: ${props => props.theme.typography.h4FontSize};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Content = styled.div`
  padding: 1.5rem 0;
  width: 95%;
`;

export const ContentOneLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  ${media.smallScreen`
    flex-direction: column;
    width: 100%;
  `}
`;
export const ContentEdit = styled.div`
  width: 50%;
  ${media.smallScreen`
     width: 100%;
  `}
`;

export const ContentEditOneLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    width: 48%;
    ${media.smallScreen`
      width: 100%;
    `}
  }

  ${media.smallScreen`
     flex-direction: column;
  `}
`;

export const ContentExtendInput = styled.div`
  width: 60%;
`;

export const Form = styled.form`
  background-color: ${props => props.theme.tile.backgroundColor};
`;

export const FormButtons = styled.div`
  height: 5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    margin-left: 2rem;
  }
`;

export const BtnUpload = styled.button`
  font-size: 15px;
  color: #ff6a00;
`;

export const UserAvatar = styled.img`
  border: 1px solid;
  width: 100px;
  height: 100px;
`;
