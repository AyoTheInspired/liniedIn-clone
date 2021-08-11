import React from "react";
import styled from "styled-components";

function InputOption({ Icon, title }) {
	return (
		<Div>
			<Icon style={{ color: color }} />
			<h4> {title} </h4>
		</Div>
	);
}

export default InputOption;

const Div = styled.div``;
