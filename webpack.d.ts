declare module "*.jpg";
declare module "*.png";
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "draftjs-to-html";
declare module "react-media";
declare module "js-base64";

// This was copied from @saleor/sdk/global.d.ts to make TS compiler happy
declare interface Window {
  PasswordCredential: any;
  Stripe: any;
  Cypress?: any;
  AdyenCheckout: any;
  version: string;
}

declare interface Navigator {
  credentials: any;
}

declare module ".*/scss/variables.scss" {
  const content: {
    mediumScreen: string;
    smallScreen: string;
    xxxLargeScreen: string;
  };
  export = content;
}
