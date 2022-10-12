import React, {useState} from 'react'


function ControlledFormHooked() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("website");
    const [comments, setComments] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Please fill in this form</h2>
                    <label htmlFor='id-name'>Your name:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        id="id-name"
                    />
                </div>
                <div>
                    <label htmlFor='id-category'>Query category:</label>
                    <select id='id-category' onChange={(e) => setCategory(e.target.value)} value={category} name='category'>
                        <option value="website">Website issue</option>
                        <option value="order"> Order Issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-comments'>Comments: </label>
                    <textarea id='id-comments' onChange={(e) => setComments(e.target.value)} value={comments} name="comments" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooked