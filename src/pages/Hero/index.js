import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import { Loading, Owner, ComicsList } from './styles';

export default class Hero extends Component {
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
    this.state = {
      heroInfo: {},
      issues: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const hero = decodeURIComponent(match.params.heroName);

    const response = await api.get(
      `/v1/public/characters?name=${hero}&ts=2&${this.apiKey}`
    );
    const heroId = response.data.data.results[0].id;
    const heroInfo = response.data.data.results[0];
    const { thumbnail, name, description } = heroInfo;
    const img = `${thumbnail.path + this.size}.${thumbnail.extension}`;
    const data = {
      name,
      img,
      description,
    };

    const issues = await api.get(
      `/v1/public/characters/${heroId}/comics?ts=2&${this.apiKey}`
    );

    const comics = issues.data.data.results;

    this.setState({
      heroInfo: data,
      issues: comics,
      loading: false,
    });
  }

  render() {
    const { heroInfo, issues, loading } = this.state;

    if (loading) {
      return <Loading>Loading</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Back to hero search</Link>
          <img src={heroInfo.img} alt="" />
          <h1>{heroInfo.name}</h1>
          <p>{heroInfo.description}</p>
          <Link to={`/edithero/${encodeURIComponent(heroInfo.name)}`}>
            Edit this hero
          </Link>
        </Owner>

        <ComicsList>
          <h1>Comics List</h1>
          {issues.map(comic => (
            <li key={String(comic.id)}>
              <div>
                {/* <img
                  src={`${comic.thumbnail.path + this.size}.${
                    comic.thumbnail.extension
                  }`}
                  alt=""
                /> */}
                <strong>
                  <a href={comic.urls[0].url}>{comic.title}</a>
                </strong>
              </div>
            </li>
          ))}
        </ComicsList>
        <Footer>
          <p>Created by Marcelo Ritter</p>
        </Footer>
      </Container>
    );
  }
}
