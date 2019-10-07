import React, { Component } from 'react';
import { FaSuperpowers, FaSearch, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import { Form, SubmitButton, List, CardList } from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.apiKey = `apikey=284ad6a3cf5d0ddd664aba785be1a9ce&hash=3b0aadc03334ab9f750e95569451af41`;
    this.size = '/standard_fantastic';
    this.state = {
      newHero: '',
      heroesCards: [],
      heroes: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const response = await api.get(`/v1/public/characters?ts=2&${this.apiKey}`);
    const heroesInfo = response.data.data.results;

    this.setState({ heroesCards: heroesInfo });

    // const heroes = await localStorage.getItem('heroes');

    // if (heroes) {
    //   this.setState({ heroes: JSON.parse(heroes) });
    // }
  }

  // salvar os dados do localStorage
  // componentDidUpdate(_, prevState) {
  //   const { heroes } = this.state;

  //   if (prevState.heroes !== heroes) {
  //     localStorage.setItem('heroes', JSON.stringify(heroes));
  //   }
  // }

  handleInputChange = e => {
    this.setState({ newHero: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newHero, heroes } = this.state;

    const response = await api.get(
      `/v1/public/characters?name=${newHero}&ts=2&${this.apiKey}`
    );
    const heroInfo = response.data.data.results[0];
    const { thumbnail, name, description } = heroInfo;
    const img = `${thumbnail.path + this.size}.${thumbnail.extension}`;

    const data = {
      name,
      img,
      description,
    };

    this.setState({
      heroes: [...heroes, data],
      newHero: '',
      loading: false,
    });
  };

  render() {
    const { newHero, loading, heroes, heroesCards } = this.state;

    return (
      <Container>
        <h1>
          <FaSuperpowers />
          Comics
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search your hero"
            value={newHero}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaSearch color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {heroes.map(hero => (
            <li key={hero.name}>
              <img src={hero.img} alt="" />
              <h1>{hero.name}</h1>
              <Link to={`/hero/${encodeURIComponent(hero.name)}`}>
                Character Details
              </Link>
            </li>
          ))}
        </List>

        <CardList>
          {heroesCards.map(heroCard => (
            <li key={heroCard.id}>
              {' '}
              <img
                src={`${heroCard.thumbnail.path + this.size}.${
                  heroCard.thumbnail.extension
                }`}
                alt=""
              />
              <h1>{heroCard.name}</h1>
              <Link to={`/hero/${encodeURIComponent(heroCard.name)}`}>
                Character Details
              </Link>
            </li>
          ))}
        </CardList>
        <Footer>
          <p>Created by Marcelo Ritter</p>
        </Footer>
      </Container>
    );
  }
}
