import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  groupBoxBackground,
  rectangleBoxBackground,
  buttonBackgrounds,
  calculateYourProfits,
  iconlyLightArrowRight,
}) => {
  const groupBoxStyle = useMemo(() => {
    return {
      background: groupBoxBackground,
    };
  }, [groupBoxBackground]);

  const rectangleBoxStyle = useMemo(() => {
    return {
      background: rectangleBoxBackground,
    };
  }, [rectangleBoxBackground]);

  return (
    <Box
      className={`flex-1 rounded-6xs-6 [background:linear-gradient(135deg,_#79f1a4,_#0e5cad)] flex flex-row items-start justify-start pt-[0.75rem] px-[0.75rem] pb-[0.687rem] box-border gap-[1.725rem] min-w-[15.75rem] max-w-full text-left text-[1.25rem] text-white font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 mq450:flex-wrap ${className}`}
      style={groupBoxStyle}
    >
      <Box
        className="h-[9.438rem] w-[24.25rem] relative rounded-6xs-6 [background:linear-gradient(135deg,_#79f1a4,_#0e5cad)] hidden max-w-full"
        style={rectangleBoxStyle}
      />
      <Image
        className="h-[8rem] w-[8rem] relative rounded-lg object-cover z-[1] mq450:flex-1"
        loading="lazy"
        width={128}
        height={128}
        alt=""
        src={buttonBackgrounds}
      />
      <Box className="w-[12.188rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border mq450:flex-1">
        <Box className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <Typography
            className="relative z-[1] mq450:text-[1rem] mq450:leading-[1.375rem]"
            variant="inherit"
            component="b"
            sx={{ lineHeight: "140%", fontWeight: "700" }}
          >
            {calculateYourProfits}
          </Typography>
          <button className="cursor-pointer [border:none] py-[0.125rem] pl-[0.875rem] pr-[0.812rem] bg-white rounded-lg flex flex-row items-start justify-start gap-[0.375rem] z-[1]">
            <Box className="relative text-[0.875rem] leading-[1.75rem] font-semibold font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 text-day-gray-08 text-left inline-block min-w-[4.938rem]">
              Check Now
            </Box>
            <Box className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
              <Image
                className="w-[1.25rem] h-[1.25rem] relative"
                width={20}
                height={20}
                alt=""
                src={iconlyLightArrowRight}
              />
            </Box>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  buttonBackgrounds: PropTypes.string.isRequired,
  calculateYourProfits: PropTypes.string,
  iconlyLightArrowRight: PropTypes.string.isRequired,

  /** Style props */
  groupBoxBackground: PropTypes.string,
  rectangleBoxBackground: PropTypes.string,
};

export default GroupComponent;
