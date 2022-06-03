import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import axios from "axios";

const HomeTable2 = (props) => {
    const { cats } = props;
    const [selectedCat, setSelectedCat] = useState(null);
    const [inputOptions, setInputOptions] = useState("");
    const [location, setLocation] = useState();
    const { relation, r_type } = useParams();
    // const [menuOptions, setMenuOptions] = useState([]);

    const searchHandler = (event) => {
        event.preventDefault();
        let terms = `${relation}`;
        inputOptions.split(",").forEach((word) => {
            word.trim();
            terms += ` ${word}`;
        });
        let data = {
            term: terms,
            location,
            sort_by: "relevance",
            limit: 50,
        };
        if (selectedCat) data.categories = selectedCat;
        
        axios
            .post("http://localhost:8000/api/yelp/ideas", data)
            .then(ideas => console.log("Successful idea find", ideas.data))
            .catch(err => console.log("Failed find", err));
    };

    return (
        <>
            <p className="text-center">
                (Click on a colorful activity header or footer to get started!)
            </p>
            <div className="mainTable table table-borderless my-auto mx-auto w-auto text-center table-bg">
                <button
                    type="button"
                    className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                    style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        color: "black",
                    }}
                >
                    <strong>
                        Currently Selected: {r_type} {relation}
                    </strong>
                </button>
                <div className="form-group formElement my-4">
                    <h3 className="text-light mb-2" for="loc">
                        Enter zipcode of area for activity
                    </h3>
                    <input
                        className="form-control m-auto inputFocus"
                        id="loc"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group formElement my-4">
                    <h3 className="text-light mb-2" for="iOpt">
                        Enter general ideas as a comma, separated list
                    </h3>
                    <p className="text-danger">rock climbing, indoors</p>
                    <input
                        className="form-control m-auto inputFocus"
                        id="iOpt"
                        type="text"
                        value={inputOptions}
                        onChange={(e) => setInputOptions(e.target.value)}
                    />
                </div>
                {/* <div>{menuOptions && <Select options={menuOptions} />}</div> */}
                <div className="mt-3 text-info">
                    {cats && (
                        <Select
                            value={selectedCat}
                            placeholder="Optional: Choose a category"
                            onChange={option => setSelectedCat(option.value)}
                            options={props.cats.map((cat, index) => {
                                return {
                                    label: cat.title,
                                    value: cat.alias,
                                    key: index,
                                };
                            })}
                        />
                    )}
                </div>
                <div>
                    <input
                        type="submit"
                        className="shadow btn border btn-default bg-success text-light"
                        value="Search"
                        onClick={searchHandler}
                    />
                </div>
            </div>
        </>
    );
};

export default HomeTable2;
