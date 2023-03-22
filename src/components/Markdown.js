import React from 'react';
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import RehypeKatex from 'rehype-katex';
import RemarkGfm from 'remark-gfm';

import { Header1, Header2, Header3 } from './Headings';

import '../App.css';
import 'katex/dist/katex.min.css';
import './markdown.css';

function Markdown(props){

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(props.src)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [props.src]);
    
    return (
        <>
            <ReactMarkdown
                children={content}
                className="markdown"
                remarkPlugins={[RemarkMathPlugin, RemarkGfm]}
                rehypePlugins={[RehypeKatex]}
                components={{
                    h1: ({node, ...props}) => (
                        <div className='markdown-h1'>
                            <Header1 {...props} />
                            <hr className='markdown-hr' />
                        </div>
                    ),
                    h2: ({node, ...props}) => (
                        <div className='markdown-h2'>
                            <Header2 {...props} />
                            <hr className='markdown-hr' />
                        </div>
                    ),
                    h3: ({node, ...props}) => (
                        <div className='markdown-h3'>
                            <Header3 {...props} />
                        </div>
                    ),
                    ol: ({node, ...props}) => (
                        <div>
                            <ol className='markdown-ol' {...props} />
                        </div>
                    ),
                    ul: ({node, ...props}) => (
                        <div>
                            <ul className='markdown-ul' {...props} />
                        </div>
                    ),
                    p: ({node, ...props}) => (
                        <div>
                            <p className='markdown-p' {...props} />
                        </div>
                    )
                }}
            />
        </>
    )
}

export default Markdown;
