import React from "react";

export default class UpcomingEventComponent extends React.Component {
  render() {
    let event = this.props.event;

    let [meetupName, startDate,, description,,url] = event.description.split("\n");

    return (
      <div className="event">
        <h4>{meetupName} - {event.summary}</h4>
        <p>{startDate}</p>
        <p>{event.location}</p>
        <p>{description}</p>
        <p>
          <a href={url} target="_blank">
            {url}
          </a>
        </p>
      </div>
    );
  }
}