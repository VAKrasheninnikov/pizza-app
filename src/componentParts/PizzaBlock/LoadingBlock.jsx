import React from 'react'
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
    return (
        <ContentLoader 
        className='pizza-block'
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          
        >
          <circle cx="138" cy="134" r="116" /> 
          <rect x="4" y="265" rx="6" ry="6" width="273" height="25" /> 
          <rect x="4" y="300" rx="6" ry="6" width="274" height="74" /> 
          <rect x="4" y="382" rx="6" ry="6" width="88" height="42" /> 
          <rect x="236" y="433" rx="0" ry="0" width="1" height="6" /> 
          <rect x="139" y="382" rx="20" ry="20" width="139" height="44" />
        </ContentLoader>
      ) 
}

export default LoadingBlock;
