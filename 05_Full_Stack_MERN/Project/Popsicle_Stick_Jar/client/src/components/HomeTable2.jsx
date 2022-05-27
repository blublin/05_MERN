import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";

const HomeTable2 = (props) => {
    const { cats } = props;
    const [selectedOption, setSelectedOption] = useState(null);
    const { relation, r_type } = useParams();
    // const [menuOptions, setMenuOptions] = useState([]);

    // useEffect(() => {
    //     console.log("Cats on HomeTable2:", cats);
    //     if (cats) {
    //         cats.forEach((cat) => {
    //             const { alias, title } = cat;
    //             setMenuOptions({
    //                 ...menuOptions,
    //                 label: title,
    //                 value: alias,
    //             });
    //         });
    //     }
    // }, [props]);

    const handleChange = (event) => {
        console.log(`Option selected:`, event)
        // setSelectedOption()
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
                {/* <div>{menuOptions && <Select options={menuOptions} />}</div> */}
                <div className="mt-3 text-info">
                    {cats && (
                        <Select
                            
                            value={selectedOption}
                            placeholder="Optional: Choose a category"
                            onChange={handleChange}
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
            </div>
        </>
    );
};

export default HomeTable2;
