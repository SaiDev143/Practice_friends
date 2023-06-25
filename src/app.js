import React, { useEffect, useState } from "react";

const Final = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    amount: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    contactNumber: "",
  });
  useEffect(() => {}, [isOrderPlaced]);

  const handleOrderPlacement = () => {
    setIsOrderPlaced(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const save = {
      name: formData.name,
      surname: formData.surname,
      amount: formData.amount,
      cardNumber: formData.cardNumber,
      expiryDate: formData.expiryDate,
      cvv: formData.cvv,
      contactNumber: formData.contactNumber,
    };
    setUsersData((prevData) => [...prevData, save]);
  };

  const handleBack = () => {
    setIsOrderPlaced(false);
    setUsersData([]);
  };
  const handledelete = (index) => {
    setUsersData(
      usersData.filter((eachuser, i) => {
        return i !== index;
      })
    );
  };
  const refresh = () => {
    setFormData({
      name: "",
      surname: "",
      amount: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      contactNumber: "",
    });
    setUsersData([]);
  };

  return (
    <div>
      {isOrderPlaced ? (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name..."
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Enter Surname..."
              value={formData.surname}
              onChange={(e) =>
                setFormData({ ...formData, surname: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter Amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="number"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 1234 5678"
              value={formData.cardNumber}
              onChange={(e) =>
                setFormData({ ...formData, cardNumber: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="number"
              id="expiryDate"
              name="expiryDate"
              placeholder="05/2022"
              value={formData.expiryDate}
              onChange={(e) =>
                setFormData({ ...formData, expiryDate: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="number"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={(e) =>
                setFormData({ ...formData, cvv: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="number"
              id="contactNumber"
              name="contactNumber"
              placeholder="1234567890"
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({ ...formData, contactNumber: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <button onClick={handleBack} className="btn">
              Back
            </button>
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
            <button onClick={refresh}>Refresh</button>
          </div>
        </form>
      ) : (
        <div>
          <p>Order placed! Click here to proceed to payments.</p>
          <button onClick={handleOrderPlacement} className="btn btn-order">
            Click here
          </button>
        </div>
      )}
      <div className="users-data">
        {usersData.map((eachuser, index) => {
          const {
            name,
            surname,
            amount,
            cardNumber,
            expiryDate,
            cvv,
            contactNumber,
          } = eachuser;
          return (
            <ul key={index}>
              <h3>User{index}</h3>
              <li>Name: {name}</li>
              <li>Surname: {surname}</li>
              <li>Amount: {amount}</li>
              <li>Card Number: {cardNumber}</li>
              <li>Expiry Date: {expiryDate}</li>
              <li>Cvv: {cvv}</li>
              <li>Contact Number: {contactNumber}</li>
              <button onClick={() => handledelete(index)}>delete</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Final;
