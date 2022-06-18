import React from "react";
import {useSearchParams} from "react-router-dom";

const About = () => {
    const [searchParams] = useSearchParams();
    const detail = searchParams.get('detail') === 'true';

    return (
        <div>
            <h1>About</h1>
            <p>You could borrow items from woowacourse crews.
                you could freely register,delete and let crews borrow your items.</p>
            {detail && <p>Special Information for true query</p>}
        </div>
    )
}

export default About;