import { useState } from "react";
import axios from "axios";



function ManagerForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("")

  const  handleSubmit = (e) => {
    e.preventDefault();
    const newManager = {
      title,
      price,
      description,
    };

    axios
      .post('http://localhost:5001/api/managers', newManager)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>




          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">CREATE</button>
          </div>
        </form>
      </div>
    </div> 
  );
}

export default ManagerForm;
