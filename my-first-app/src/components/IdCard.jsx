function IdCard(props) {
    return (
      <div className="profile-container">
        <img src={props.picture} alt={`${props.firstName} ${props.lastName}`}></img>
        <ul>
          <li>{props.lastName}</li>
          <li>{props.firstName}</li>
          <li>{props.gender}</li>
          <li>{props.height}</li>
          <li>{props.birth.toDateString()}</li>
        </ul>
      </div>
    );
  }
  
  export default IdCard;
  