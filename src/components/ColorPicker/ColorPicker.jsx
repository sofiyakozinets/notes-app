import React from "react";
import { func, string } from "prop-types";

import { COLORS } from "../../constants/colors";
import * as S from "./styled";

const ColorPicker = ({ onChange, value }) => (
	<S.ColorPicker>
		{COLORS.map(color => (
			<S.Swatch
				key={color}
				color={color}
				onClick={() => onChange(color)}
				selected={value === color}
			/>
		))}
	</S.ColorPicker>
);

ColorPicker.propTypes = {
	onChange: func.isRequired,
	value: string.isRequired
};

export default ColorPicker;
