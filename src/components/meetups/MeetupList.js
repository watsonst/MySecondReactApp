import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem 
        key={meetup.id} 
        id={meetup.id} 
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
//map props.meetup list into the jsx element MeetupItem. One MeetupItem per object in the meetups array.
//Needs(requires) to be configured with the key
//passing in indiviudal props above but could pass in the meetup as a whole, but then would need to destructure object in MeetupItem component
