import React from 'react';
import InfiniteScroll from '../animations/InfiniteScroll';

const companies = [
  { 
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Meta',
    logo: 'https://images.unsplash.com/photo-1642952469120-eed4b65104be?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Amazon',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1642159534301-63dd82982c63?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Netflix',
    logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

const CompanyLogos = () => {
  const logoContent = companies.map((company) => (
    <div
      key={company.name}
      className="flex items-center justify-center mx-8 grayscale hover:grayscale-0 transition-all duration-300"
    >
      <img
        src={company.logo}
        alt={company.name}
        className="h-12 object-contain"
      />
    </div>
  ));

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-semibold text-gray-900 mb-8">
          Our Graduates Work At Leading Companies
        </h3>
        <InfiniteScroll speed="slow">
          {logoContent}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default CompanyLogos;