import Link from "next/link";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import { Icon } from "@components/atoms";
import { TaxedMoney } from "@components/containers";
import { CartSummaryRow } from "@components/molecules";
import { paths } from "@paths";
import { commonMessages } from "@temp/intl";

import Trolley from "../../../../images/trolleyCheckout.svg";
import * as S from "./styles";
import { CartSummaryProps, ICostLine, ICosts } from "./types";

const DEFAULT_MAX_PRODUCTS = 6;
const CostLine = ({
  name,
  cost,
  last = false,
  negative = false,
}: ICostLine) => (
  <S.CostLine last={last}>
    <span>{name}</span>
    <span data-test={`cartSummaryCost${name.replace(/\s/g, "")}`}>
      {negative && "- "}
      <TaxedMoney taxedMoney={cost} />
    </span>
  </S.CostLine>
);

const Costs = ({ subtotal, promoCode, shipping, total }: ICosts) => {
  const intl = useIntl();
  return (
    <S.Costs>
      {/* {subtotal && (
        <CostLine
          name={intl.formatMessage(commonMessages.subtotal)}
          cost={subtotal}
        />
      )} */}
      {shipping && (
        <CostLine
          name={intl.formatMessage(commonMessages.shipping)}
          cost={shipping}
        />
      )}
      {promoCode && promoCode.gross.amount > 0 && (
        <CostLine
          name={intl.formatMessage(commonMessages.promoCode)}
          cost={promoCode}
          negative
        />
      )}
      {total && (
        <CostLine
          name={`${intl.formatMessage(commonMessages.total)}:`}
          cost={total}
          last
        />
      )}
    </S.Costs>
  );
};

/**
 * Cart summary displayed in checkout page
 */
const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  total,
  shipping,
  promoCode,
  products,
}) => {
  const [mobileCartOpened, setMobileCartOpened] = useState(false);
  const [activeShowMyCart, setActiveShowMyCart] = useState(false);

  return (
    <>
      <S.Wrapper mobileCartOpened={mobileCartOpened}>
        <S.Title
          data-test="cartSummaryTitle"
          onClick={() => setMobileCartOpened(!mobileCartOpened)}
        >
          <img src={Trolley} alt="" />
          <p>Giỏ hàng</p>
          <S.ArrowUp mobileCartOpened={mobileCartOpened}>
            <Icon name="arrow_up" size={24} />
          </S.ArrowUp>
        </S.Title>
        <S.Content>
          <S.CartSummaryProductList>
            {!activeShowMyCart
              ? products
                  ?.filter((product, index) => index < DEFAULT_MAX_PRODUCTS)
                  .map((product, index) => (
                    <div key={product.sku}>
                      <S.ProductLine>
                        <CartSummaryRow
                          index={index}
                          sku={product.sku}
                          quantity={product.quantity}
                          name={product.name}
                          price={product.price}
                          thumbnail={product.thumbnail}
                        />
                      </S.ProductLine>
                    </div>
                  ))
              : products?.map((product, index) => (
                  <div key={product.sku}>
                    <S.ProductLine>
                      <CartSummaryRow
                        index={index}
                        sku={product.sku}
                        quantity={product.quantity}
                        name={product.name}
                        price={product.price}
                        thumbnail={product.thumbnail}
                      />
                    </S.ProductLine>
                  </div>
                ))}
          </S.CartSummaryProductList>
          {products && products.length >= DEFAULT_MAX_PRODUCTS && (
            <S.ShowAll onClick={() => setActiveShowMyCart(!activeShowMyCart)}>
              {!activeShowMyCart ? "Xem tất cả" : "Thu gọn"}
            </S.ShowAll>
          )}
          <S.HR />
          <Costs
            subtotal={subtotal}
            total={total}
            shipping={shipping}
            promoCode={promoCode}
          />
        </S.Content>
      </S.Wrapper>
      <S.Payment>
        <Link href={paths.checkoutPayment}>
          <p>Thanh Toán</p>
        </Link>
      </S.Payment>
    </>
  );
};

export { CartSummary };
export type { CartSummaryProps };
