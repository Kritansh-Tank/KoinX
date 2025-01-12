import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  property1 = "Selected",
  frameBoxHeight,
  dashboard,
}) => {
  const frameBoxStyle = useMemo(() => {
    return {
      height: frameBoxHeight,
    };
  }, [frameBoxHeight]);

  return (
    <Box
      className={`border-primary-blue border-b-[3px] border-solid box-border h-[3rem] flex flex-row items-center justify-center text-left text-[1rem] text-primary-darkblue font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 data-[property1='Default']:[border-bottom:unset] data-[property1='Default']:[box-sizing:unset] data-[property1='Default']:mt-[-0.688rem] [&_.dashboard]:data-[property1='Default']:font-medium [&_.dashboard]:data-[property1='Default']:text-gray-2 ${className}`}
      data-property1={property1}
      style={frameBoxStyle}
    >
      <Box className="dashboard h-[1.188rem] relative tracking-[-0.01em] font-semibold inline-block">
        {dashboard}
      </Box>
    </Box>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  dashboard: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  frameBoxHeight: PropTypes.string,
};

export default FrameComponent;
