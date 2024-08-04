import React, { useState } from 'react';
function Form() {

    const [form, setForm] = useState({ name: '', email: '' });
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.email) {
            setData([...data, form]);
            setForm({ name: '', email: '' });
        }
    };

    const handleDelete = (index) => {
        setData(data.filter((_, i) => i !== index));
    };


    return (
        <div className="container my-5">
            <h4>Add Contact</h4>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>

            <ul className="list-group">
                {data.map((entry, index) => (
                    <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                <span
                                    className="avatar bg-secondary rounded-circle text-white d-flex justify-content-center align-items-center"
                                    style={{ width: '40px', height: '40px' }}
                                >
                                    {entry.name.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div>
                                <div className="fw-bold">{entry.name}</div>
                                <div>{entry.email}</div>
                            </div>
                        </div>
                        <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Form
