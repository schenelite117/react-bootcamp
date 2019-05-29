import React, { Component } from "react";
import SOCIAL_PROFILES from "../src/data/socialProfiles";

class SocialProfile extends Component {
  render() {
    const { icon, link } = this.props.socialProfile;

    return (
      <div style={{ width: 25, height: 25, margin: 5 }}>
        <a href={link}>
          <img
            src={icon}
            alt="social-profile"
            style={{
              width: 25,
              height: 25
            }}
          />
        </a>
      </div>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2 style={{ margin: 5 }}>Connect with me!</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          {SOCIAL_PROFILES.map(PROFILE => {
            {
              return <SocialProfile key={PROFILE.id} socialProfile={PROFILE} />;
            }
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
