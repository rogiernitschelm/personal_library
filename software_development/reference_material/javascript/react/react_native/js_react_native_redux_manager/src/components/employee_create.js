import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { EmployeeUpdate, EmployeeCreate } from '../actions';
import EmployeeForm from './employee_form';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>

        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  EmployeeUpdate, EmployeeCreate
})(EmployeeCreate);
