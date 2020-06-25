import React from 'react';
import PropTypes from 'prop-types';
import Accordion from './Accordion';

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <h2>Home</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, conseconsectetur.
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, conseconsectetur.

                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, conseconsectetur.

                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, conseconsectetur.

                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, conseconsectetur.

                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, conseconsectetur.

                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, conseconsectetur.

                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.
            </p>
            <Accordion heading="Company Info">
                <div className="company-info">
                    <ul>
                        <li>Goals</li>
                        <li>Objective</li>
                        <li>Future</li>
                    </ul>
                </div>
            </Accordion>
        </div>
    );
}

export default Home;