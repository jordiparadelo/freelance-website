"use client";

import Image from "next/image";
import { useRef } from "react";
import useTabsAnimation from "./animation";

type TabItem = {
  title: string;
  description: string;
  image: string;
  className?: string;
};

const Tabs = ({ data, className }: { data: TabItem[]; className?: string }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const { activeTab, handleTabChange, isTransitioning } =
    useTabsAnimation(componentRef);

  return (
    <div
      className={`tabs ${className}`}
      data-tabs
      ref={componentRef}
      // data-tabs-animation="true"
      data-tabs-animation={isTransitioning}
    >
      <div
        className="tabs__menu"
        aria-label="Services"
        role="tablist"
        aria-labelledby="services"
        data-tab-menu
      >
        {data.map((item, index) => (
          <button
            type="button"
            onClick={() => handleTabChange(index)}
            className="tabs__link"
            aria-label={item.title}
            key={item.title}
            aria-labelledby={`services-${index}`}
            data-tab-active={index === activeTab}
            aria-selected={index === activeTab}
            role="tab"
            data-tab-link
          >
            <Image
              src={item.image}
              alt={item.title}
              width={64}
              height={64}
              loading="lazy"
            />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <div
        className="tabs__panel"
        role="tabpanel"
        aria-labelledby={`${data[activeTab].title}`}
        data-tab-panel
      >
        {data.map((item, index) => (
          <div
            data-tab-index={index}
            data-tab-active={index === activeTab}
            className="tabs__items"
            key={item.title}
            role="tabpanel"
            data-tab-item
          >
            <div className="tabs__item-image" data-tab-image>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="tabs__item-content" data-tab-content>
              <h3 className="tabs__item-title">{item.title}</h3>
              <p className="tabs__item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
