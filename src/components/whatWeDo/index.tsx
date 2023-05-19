import React from 'react';

import ServiceCard from './card';
const services = [
  {
    title: 'Microlending',
    details:
      'Our micro-lending division offers short-term loans to individuals and businesses in need of financial assistance. This micro-loan product is designed to enable individuals with small business ventures to access loan facilities.',
  },

  {
    title: 'Bureau-de-change(BDC)',
    details:
      'We are licensed by the Central Bank of Nigeria to carry out Bureau de change services in Nigeria. We deal mainly in the three (3) major world currencies: American Dollars (USD), Great British Pounds (GBP) & Euros.',
  },
  {
    title: 'Investments',
    details:
      'If you have a lump sum of money to invest and desire amazing returns on it, then our fund placement product is perfect for you. You can earn more interest on your deposits from a period as short as 30 days to up to a full year.',
  },
  {
    title: 'Real Estate',
    details:
      'Our objective is to deliver value to our clients via economies of scale, while increasing our market share. This would help position us to gain broader access to markets, and in turn, improve our company’s performance and ....',
  },
  {
    title: 'Procurement',
    details:
      'Our procurement division provides sourcing services such as supplier identification, selection, and contract negotiation. We leverage on an extensive network of trusted suppliers and vendors to offer our clients high-quality goods ...',
  },
];

const WhatWeDo = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 md:gap-6 sm:gap-6 content-center">
      {services.map((service, index) => (
        <ServiceCard
          title={service.title}
          details={service.details}
          key={index}
        />
      ))}
    </div>
  );
};

export default WhatWeDo;
