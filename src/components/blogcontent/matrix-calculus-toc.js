import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './blogcontent.css';

function MatrixCalculusTOC() {
    return (
        <>
            <div className="toc_container">
                <p className="toc_title">List of Articles in this Series</p>
                <ul className="toc_list">
                    <li>
                        <Link to="/blog/matrix-calculus-preface">Chapter 0 | Preface</Link>
                    </li>
                    <li>
                        <Link to="/blog/matrix-calculus-part-1">Chapter 1 | Preliminaries</Link>
                    </li>
                    <li>
                        <Link to="/blog/matrix-calculus-part-2">
                            Chapter 2 | The Total Derivative
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MatrixCalculusTOC;
