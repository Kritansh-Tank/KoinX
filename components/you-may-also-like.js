import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DivchartItemmargin from "./divchart-itemmargin";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";

const YouMayAlsoLike = ({ className = "" }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd", // Replace with the desired currency
              order: "market_cap_desc",
              per_page: 5, // Limit results
              page: 1,
              sparkline: true, // Include sparkline data
            },
          }
        );
        setTrendingCoins(response.data);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <footer
      className={`self-stretch h-[39.25rem] bg-white flex flex-row items-start justify-start pt-[4.256rem] px-[4.375rem] pb-[4.243rem] box-border max-w-full text-left text-[1.5rem] text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 mq800:py-[2.75rem] mq800:px-[2.188rem] mq800:box-border ${className}`}
    >
      <Box className="h-[35.138rem] w-[90rem] relative bg-white hidden max-w-full" />
      <Box className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full z-[1]">
        <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] pb-[1.875rem] px-[0rem] box-border gap-[1.25rem] max-w-full">
          <Box className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem]">
            <Typography
              className="m-0 relative inline-block max-w-[81.25rem] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1300:max-w-full"
              variant="inherit"
              component="h3"
              sx={{ fontWeight: "600", lineHeight: "2.25rem" }}
            >
              You May Also Like
            </Typography>
          </Box>
          <Box className="w-[83.125rem] flex-1 flex flex-row items-center justify-center flex-wrap content-center py-[0rem] pl-[0rem] pr-[1.875rem] box-border relative max-w-full text-[1rem]">
            <Box className="!m-[0] absolute h-[27.5%] top-[63.75%] right-[80.906rem] bottom-[8.75%] flex flex-row items-center justify-center py-[0.312rem] px-[0rem] box-border [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]">
              <Box className="overflow-hidden flex flex-col items-start justify-start shrink-0">
                <Box className="overflow-hidden flex flex-col items-center justify-center">
                  <Image
                    className="w-[2.125rem] h-[2.125rem] relative overflow-hidden shrink-0 [transform:_rotate(-180deg)] right-[15px]"
                    width={34}
                    height={34}
                    alt=""
                    src="/e0d847a.svg"
                  />
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full">
              <Box className="flex-1 overflow-x-auto flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border max-w-full">
                <DivchartItemmargin
                  bnbpng="/bnb.svg"
                  bNB="BNB"
                  percentage="+0.52%"
                  value="$319.34"
                  svg="/202401031434.svg"
                />
                <DivchartItemmargin
                  divcoinTopWidth="7.069rem"
                  bnbpng="/Solana_SOL.svg"
                  bNB="SOL"
                  bNBDisplay="inline-block"
                  bNBMinWidth="2.063rem"
                  divincreaseBackgroundColor="rgba(238, 104, 85, 0.1)"
                  divincreasePadding="0.175rem 0.187rem 0.137rem 0.25rem"
                  percentage="-2.89%"
                  percentageColor="#e96975"
                  percentageDisplay="inline-block"
                  percentageMinWidth="2.625rem"
                  value="$109.33"
                  valueDisplay="inline-block"
                  valueMinWidth="5rem"
                  svg="/202401031436.svg"
                />
                <DivchartItemmargin
                  divcoinTopWidth="7.131rem"
                  bnbpng="/XRP_XRP.svg"
                  bNB="XRP"
                  bNBDisplay="unset"
                  bNBMinWidth="unset"
                  divincreaseBackgroundColor="rgba(10, 178, 125, 0.06)"
                  divincreasePadding="0.175rem 0.187rem 0.137rem 0.25rem"
                  percentage="+0.78%"
                  percentageColor="#32be88"
                  percentageDisplay="inline-block"
                  percentageMinWidth="2.75rem"
                  value="$0.634810"
                  valueDisplay="inline-block"
                  valueMinWidth="6.625rem"
                  svg="/202401031435.svg"
                />
                <DivchartItemmargin
                  divcoinTopWidth="7rem"
                  bnbpng="/Cardano_ADA.svg"
                  bNB="ADA"
                  bNBDisplay="unset"
                  bNBMinWidth="unset"
                  divincreaseBackgroundColor="rgba(238, 104, 85, 0.1)"
                  divincreasePadding="0.175rem 0.25rem 0.137rem"
                  percentage="-1.57%"
                  percentageColor="#e96975"
                  percentageDisplay="unset"
                  percentageMinWidth="unset"
                  value="$0.614869"
                  valueDisplay="unset"
                  valueMinWidth="unset"
                  svg="/202401031434_1.svg"
                />
                <DivchartItemmargin
                  divcoinTopWidth="7.625rem"
                  bnbpng="/Avalanche_AVAX.svg"
                  bNB="AVAX"
                  bNBDisplay="unset"
                  bNBMinWidth="unset"
                  divincreaseBackgroundColor="rgba(238, 104, 85, 0.1)"
                  divincreasePadding="0.175rem 0.25rem 0.137rem"
                  percentage="-3.78%"
                  percentageColor="#e96975"
                  percentageDisplay="unset"
                  percentageMinWidth="unset"
                  value="$41.05"
                  valueDisplay="unset"
                  valueMinWidth="unset"
                  svg="/202401031437.svg"
                />
              </Box>
            </Box>
            <Box className="!m-[0] absolute h-[27.5%] top-[36.25%] right-[1.156rem] bottom-[36.25%] flex flex-row items-center justify-center py-[0.312rem] px-[0rem] box-border z-[1]">
              <Box className="overflow-hidden flex flex-col items-start justify-start">
                <Box className="overflow-hidden flex flex-col items-center justify-center">
                  <Image
                    className="w-[2.125rem] h-[2.125rem] relative overflow-hidden shrink-0"
                    width={34}
                    height={34}
                    alt=""
                    src="/e0d847a_1.svg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] pb-[1.875rem] px-[0rem] box-border gap-[1.25rem] max-w-full">
          <Box className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem]">
            <Typography
              className="m-0 relative inline-block max-w-[81.25rem] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1300:max-w-full"
              variant="inherit"
              component="h3"
              sx={{ fontWeight: "600", lineHeight: "2.25rem" }}
            >
              Trending Coins
            </Typography>
          </Box>
          <Box className="w-[83.125rem] flex-1 flex flex-row items-center justify-center flex-wrap content-center py-[0rem] pl-[0rem] pr-[1.875rem] box-border relative max-w-full">
            <Box className="!m-[0] absolute h-[27.5%] top-[63.75%] right-[80.906rem] bottom-[8.75%] flex flex-row items-center justify-center py-[0.312rem] px-[0rem] box-border [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]">
              <Box className="overflow-hidden flex flex-col items-start justify-start shrink-0">
                <Box className="overflow-hidden flex flex-col items-center justify-center">
                  <Image
                    className="w-[2.125rem] h-[2.125rem] relative overflow-hidden shrink-0 [transform:_rotate(-180deg)] right-[15px]"
                    width={34}
                    height={34}
                    alt=""
                    src="/e0d847a.svg"
                  />
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full">
              <Box className="flex-1 overflow-x-auto flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border max-w-full">
                <DivchartItemmargin
                  divcoinTopWidth="7.075rem"
                  bnbpng="/Bitcoin_BTC.svg"
                  bNB="BTC"
                  bNBDisplay="unset"
                  bNBMinWidth="unset"
                  divincreaseBackgroundColor="rgba(10, 178, 125, 0.06)"
                  divincreasePadding="0.175rem 0.187rem 0.137rem 0.25rem"
                  percentage="+0.10%"
                  percentageColor="#32be88"
                  percentageDisplay="inline-block"
                  percentageMinWidth="2.625rem"
                  value="$45,332.83"
                  valueDisplay="unset"
                  valueMinWidth="unset"
                  svg="/202401031434_2.svg"
                />
                <DivchartItemmargin
                  divcoinTopWidth="7rem"
                  bnbpng="/Ethereum-ETH.svg"
                  bNB="ETH"
                  bNBDisplay="unset"
                  bNBMinWidth="unset"
                  divincreaseBackgroundColor="rgba(238, 104, 85, 0.1)"
                  divincreasePadding="0.175rem 0.25rem 0.137rem"
                  percentage="-0.21%"
                  percentageColor="#e96975"
                  percentageDisplay="unset"
                  percentageMinWidth="unset"
                  value="$2,375.15"
                  valueDisplay="inline-block"
                  valueMinWidth="5.875rem"
                  svg="/202401031435_1.svg"
                />
                <DivchartItemmargin
                  divcoinTopWidth="8.063rem"
                  bnbpng="/LidoStakedEther_stETH.svg"
                  bNB="stETH"
                  bNBDisplay="inline-block"
                  bNBMinWidth="3rem"
                  divincreaseBackgroundColor="rgba(238, 104, 85, 0.1)"
                  divincreasePadding="0.175rem 0.25rem 0.137rem"
                  percentage="-0.34%"
                  percentageColor="#e96975"
                  percentageDisplay="unset"
                  percentageMinWidth="unset"
                  value="$2,371.72"
                  valueDisplay="unset"
                  valueMinWidth="unset"
                  svg="/202401031437_1.svg"
                />
                <DivchartItemmargin
                  divcoinTopWidth="6.894rem"
                  bnbpng="/Uniswap_UNI.svg"
                  bNB="UNI"
                  bNBDisplay="inline-block"
                  bNBMinWidth="1.875rem"
                  divincreaseBackgroundColor="rgba(238, 104, 85, 0.1)"
                  divincreasePadding="0.175rem 0.187rem 0.137rem 0.25rem"
                  percentage="-4.02%"
                  percentageColor="#e96975"
                  percentageDisplay="inline-block"
                  percentageMinWidth="2.625rem"
                  value="$7.3192"
                  valueDisplay="inline-block"
                  valueMinWidth="4.75rem"
                  svg="/202401031437_2.svg"
                />
                <DivchartItemmargin
                  divcoinTopWidth="7rem"
                  bnbpng="/Centrifuge_CFG.svg"
                  bNB="CFG"
                  bNBDisplay="unset"
                  bNBMinWidth="unset"
                  divincreaseBackgroundColor="rgba(238, 104, 85, 0.1)"
                  divincreasePadding="0.175rem 0.25rem 0.137rem"
                  percentage="-1.76%"
                  percentageColor="#e96975"
                  percentageDisplay="unset"
                  percentageMinWidth="unset"
                  value="$0.773600"
                  valueDisplay="inline-block"
                  valueMinWidth="6.688rem"
                  svg="/202401031437_3.svg"
                />
              </Box>
            </Box>
            <Box className="!m-[0] absolute h-[27.5%] top-[36.25%] right-[1.156rem] bottom-[36.25%] flex flex-row items-center justify-center py-[0.312rem] px-[0rem] box-border z-[1]">
              <Box className="overflow-hidden flex flex-col items-start justify-start">
                <Box className="overflow-hidden flex flex-col items-center justify-center">
                  <Image
                    className="w-[2.125rem] h-[2.125rem] relative overflow-hidden shrink-0"
                    width={34}
                    height={34}
                    alt=""
                    src="/e0d847a_1.svg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

YouMayAlsoLike.propTypes = {
  className: PropTypes.string,
};

export default YouMayAlsoLike;
