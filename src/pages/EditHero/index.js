import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPen, FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';

import api from '../../services/api';
import { Form, SubmitButton, Owner } from './styles';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

export default class EditHero extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        heroName: PropTypes.string,
      }),
    }).isRequired,
  };

  constructor() {
    super();
    this.apiKey = `apikey=284ad6a3cf5d0ddd664aba785be1a9ce&hash=3b0aadc03334ab9f750e95569451af41`;
    this.size = '/standard_fantastic';
    this.state = {
      heroesEdit: [],
      newHero: [],
      newInput: '',
      newInput2: '',
      loading: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const hero = decodeURIComponent(match.params.heroName);

    const response = await api.get(
      `/v1/public/characters?name=${hero}&ts=2&${this.apiKey}`
    );
    const heroInfo = response.data.data.results[0];
    const { name, description } = heroInfo;
    const data = {
      name,
      description,
    };
    this.setState({ heroesEdit: data });
  }

  handleInputChange = e => {
    this.setState({ newInput: e.target.value });
  };

  handleInputChange2 = e => {
    this.setState({ newInput2: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { newInput, newInput2 } = this.state;
    const editedHero = {
      name: newInput,
      description: newInput2,
    };
    this.setState({
      newHero: editedHero,
      newInput: '',
      newInput2: '',
    });
  };

  render() {
    const { loading, heroesEdit, newInput, newInput2, newHero } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <h1>Editing: {heroesEdit.name}</h1>
          <p>New name</p>
          <input
            type="text"
            placeholder="New name"
            value={newInput}
            onChange={this.handleInputChange}
          />
          <p>New description</p>
          <input
            type="text"
            placeholder="New description"
            value={newInput2}
            onChange={this.handleInputChange2}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPen color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        <Owner>
          <Link to="/">Back to hero search</Link>
          <h1>{newHero.name}</h1>
          <p>{newHero.description}</p>
        </Owner>
        <Footer>
          <p>Created by Marcelo Ritter</p>
        </Footer>
      </Container>
    );
  }
}
