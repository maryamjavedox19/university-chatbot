import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0', // Adjust padding as needed
    textAlign: 'center',
    // width: '90vw',
  };

  const gridContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Allow items to wrap to the next line

  };

  const columnStyle = {
    flex: '0 1 calc(33.3333% - 20px)', // Adjust width and spacing as needed
    margin: '10px',
  };
  const ulStyle = {
    margin: '0', // Remove margin from ul
    padding: '0', // Remove padding from ul
    listStyle: 'none', // Remove list styles (bullet points)
  };

  return (
    <footer style={footerStyle}>
      <div className='container' style={gridContainerStyle}>
        {/* 1st column */}
        <div className='footer-about' style={columnStyle}>
          <h6>Our University</h6>
          <ul style={ulStyle}>
            <li>About us</li>
            <li>Contact us</li>
            <li>(92-21) 99261261-8</li>
            <li>registrar@neduet.edu.pk</li>
          </ul>
        </div>
        {/* 2nd column */}
        <div className="footer-subscribe" style={columnStyle}>
          <h6>Academics</h6>
          <ul style={ulStyle}>
            <li>Faculties & Departments</li>
            <li>Academic Calender</li>
            <li>Academic Programmes</li>
            <li>Advanced Studies Research Board</li>
            <li>Engr. Abul Kalam Library</li>
            <li>Teaching System</li>
          </ul>

        </div>
        {/* 3rd column */}
        <div className="footer-contact" style={columnStyle}>
          <h6>Studying At NED</h6>
          <ul style={ulStyle}>
            <li>How To Apply?</li>
            <li>What Do I Need?</li>
          </ul>
        </div>
      </div>
      {/* <div>
        <p>&copy; {new Date().getFullYear()} University. All Rights Reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;

