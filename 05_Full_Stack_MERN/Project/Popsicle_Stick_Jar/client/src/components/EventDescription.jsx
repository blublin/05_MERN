import React from "react";

const EventDescription = (props) => {
    const { description } = props;

    return (
        <div className="col-9">
            {/* <!-- Push content left towards short event info --> */}
            <table className="table table-borderless border border-dark w-auto my-auto mx-auto">
                <thead>
                    <tr>
                        <th>Description:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EventDescription;
