import React, { Component } from 'react';
import './calc.scss';
import { Button } from './btn';
import { Input } from './input';
import { ClearBtn } from './clearBtn';
import * as math from 'mathjs';

class Calc extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
		};
	}

	addToInput = (val) => {
		if (isNaN(val) && isNaN(this.state.input[this.state.input.length - 1])) {
			this.setState({ input: this.state.input });
		} else {
			this.setState({ input: this.state.input + val });
		}
	};

	handleEqual = () => {
		if (isNaN(this.state.input[this.state.input.length - 1])) {
			this.setState({ input: this.state.input });
		} else {
			this.setState({ input: math.evaluate(this.state.input) });
		}
	};

	render() {
		return (
			<div className='calculator'>
				<div className='calc-wrapper'>
					<Input input={this.state.input}></Input>
					<div className='row'>
						<Button handleClick={this.addToInput}>7</Button>
						<Button handleClick={this.addToInput}>8</Button>
						<Button handleClick={this.addToInput}>9</Button>
						<Button handleClick={this.addToInput}>/</Button>
					</div>
					<div className='row'>
						<Button handleClick={this.addToInput}>4</Button>
						<Button handleClick={this.addToInput}>5</Button>
						<Button handleClick={this.addToInput}>6</Button>
						<Button handleClick={this.addToInput}>*</Button>
					</div>
					<div className='row'>
						<Button handleClick={this.addToInput}>1</Button>
						<Button handleClick={this.addToInput}>2</Button>
						<Button handleClick={this.addToInput}>3</Button>
						<Button handleClick={this.addToInput}>+</Button>
					</div>
					<div className='row'>
						<Button handleClick={this.addToInput}>.</Button>
						<Button handleClick={this.addToInput}>0</Button>
						<Button handleClick={() => this.handleEqual()}>=</Button>
						<Button handleClick={this.addToInput}>-</Button>
					</div>
					<ClearBtn handleClear={() => this.setState({ input: '' })}>Clear</ClearBtn>
				</div>
				<footer></footer>
			</div>
		);
	}
}

export default Calc;
// Inspired by Brice Ayres. URL: https://www.youtube.com/watch?v=KzYUuTiHdiY&t=229s
