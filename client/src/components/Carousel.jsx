import React from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import {CSSTransition, SwitchTransition} from "react-transition-group";

const StyledCarousel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel {
    width: 100vw;
    max-width: 800px;
    overflow: hidden;
    padding: 0;
    margin: 2rem;
    box-sizing: border-box;

    .carousel-inner {
      overflow: hidden;
      width: 100%;
      height: 100%;
      padding: 1rem;
    }
  }
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
    this.nodeRef = React.createRef();
  }

  nextSlide = () => {
    console.log('next slide')
    let curIndex = this.state.activeIndex;

    if (this.state.activeIndex < this.props.items.length - 1) {
      this.setState({activeIndex: curIndex + 1});
    } else {
      this.setState({activeIndex: 0});
    }
  }

  prevSlide = () => {
    console.log('prev slide')
    let curIndex = this.state.activeIndex;

    if (this.state.activeIndex > 0) {
      this.setState({activeIndex: curIndex - 1});
    } else {
      this.setState({activeIndex: this.props.items.length - 1});
    }
  }

  render() {
    return (
      <StyledCarousel>
        <div className={'carousel'}>
          <div className={'carousel-inner'}>
            <SwitchTransition>
              <CSSTransition
                in={true}
                key={this.state.activeIndex}
                timeout={300}
                classNames={'carousel'}
                nodeRef={this.nodeRef}
                unmountOnExit
                appear
              >
                {() => (
                  <div className={'carousel-item'} ref={this.nodeRef}>
                    {this.props.items[this.state.activeIndex]}
                  </div>
                )}
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </StyledCarousel>
    )
  }
}

export default Carousel;