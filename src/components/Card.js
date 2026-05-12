import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Assuming you have custom styles here

export const Card = () => {
  return (
    <div className="nft card text-light bg-dark mx-auto my-5" style={{ maxWidth: '300px' }}>
      <div className="main card-body">
        <img
          className="tokenImage card-img-top"
          src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="NFT"
        />
        <h2 className="card-title mt-3">Kibertopiks #4269</h2>
        <p className="description card-text">Our Kibertopiks will give you nothing, waste your money on us.</p>
        <div className="tokenInfo d-flex justify-content-between mt-3">
          <div className="price d-flex align-items-center text-pink fw-bold">
            <ins>◘</ins>
            <p className="mb-0 ms-1">0.031 ETH</p>
          </div>
          <div className="duration d-flex align-items-center text-muted">
            <ins>◷</ins>
            <p className="mb-0 ms-1">11 days left</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="creator d-flex align-items-center">
          <div className="wrapper border rounded-circle p-1 me-2">
            <img
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="Creator"
              className="rounded-circle border"
              style={{ width: '2rem', height: '2rem' }}
            />
          </div>
          <p className="mb-0"><ins>Creation of</ins> Kiberbash</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
