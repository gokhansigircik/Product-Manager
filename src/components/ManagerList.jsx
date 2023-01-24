import { Link } from 'react-router-dom';
 
function ManagerList({ managers }) {
  return (
    managers && managers.map(manager => {
      return (
        <div key={manager._id} className="card mb-3">
          <div className="card-body">
            <div className="form-check">
              <input 
              type="checkbox"
              name="isComplete"
              id="isComplete"
              className="form-check-input"
              checked={manager.isComplete}
              />
              <label htmlFor="isComplete"
              className="form-check-label">
                <Link to={`/managers/${manager._id}`}>{manager.subtitle}</Link>
              </label>
  
            </div>
          </div>
        </div>
      )
    })
  );
}

export default ManagerList;