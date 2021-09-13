/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';

import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';

import packages from "data/package"
import style from "style/package"
import styles from 'style/banner';
import { Button } from '@theme-ui/components';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { monthly, annual } = packages;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  })

const handlePricingPlan = (plan) => {
  if(plan === 'annual') {
    setState({ active: 'annual', pricingPlan: annual })
  } else {
    setState({ active: 'monthly', pricingPlan: monthly })
  }
}

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing'}}>
      <Container>
        <SectionHeader 
        slogan="Pricing Plan"
        title="Choose your pricing plan"
        />
        <Flex sx={styles.ButtonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
            className={state.active === 'monthly' ? 'active' : ''}
            type="button"
            aria-label
            >

            </button>
          </Box>
        </Flex>
      </Container>
    </section>
  );
}


