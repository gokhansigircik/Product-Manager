import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ManagerDetail() {
  const { id } = useParams();
  const [manager, setManager] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/managers/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setManager(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  return (
    <div>
      <h1>Details:</h1>
      {manager && (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{manager.subtitle}</h4>
            <h5 className="card-title">Price:$ {manager.price}</h5>
            <h5 className="card-title">Description: {manager.description}</h5>
            {/* <p>{ manager.isComplete ? 'Completed.' : 'Not Completed.'}</p> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ManagerDetail;
