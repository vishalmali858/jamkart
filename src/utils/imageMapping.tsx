import { ShoppingOutlined, ShopOutlined, DollarCircleOutlined, IdcardOutlined, CreditCardOutlined, PlayCircleOutlined, SendOutlined, DeleteOutlined, HomeOutlined, ShoppingCartOutlined, PlusCircleFilled, MinusCircleFilled, ReloadOutlined, SmallDashOutlined, HeartFilled, CopyrightOutlined } from '@ant-design/icons';
import LogoIcon from "../assets/images/jlogo.png";
import { FONT_COLOR_FOR_LABEL_COMPONENT } from "./globalTypes";
import LabelComponent from '../components/LabelComponent';
import BadgeComponent from '../components/BadgeComponent/BadgeComponent';
import CardComponent from '../components/CardComponent/CardComponent';

export const JamkartIcon = LogoIcon;

export const expandMenuIcon = <SmallDashOutlined style={{ fontSize: "20px" }} rotate={90} />;


export const INC_DEC_COUNTER_ICON = {
	plusSymbol: <PlusCircleFilled style={{ color: "#3385d9" }} />,
	minusSymbol: <MinusCircleFilled style={{ color: "#3385d9" }} />,
	disabledplusSymbol: <PlusCircleFilled style={{ color: "grey" }} />,
	disabledminusSymbol: <MinusCircleFilled style={{ color: "grey" }} />
}

export const shoppingCartOutlined = <ShoppingCartOutlined style={{ fontSize: "16px" }} />;
export const bigShoppingCartOutlined = <ShoppingCartOutlined style={{ fontSize: "32px" }} />;
export const emptyShoppingCartOutlined = <ShoppingCartOutlined style={{ fontSize: "100px" }} />;


export const shippingIcon = <ShoppingOutlined style={{ fontSize: "32px" }} />;

export const addressPageIcons = [
	<IdcardOutlined style={{ fontSize: "32px" }} />,
	<DollarCircleOutlined style={{ fontSize: "20px" }} />
]
export const creditCardPageIcons = [
	<CreditCardOutlined style={{ fontSize: "32px" }} />,
	<ShopOutlined style={{ fontSize: "20px" }} />,
]
export const deleteCartOutlined = <DeleteOutlined />
export const NAVIGATION_HEADER_ICON = [
	<HomeOutlined style={{ fontSize: "20px", color: "#3385d9" }} />,
	<PlayCircleOutlined style={{ fontSize: "20px", color: "#3385d9" }} />,
	<ShoppingCartOutlined style={{ fontSize: "20px", color: "#3385d9" }} />
]


export const SPINNER_WHILE_SENDING_SHIPPING_DATA = "whileShippingData";

export const SPINNER_ICON: any = {
	[SPINNER_WHILE_SENDING_SHIPPING_DATA]: <ShoppingOutlined style={{ fontSize: "64px" }} spin={true} />
}

export const FOOTER_BUTTON_ICON = [
	{
		iconToRender: <SendOutlined />
	},
	{
		iconToRender: <ReloadOutlined />
	},
];

export const FOOTER_TEXT_ICON = (<HeartFilled />);
export const FOOTER_COPYRIGHT_ICON = <CopyrightOutlined />;
export const FOOTER_LOGO_ICON = <ShoppingOutlined style={{ fontSize: "40px", color: "#3385d9" }} />;

export function getBadgeAndCardComp(badgeText: any, labelText: any) {
	return <BadgeComponent className={"badgeAndCard"} badgeRibbon={true} color={"blue"} placement={"start"} text={badgeText}>
		<CardComponent
			borderValue={true}
			addCardInList={false}
			dataSource={[{
				className: "cardInBadge",
				description: <LabelComponent fontSizeValue={"14px"} headingLevel={5} color={FONT_COLOR_FOR_LABEL_COMPONENT}>{labelText}</LabelComponent>
			}]} />
	</BadgeComponent>
}