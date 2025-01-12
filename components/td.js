import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Td = ({
  className = "",
  tdWidth,
  tdPadding,
  emptyValuesWidth,
  emptyValuesHeight,
  prop,
  prop1,
  typographyColor,
  nov102021About1Year,
}) => {
  const tdStyle = useMemo(() => {
    return {
      width: tdWidth,
      padding: tdPadding,
    };
  }, [tdWidth, tdPadding]);

  const emptyValuesStyle = useMemo(() => {
    return {
      width: emptyValuesWidth,
      height: emptyValuesHeight,
    };
  }, [emptyValuesWidth, emptyValuesHeight]);

  const typographyStyle = useMemo(() => {
    return {
      color: typographyColor,
    };
  }, [typographyColor]);

  return (
    <Box
      className={`w-[13.2rem] flex flex-row items-center justify-end py-[0.812rem] px-[0.75rem] box-border shrink-0 z-[1] text-right text-[0.875rem] text-gray-100 font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 ${className}`}
      style={tdStyle}
    >
      <Box className="flex flex-col items-end justify-start gap-[0.25rem]">
        <Box
          className="w-[8.688rem] h-[0.688rem] relative leading-[1.25rem] font-medium flex items-center shrink-0"
          style={emptyValuesStyle}
        >
          <span className="w-full">
            <Typography variant="inherit" component="span">
              {prop}
            </Typography>
            <Typography
              className="text-absolute-red"
              variant="inherit"
              component="span"
              style={typographyStyle}
            >
              {prop1}
            </Typography>
          </span>
        </Box>
        <Box className="self-stretch relative text-[0.7rem] leading-[1.25rem]">
          {nov102021About1Year}
        </Box>
      </Box>
    </Box>
  );
};

Td.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  nov102021About1Year: PropTypes.string,

  /** Style props */
  tdWidth: PropTypes.string,
  tdPadding: PropTypes.string,
  emptyValuesWidth: PropTypes.string,
  emptyValuesHeight: PropTypes.string,
  typographyColor: PropTypes.string,
};

export default Td;
