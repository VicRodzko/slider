import React from 'react';
import { connect } from 'react-redux';

import { switchingTask } from '../actions';
import VisibleItems from './visibleItems/VisibleItems';
import SwitchPanel from './switchPanel/SwitchPanel';
import './Slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idElemFirst: 0,
      idElemSecond: 1,
      idElemThird: 2,
      intervalID: '',
      mouseInSlider: false,
      cssClass: 'rotateLeft',
      cssClassCnt: 'cntSliderFirst',
      countSlider: 1,
    };

    this.timer = this.timer.bind(this);
    this.nextSlider = this.nextSlider.bind(this);
    this.prevSlider = this.prevSlider.bind(this);
    this.clearInt = this.clearInt.bind(this);
    this.upInt = this.upInt.bind(this);
  }

  componentWillMount() {
    this.props.switchingTask(
      this.state.idElemFirst,
      this.state.idElemSecond,
      this.state.idElemThird
    );
  }

  componentDidMount() {
    this.upInt();
  }

  nextSlider() {
    let countFirst;
    if (this.state.idElemThird === 0) {
      countFirst = 1;
    } else if (this.state.idElemThird === 1) {
      countFirst = 2;
    } else if (this.state.idElemThird === 2) {
      countFirst = 3;
    } else if (this.state.idElemThird === this.props.data.length - 3) {
      countFirst = this.props.data.length - 2;
    } else if (this.state.idElemThird === this.props.data.length - 2) {
      countFirst = this.props.data.length - 1;
    } else {
      countFirst =
        this.state.idElemFirst + 3 >= this.props.data.length - 1 ? 0 : this.state.idElemFirst + 3;
    }
    let countSecond = countFirst + 1 >= this.props.data.length ? 0 : countFirst + 1;
    let countThird = countSecond + 1 >= this.props.data.length ? 0 : countSecond + 1;

    let cssClass = this.state.cssClass === 'rotateLeft' ? 'rotateRight' : 'rotateLeft';
    let cssClassCnt =
      this.state.cssClassCnt === 'cntSliderFirst' ? 'cntSliderTwo' : 'cntSliderFirst';
    let countSlider =
      this.state.countSlider + 1 > Math.ceil(this.props.data.length / 3)
        ? 1
        : this.state.countSlider + 1;

    this.setState({
      idElemFirst: countFirst,
      idElemSecond: countSecond,
      idElemThird: countThird,
      cssClass: cssClass,
      cssClassCnt: cssClassCnt,
      countSlider: countSlider,
    });
    this.props.switchingTask(countFirst, countSecond, countThird);
  }

  prevSlider() {
    let countThird;
    if (this.state.idElemFirst === 0) {
      countThird = this.props.data.length - 1;
    } else if (this.state.idElemFirst === 1) {
      countThird = 0;
    } else if (this.state.idElemFirst === 2) {
      countThird = 1;
    } else {
      countThird = this.state.idElemFirst - 1;
    }
    let countSecond = countThird - 1 < 0 ? this.props.data.length - 1 : countThird - 1;
    let countFirst = countSecond - 1 < 0 ? this.props.data.length - 1 : countSecond - 1;

    let cssClass = this.state.cssClass === 'rotateLeft' ? 'rotateRight' : 'rotateLeft';
    let cssClassCnt =
      this.state.cssClassCnt === 'cntSliderFirst' ? 'cntSliderTwo' : 'cntSliderFirst';
    let countSlider =
      this.state.countSlider - 1 < 1
        ? Math.ceil(this.props.data.length / 3)
        : this.state.countSlider - 1;

    this.setState({
      idElemFirst: countFirst,
      idElemSecond: countSecond,
      idElemThird: countThird,
      cssClass: cssClass,
      cssClassCnt: cssClassCnt,
      countSlider: countSlider,
    });
    this.props.switchingTask(countFirst, countSecond, countThird);
  }

  clearInt() {
    this.setState({ mouseInSlider: true });
    clearInterval(this.state.intervalID);
  }

  upInt() {
    this.setState({ mouseInSlider: false });
    let intervalID = setInterval(this.timer, 5000);
    this.setState({ intervalID: intervalID });
  }

  timer() {
    this.nextSlider();
  }

  render() {
    return (
      <div className="Slider" onMouseOver={this.clearInt} onMouseOut={this.upInt}>
        <SwitchPanel
          prevSlider={this.prevSlider}
          nextSlider={this.nextSlider}
          count={this.state.countSlider}
        />
        <VisibleItems
          data={this.props.data}
          cssClass={this.state.cssClass}
          cssClassCnt={this.state.cssClassCnt}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(
  mapStateToProps,
  { switchingTask }
)(Slider);
