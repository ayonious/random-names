import Card from '@material-ui/core/Card';
import * as React from 'react';

import { database } from '../resources/Database';
import { CardWrapper } from '../styles/styles';
import { CustomButton } from './Utils';

interface Props {
  country: string;
}

interface State {
  currentName: string;
}

export default class CountryReults extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.state = { currentName: '' };
  }

  handleShuffle() {
    const index = Math.floor(
      Math.random() * Object.keys(database[this.props.country].names).length
    );
    const name = database[this.props.country].names[index];
    this.setState({ currentName: name });
  }

  render() {
    return (
      <div>
        <br />
        <CardWrapper>
          <Card square={true}> {this.state.currentName} </Card>
        </CardWrapper>
        <br />
        <div>
          <CustomButton onClick={this.handleShuffle} title={'Shuffle'} />{' '}
        </div>
      </div>
    );
  }
}
