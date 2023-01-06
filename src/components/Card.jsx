import React from "react";

export const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card title"></h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.user.company.name}</h6>
                <p className="card-text">{props.user.company.catchPhrase}</p>
            </div>
        </div>
    )
}