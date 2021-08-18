import { media, styled } from "@styles";

export const Wrapper = styled.div`
  margin: 30px 0 0 0;
  padding: 0 19px;
`;

export const Breadcrumbs = styled.div``;

export const Title = styled.div`
  margin-top: 80px;
  margin-bottom: 15px;
  h1 {
    color: ${props => props.theme.colors.mainColor};
    font: normal normal normal Arial !important;
    font-size: 30px;
    letter-spacing: 0.6px;
    text-transform: capitalize;
  }
`;

export const CartHeader = styled.div`
  ${media.mediumScreen`
    display: none;
  `};
`;
export const CartFooter = styled.div``;
export const Cart = styled.div`
  border-top: 1px solid rgba(50, 50, 50, 0.1);
`;
export const ProceedButton = styled.div`
  text-align: right;
`;
