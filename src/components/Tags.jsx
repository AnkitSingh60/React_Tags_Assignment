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

  return (
    <>
    <div className="container">
       {
        tags.map((tag) => (
            <div className="tags">
            <span className="input-text">{tag}</span>
            <span className="close">
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