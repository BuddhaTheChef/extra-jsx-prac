import React from 'react';

const Card = (props) => {
  return (
    <div className="ui card">
        <div className="content">{props.children}</div>
        <div className="extra content">
            <div className="ui two buttons">
                <div className="ui basic blue button">Accept</div>
                <div className="ui basic orange button">Decline</div>
            </div>
        </div>
    </div>
    )
}

export default Card