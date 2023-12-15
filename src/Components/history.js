import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './navbar';

function History() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  function getData() {
    axios.get('https://656a163bde53105b0dd81fc9.mockapi.io/student/registration/')
    .then((res) => {
    console.log(res.data);
    setData(res.data);
});

  }

  const handleDelete = (id) => {
    axios.delete(`https://656a163bde53105b0dd81fc9.mockapi.io/student/registration/${id}`)
    .then(() => {
      getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .filter((eachData) =>searchQuery.toLowerCase() === ''? eachData: eachData.firstName.toLowerCase().includes(searchQuery))
    .slice(indexOfFirstItem, indexOfLastItem);

  const renderItems = currentItems.map((eachData) => (
    <tbody key={eachData.id}>
      <tr>
        <th>{eachData.id}</th>
        <td>{eachData.firstName}</td>
        <td>{eachData.lastName}</td>
        <td>{eachData.mobile}</td>
        <td>{eachData.altMobile}</td>
        <td>{eachData.gender}</td>
        <td>{eachData.dob}</td>
        <td>{eachData.fatherName}</td>
        <td>
          <Link to={`/update/${eachData.id}`}>
            <button className="btn btn-success">Edit</button>
          </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number} className={number === currentPage ? 'page-item active' : 'page-item'}>
      <button onClick={() => setCurrentPage(number)} className="page-link">
        {number}
      </button>
    </li>
  ));

  return (
    <div className="container">
        <Menu />
      <div className="row mt-2">
        <div className="col-md-12 d-flex justify-content-between align-items-center">
          <h1></h1>
          <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

          <Link to={'/reg'}>
            <button className="btn btn-info">Create</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile</th>
                <th>Alternate mobile</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Father's Name</th>
              </tr>
            </thead>
            {renderItems}
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <nav>
            <ul className="pagination">
              {renderPageNumbers}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default History;
