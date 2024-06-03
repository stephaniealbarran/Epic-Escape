import React from 'react';
 

const Card = ({ id }) => (
  <div className="card" id={`card-${id}`}>
    <input type="checkbox" className="open-card" id={`open-card-${id}`} defaultChecked />
    <label className="open-card-label" htmlFor={`open-card-${id}`}></label>
    <input type="checkbox" className="card-toggle" id={`card-toggle-${id}`} />
    <label className="card-toggle-label" htmlFor={`card-toggle-${id}`}></label>
    <div className="card-image"></div>
    <div className="card-header">
      <h2>Choose<br />your way</h2>
    </div>
    <div className="card-content left-content">
      <h3>Phasellus bibendum semper</h3>
      <p>Aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam.</p>
      <p>Put aliquip ex ea commodo consequat. Neque porro quisquam est qui dolorem ipsum</p>
      <a className="card-button" href="#">Read more</a>
    </div>
    <div className="card-content right-content">
      <h3>Curabitur fermentum purus</h3>
      <p>Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu nec ante.</p>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
      <a className="card-button" href="#">Read more</a>
    </div>
    <div className="card-footer">
      <a href="#">Discover more</a>
    </div>
  </div>
);

const App = () => (
  <div className="card-container">
    <Card id="1" />
    <Card id="2" />
    <Card id="3" />
  </div>
);

export default App;
