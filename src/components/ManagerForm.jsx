import { useState } from "react";
import axios from "axios";



function ManagerForm({ setLoaded}) {
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("")

  const  handleSubmit = (e) => {
    e.preventDefault();
    // setTask('')
    const newManager = { 
      subtitle,
      price,
      description,
    };

    axios
      .post('http://localhost:5001/api/managers', newManager)
      .then(res => {
        console.log(res.data)
        setLoaded(false);

      })
      .catch(err => console.log(err));
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="subtitle" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              className="form-control"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
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
