import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSong from './queries/fetchSong';
import LyricsCreate from './lyrics_create';
import LyricsList from './lyrics_list';

class SongDetail extends Component {
  static propTypes = { data: React.PropTypes.object };
  static defaultProps = { data: {} };

  render() {
    const { song } = this.props.data;

    if (!song) { return <div>Loading now...</div>; }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricsCreate songId={this.props.params.id} />
        <LyricsList lyrics={song.lyrics} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
