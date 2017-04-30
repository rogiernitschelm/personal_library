import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import gql from 'graphql-tag';
import fetchSongs from './queries/fetchSongs';

class SongList extends Component {
  static propTypes = { data: React.PropTypes.object };
  static defaultProps = { data: {} };

  onSongDelete(id) {
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  onSongDetailClick(id) {
    hashHistory.push(`/songs/${id}`);
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          {title}
          <i className="material-icons right" onClick={() => this.onSongDelete(id)}>
            delete
          </i>
          <i className="material-icons right" onClick={() => this.onSongDetailClick(id)}>
            play_arrow
          </i>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Dude, I am a loading indicator. Look at me spin!</div>;
    }

    return (
      <div>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

// No, we cannot insert multiple arguments
export default graphql(mutation)(graphql(fetchSongs)(SongList));
