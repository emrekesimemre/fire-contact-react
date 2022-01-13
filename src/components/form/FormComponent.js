import React from 'react';
import { Grid, Form, Segment, Button } from 'semantic-ui-react';
import { options } from '../../utils/constants';

const FormComponent = ({ info, setInfo, handleFormSubmit }) => {

  const handleInputChange = (e) => {
    // const {name} = e.target.name
    // const {value} = e.target.value
    const { name, value } = e.target;
    // console.log(e.target);
    setInfo({ ...info, [name]: value });
  };

  const handleOptionsChange = (e, values) => {
    const { name, value } = values;
    // console.log(values);
    setInfo({...info, [name]: value.toUpperCase() });
    // console.log(e,values);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 300 }}>
        <div className="ui piled segments">
          <div className="ui segment brand">
            <a
              href="https://github.com/emrekesimemre"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>{'<EKESIM/> '}</code>
            </a>
            <span className="design header">design</span>
          </div>
        </div>
        <h2 className="contact-header">Add Contact</h2>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              onChange={handleInputChange}
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Name"
              required
              value={info.username}
            />
            <Form.Input
              onChange={handleInputChange}
              fluid
              name="phoneNumber"
              icon="phone"
              iconPosition="left"
              placeholder="Phone Number"
              required
              value={info.phoneNumber}
            />
            <Form.Dropdown
              onChange={handleOptionsChange}
              options={options}
              placeholder="Gender"
              name="gender"
              fluid
              selection
              required
              value={info.gender.toUpperCase()}
            />
            <Button color="teal" fluid size="large">
              Add
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default FormComponent;
