import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";

  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      ImageURL: "https://www.exisglobal.com/wp-content/uploads/2023/03/open-closed-office-space-pros-cons.jpg"
    },
    {
      Name: "WeWork",
      Rent: 75000,
      Address: "Hyderabad",
      ImageURL: "https://cdn.sanity.io/images/uqxwe2qj/production/62db3c671745e98cb27690dff96f8033d2bb7f35-2048x1010.jpg?q=80&auto=format&fit=clip&w=1440"
    },
    {
      Name: "Regus",
      Rent: 90000,
      Address: "Bangalore",
      ImageURL: "https://plus.unsplash.com/premium_photo-1661879435429-a396d927c686?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    
    {
      Name: "Smartworks",
      Rent: 80000,
      Address: "Mumbai",
      ImageURL: "https://images.unsplash.com/photo-1631193816258-28b44b21e78b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      Name: "91Springboard",
      Rent: 60000,
      Address: "Pune",
      ImageURL: "https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{element} at Affordable Range</h1>
      <hr />

      {officeSpaces.map((item, index) => {
        const rentStyle = {
          color: item.Rent <= 60000 ? "red" : "green"
        };

        return (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px"
            }}
          >
            <img
              src={item.ImageURL}
              alt={item.Name}
              width="50%"
              height="300px"
              style={{ borderRadius: "8px", objectFit: "cover" }}
            />
            <h2>Name: {item.Name}</h2>
            <h2 style={rentStyle}>Rent: ₹ {item.Rent}</h2>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;