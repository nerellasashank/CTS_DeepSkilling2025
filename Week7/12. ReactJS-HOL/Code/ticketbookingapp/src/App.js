import React, { Component } from 'react';

// Login button component
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout button component
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Guest page component
function GuestPage() {
  return (
    <div>
      <h2>Please sign up.</h2>
      <p>Flight details for guests:</p>
      <ul>
        <li>Flight: New York to London</li>
        <li>Departure: 10:00 AM</li>
        <li>Arrival: 8:00 PM</li>
      </ul>
    </div>
  );
}

// User page component with working Book Ticket button
function UserPage() {
  const handleBookTicket = () => {
    alert('Ticket booked successfully!');
  };

  return (
    <div>
      <h2>Welcome back!</h2>
      <p>You can now book your tickets.</p>
      <button onClick={handleBookTicket}>Book Ticket</button>
    </div>
  );
}

// Main App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    let page;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      page = <UserPage />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      page = <GuestPage />;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        {button}
        <hr />
        {page}
      </div>
    );
  }
}

export default App;