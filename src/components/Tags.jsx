import React, { useState } from 'react'

const Tags = () => {
    const [tags, setTags] = useState([])

    const handleKeyDown = (event) => {
        if(event.key !== "Enter") return;

        const tagInput = event.target.value;

        if(!tagInput) return;

        setTags([...tags, tagInput]);

        event.target.value = ""
    }

    const handleCloseTag = (index) => {
        // console.log("hey kiddo");
        console.log('index:', index)
        setTags(tags.filter((el, id) => id !== index))
       
    }

  return (
    <>
    <div className="container">
       {
        tags.map((tag, index) => (
            <div className="tags" key={index}>
            <span className="input-text">{tag}</span>
            <span className="close" onClick={() => handleCloseTag(index)}>
            x
            </span>
        </div>
        ))
       }
        <input onKeyDown={handleKeyDown} className="addInput" type="text" placeholder="add a tag..." />
        </div>
        <p className="label_p">Hit 'Enter' to add a topic</p>
    </>
  )
}

export default Tags