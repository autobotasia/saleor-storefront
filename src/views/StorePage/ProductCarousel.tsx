import Link from "next/link";
import Carousel from "nuka-carousel";
import * as React from "react";

import { generateProductUrl } from "../../core/utils";
import Flag from "../../images/flag-storepage.svg";
import nextCarouselImg from "../../images/nextCarouselHomePage.svg";
import preCarouselImg from "../../images/preCarouselHomePage.svg";
import { ListProductType } from "./Page";

interface ProductCarouselProps {
  productList: ListProductType[];
  title: string;
}

export const ProductCarousel = ({
  productList,
  title,
}: ProductCarouselProps) => {
  return (
    <>
      <div className="overview-card-title">
        <h3 className="overview-card-title-text">{title}</h3>
      </div>
      <Carousel
        wrapAround
        renderBottomCenterControls={null}
        slidesToScroll={5}
        slidesToShow={5}
        speed={1000}
        // withoutControls={true}
        renderCenterLeftControls={({ previousSlide, currentSlide }) => (
          <button
            style={{
              transform: "translate(-22px, -32px)",
              // display: `${currentSlide === 0 ? "none" : "unset"}`
            }}
            onClick={previousSlide}
          >
            <img src={preCarouselImg} alt="" />
          </button>
        )}
        renderCenterRightControls={({
          nextSlide,
          currentSlide,
          slideCount,
          slidesToShow,
        }) => (
          <button
            style={{
              transform: "translate(22px, -32px)",
              // display: `${currentSlide === (slideCount - slidesToShow) ? "none" : "unset"}`
            }}
            onClick={nextSlide}
          >
            <img src={nextCarouselImg} alt="" />
          </button>
        )}
      >
        {productList.map(product => (
          <Link
            href={generateProductUrl(product.id, product.name)}
            key={product.id}
          >
            <a>
              <div className="overview-img">
                <div>
                  <div className="overview-img-sale">
                    <div className="overview-img-discount">
                      {/* {flag === true ? <img src={Flag} alt="flag" /> : ""} */}
                      <img src={Flag} alt="flag" />
                      <span>25% GIẢM</span>
                    </div>
                    <img
                      src={product.imgUrl}
                      alt="star"
                      className="overview_img_product"
                      width="217px"
                      height="217px"
                    />
                  </div>
                  <div className="overview_product_info">
                    <div className="overview_product_info_text">
                      <span className="overview_product_name">
                        {product.name}
                      </span>
                    </div>
                    <div className="overview_product_discount_text">
                      <span>
                        <del>220.000</del>
                      </span>
                    </div>
                    <div className="overview_img_product_price">
                      <span>220.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Carousel>
    </>
  );
};