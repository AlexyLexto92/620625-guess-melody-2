import React, { PureComponent } from 'react';
import { connect } from "react-redux";

export class QuestionError extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { step } = this.props;
    console.log(step);
    return (
      <div className="wrong"></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step,
  }
};



export default connect(mapStateToProps)(QuestionError);