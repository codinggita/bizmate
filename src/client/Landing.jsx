import React from "react";
import './style/landing.css';
import bizmate from './assets/bizmate.png';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addSlideOutDown: false
    };
  }

  componentDidMount() {
    // Set a timeout to add the second class after 2.5 seconds
    setTimeout(() => {
      this.setState({ addSlideOutDown: true });
    }, 2300);
  }

  render() {
    const { addSlideOutDown } = this.state;

    // Concatenate the classes based on the state
    const imageClasses = `animate__animated animate__zoomInDown landing-logo ${addSlideOutDown ? 'animate__slideOutDown' : ''}`;

    return (
      <div className="landing">
        <img src={bizmate} className={imageClasses} />
      </div>
    );
  }
}

export default Landing;
