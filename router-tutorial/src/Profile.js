import React from 'react';

const data = {
  valhalla: {
    name: 'lee yu don',
    description: 'iOS lover',
  },
  gildong: {
    name: 'kil dong hong',
    description: 'lead character for novel "hong kil dong jeon"',
  },
};
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자!</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
