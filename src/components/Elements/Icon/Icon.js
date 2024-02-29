import PropTypes from "prop-types";
import * as Icons from "../../../assets/icons/Icon";

function IconComponent({ iconName, width, height }) {
  const Icon = Icons[iconName];

  if (!Icon) {
    return null;
  }

  return <Icon width={width} height={height} />;
}

IconComponent.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default IconComponent;
