import React from "react";

function Details({ selectedUser }) {
  const { name, picture, location, gender } = selectedUser;
  return (
    <>
      <div key={name} className="details-container">
        {/* Avatar div */}
        <div className="details-avatar">
          <img className="details-avatar-img" src={picture.large} alt="Name" />
        </div>
        {/* Info div */}
        <div className="details-info">
          <h1>{`${name.title}. ${name.first} ${name.last}`}</h1>
          <p className="details-info-paratag">
            {`${location.street.number}, ${location.street.name}, ${location.city}, ${location.state}, ${location.country}, ${location.postcode} ${location.timezone.offset} - ${location.timezone.description}`}
            <small className="detail-info-paratag-gender">{gender}</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;
