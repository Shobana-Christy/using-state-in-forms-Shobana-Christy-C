import { useState } from "react";
import './formData.css'

export default function FormData() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,

        }))
    }

    const isFormEmpty = formData.name === "" || formData.email === "" || formData.feedback === "";


    return (
        <div className="form-container"> {/** container for both form and preview  */}
            <div className="table">{/** table  */}
                <h1 className="header1">User-Form</h1>
                <form>
                    <div className="row"> {/** row  */}
                        <div className="column">
                            <label>Name:</label>
                        </div>
                        <div className="column">
                            <input type="text" name="name" value={formData.name} required onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label>
                                Email:
                            </label></div>

                        <div className="column"><input type="text" name="email" required value={formData.email} onChange={handleChange} /></div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label>Feedback:</label>
                        </div>
                        <div className="column">
                            <textarea name="feedback" value={formData.feedback} required maxLength="200" onChange={handleChange} />
                            <p>Count: {formData.feedback.length}</p>

                        </div>
                    </div>
                    <div className="row submit-btn">
                        <button disabled={isFormEmpty}>Submit</button>
                    </div>
                </form>
                <div className="preview">
                    <h2>Preview</h2>
                    <p>Name:{formData.name}</p>
                    <p>Email:{formData.email}</p>
                    <p>Feedback:{formData.feedback}</p>
                </div>
            </div>
        </div>
    )
}
