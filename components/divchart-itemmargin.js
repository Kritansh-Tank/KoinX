import { useMemo } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const DivchartItemmargin = ({
  className = "",
  divcoinTopWidth,
  bnbpng,
  bNB,
  bNBDisplay,
  bNBMinWidth,
  divincreaseBackgroundColor,
  divincreasePadding,
  percentage,
  percentageColor,
  percentageDisplay,
  percentageMinWidth,
  value,
  valueDisplay,
  valueMinWidth,
  svg,
}) => {
  const divcoinTopStyle = useMemo(() => {
    return {
      width: divcoinTopWidth,
    };
  }, [divcoinTopWidth]);

  const bNBStyle = useMemo(() => {
    return {
      display: bNBDisplay,
      minWidth: bNBMinWidth,
    };
  }, [bNBDisplay, bNBMinWidth]);

  const divincreaseStyle = useMemo(() => {
    return {
      backgroundColor: divincreaseBackgroundColor,
      padding: divincreasePadding,
    };
  }, [divincreaseBackgroundColor, divincreasePadding]);

  const percentageStyle = useMemo(() => {
    return {
      color: percentageColor,
      display: percentageDisplay,
      minWidth: percentageMinWidth,
    };
  }, [percentageColor, percentageDisplay, percentageMinWidth]);

  const valueStyle = useMemo(() => {
    return {
      display: valueDisplay,
      minWidth: valueMinWidth,
    };
  }, [valueDisplay, valueMinWidth]);

  return (
    <Box
      className={`self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.625rem] text-left text-[1rem] text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 ${className}`}
    >
      <Box className="self-stretch flex-1 rounded-3xs border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury border-[1px] border-solid flex flex-col items-start justify-start py-[0.937rem] px-[1rem]">
        <Box className="self-stretch flex flex-row items-start justify-start">
          <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
            <Box className="self-stretch flex flex-col items-start justify-start">
              <Box className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.75rem]">
                <Box
                  className="flex flex-row items-center justify-between gap-[0rem] [row-gap:20px]"
                  style={divcoinTopStyle}
                >
                  <Box className="flex flex-row items-center justify-start">
                    <Box className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.437rem]">
                      <Image
                        className="w-[1.625rem] h-[1.625rem] relative rounded-smi overflow-hidden shrink-0 object-cover"
                        width={26}
                        height={26}
                        alt=""
                        src={bnbpng}
                      />
                    </Box>
                    <Box className="flex flex-row items-center justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                      <Box className="relative" style={bNBStyle}>
                        {bNB}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className="rounded-sm bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-niagara-6 flex flex-row items-center justify-center pt-[0.175rem] pb-[0.137rem] pl-[0.25rem] pr-[0.187rem] text-[0.75rem] text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-shamrock"
                    style={divincreaseStyle}
                  >
                    <Box className="flex flex-col items-start justify-start">
                      <Box className="relative" style={percentageStyle}>
                        {percentage}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="w-[13.625rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] box-border text-[1.25rem] text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                <Box
                  className="relative leading-[1.5rem] font-medium mq450:text-[1rem] mq450:leading-[1.188rem]"
                  style={valueStyle}
                >
                  {value}
                </Box>
              </Box>
            </Box>
            <Box className="w-[12.5rem] flex-1 overflow-hidden flex flex-row items-start justify-start">
              <Box className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center py-[0rem] px-[1.812rem]">
                <Image
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  width={140}
                  height={60}
                  alt=""
                  src={svg}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

DivchartItemmargin.propTypes = {
  className: PropTypes.string,
  bnbpng: PropTypes.string.isRequired,
  bNB: PropTypes.string,
  percentage: PropTypes.string,
  value: PropTypes.string,
  svg: PropTypes.string.isRequired,

  /** Style props */
  divcoinTopWidth: PropTypes.string,
  bNBDisplay: PropTypes.string,
  bNBMinWidth: PropTypes.string,
  divincreaseBackgroundColor: PropTypes.string,
  divincreasePadding: PropTypes.string,
  percentageColor: PropTypes.string,
  percentageDisplay: PropTypes.string,
  percentageMinWidth: PropTypes.string,
  valueDisplay: PropTypes.string,
  valueMinWidth: PropTypes.string,
};

export default DivchartItemmargin;
