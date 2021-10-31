export const FONT_COLOR_FOR_LABEL_COMPONENT = "black";

export const getCardDefaultGridAttribute = {
  gutter: 16,
  xs: 1,
  sm: 1,
  md: 2,
  lg: 2,
  xl: 2,
  xxl: 2
}

export const NAVIGATION_BUTTONS_TEXT = [
  "Home",
  "Start Tour",
  "Cart"
];

export const SUCCESS_MESSAGE_TEXT = "Success! You Order was placed. Thank you for shopping with us";
export const FAILED_MESSAGE_TEXT = "Failed ! Your Order was not placed due to some technical Error!";
export const ERROR_MESSAGE_TEXT = "Sorry, There was an issue in placing your order.";

export const ERROR403_TEXT = "Sorry, you are not authorized to access this page.";
export const ERROR404_TEXT = "Sorry, the page you have visited does not exist.";
export const ERROR500_TEXT = "Sorry, something went wrong. Its us, not yours. Sorry For inconvenience !";

export const NAVIGATE_TO_DASHBOARD = "Please click the below link to navigate back to Home Page";

export const errorCodeObject: any = {
  "403": {
    title: "403",
    status: "403",
    subTitle: ERROR403_TEXT
  },
  "404": {
    title: "404",
    status: "404",
    subTitle: ERROR404_TEXT
  },
  "500": {
    title: "500",
    status: "500",
    subTitle: ERROR500_TEXT
  }
}

export const FINDING_FALCONE_SPINNER_TIP_VALUE = "We are placing your order !";
