import React from 'react';
import '../../assest/css/detail.css'; 

const Steps = ({ steps }) => {
  return (
    <div className="steps-container">
      <h2>Steps</h2>
      {steps.map((step, index) => (
        <div key={index} className="step-item">
          <div className="step-index">
            <div className="step-number">{index + 1}</div>
            <p className="step-description">{step.label}</p>
          </div>
          <div className="img">
          <img className="step-image" src={step.image} alt={`Step ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
