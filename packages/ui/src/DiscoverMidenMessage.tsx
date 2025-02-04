import * as React from 'react';

import { MidenSVG } from './MidenSVG';

export const DiscoverMidenMessage = () => {
  return (
    <div className="wallet-adapter-modal-discover-miden-message">
      <MidenSVG />
      <h1>
        Discover
        <br />
        Polygon Miden
      </h1>
      <p>
        Experience the next evolution of blockchain technology with Polygon
        Miden. Install the Miden Wallet and access a seamless, decentralized
        ecosystem today.
      </p>
    </div>
  );
};
