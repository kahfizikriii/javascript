import React from "react";

function ProfileCard({ name, photo, bio, skills }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "250px",
    margin: "10px auto",
    textAlign: "center",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  };

  return (
    <div style={cardStyle}>
      <img src={photo} alt={name} style={imgStyle} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <h4>Keahlian:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}> {skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
