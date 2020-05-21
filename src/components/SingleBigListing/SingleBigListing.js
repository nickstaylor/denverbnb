import React from "react";
import "./SingleBigListing.css";
import starOutline from "../../images/star-outline.svg";
import starFilled from "../../images/pinkStar.png";

import { Link } from "react-router-dom";

class SingleBigListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: this.props.favorite,
      starFilled: starFilled,
      starOutline: starOutline,
      starImage: this.props.favorite ? "starFilled" : "starOutline",
    };
  }

  favoriteThisListing = (event) => {
    const favoritedListing = {
      listing_id: this.props.listing_id,
    };

    let imageName;
    this.state.isFavorited
      ? (imageName = "starOutline")
      : (imageName = "starFilled");
    this.setState({
      isFavorited: !this.state.isFavorited,
      starImage: imageName,
    });
    this.props.favoriteListing(favoritedListing);
  };

  render() {
    const { user } = this.props;
    const imagePathA = `/repoImages/${this.props.listing_id}_a.jpg`;
    const imagePathB = `/repoImages/${this.props.listing_id}_b.jpg`;
    const imagePathC = `/repoImages/${this.props.listing_id}_c.jpg`;
    const features = this.props.details.features.map((feature, index) => {
      return <p className="someFeatures" key={index}>{`-${feature}`}</p>;
    });

    return (
      <div className="entireSingleBigListing">
        <div className="area-header">
          <h2>
            <Link to="/areas">Denver Neighborhoods</Link> >
            <Link to={`/areas/${this.props.area_id}/listings`}>
              {this.props.areaName}
            </Link>{" "}
            > {this.props.name}
          </h2>
          <h4 className="personal-greeting">
            Welcome, <span>{user.userName}</span>. Find a great{" "}
            {user.userPurpose === "other" ? (
              ""
            ) : (
              <span>{user.userPurpose}</span>
            )}{" "}
            rental in Denver!
          </h4>
        </div>
        <section className="big-listing-info">
          <aside className="big-listing-aside">
            <section className="left-side-header">
              <h3 className="bigListingName">{this.props.name}</h3>
              <img
                id={this.props.listing_id}
                src={this.state[this.state.starImage]}
                className="favorite-star-big-listing"
                alt="favorite-big-listing"
                tabIndex="0"
                role="button"
                onClick={this.favoriteThisListing}
              />
            </section>
            <div className="bigListingImageContainer">
              <img
                className="bigListingImage"
                src={imagePathA}
                alt={this.props.name}
              />
              <img
                className="bigListingImage"
                src={imagePathB}
                alt={this.props.name}
              />
              <img
                className="bigListingImage"
                src={imagePathC}
                alt={this.props.name}
              />
            </div>
          </aside>
          <main className="big-listing-main">
            <section className="right-side-header">
              <h3 className="bigListingBedBathCount">
                {`${this.props.details.beds}bd(s) ${this.props.details.baths}ba(s)`}
                <span className="costPerNight">
                  {`$${this.props.details.cost_per_night}/night`}
                </span>
              </h3>
            </section>
            <p className="areaInfo">{`${this.props.address.street}, Denver, CO, ${this.props.address.zip}`}</p>
            <p className="featureTitle">
              This listing has the following features:
            </p>
            {features}
          </main>
        </section>
      </div>
    );
  }
}

export default SingleBigListing;
