import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Td from "../components/td";
import GroupComponent from "../components/group-component";
import YouMayAlsoLike from "../components/you-may-also-like";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Bitcoin = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    // Fetch trending coins data from CoinGecko API
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const coins = response.data.coins.slice(0, 3); // Get top 3 coins
        setTrendingCoins(coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  const [bitcoinData, setBitcoinData] = useState({
    usd: 0,
    inr: 0,
    usd24hChange: 0,
  });

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "inr,usd",
              include_24hr_change: true,
            },
          }
        );
        const { inr, usd, usd_24h_change } = response.data.bitcoin;
        setBitcoinData({ usd, inr, usd24hChange: usd_24h_change });
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    fetchBitcoinData();
  }, []);

  return (
    <Box className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start gap-[4.875rem] leading-[normal] tracking-[normal] mq450:gap-[1.188rem] mq800:gap-[2.438rem]">
      <main className="self-stretch flex flex-col items-end justify-start gap-[1.075rem] max-w-full text-left text-[1.5rem] text-day-gray-08 font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12">
        <FrameComponent1 />
        <Box className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[3.5rem] pr-[3.437rem] box-border max-w-full mq800:pl-[1.75rem] mq800:pr-[1.688rem] mq800:box-border">
          <Box className="flex-1 flex flex-row items-start justify-start gap-[1.25rem] max-w-full mq1300:flex-wrap">
            <Box className="flex-1 flex flex-col items-start justify-start gap-[1.231rem] max-w-full mq800:min-w-full">
              <Box className="flex flex-row items-end justify-start gap-[0.475rem] text-[0.875rem] text-day-gray-07">
                <Box className="relative inline-block min-w-[7.25rem]">
                  Cryptocurrencies
                </Box>
                <Box className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                  <Image
                    className="w-[0.625rem] h-[0.656rem] relative overflow-hidden shrink-0"
                    width={10}
                    height={11}
                    alt=""
                    src="/icon.svg"
                  />
                </Box>
                <a className="[text-decoration:none] relative font-medium text-day-gray-08 inline-block min-w-[3rem]">
                  Bitcoin
                </a>
              </Box>
              <Box className="w-[55.063rem] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.5rem] px-[1.5rem] pb-[2.062rem] box-border gap-[2.5rem] max-w-full text-gray-200 mq450:gap-[1.25rem] mq800:pt-[1.25rem] mq800:pb-[1.313rem] mq800:box-border">
                <Box className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
                  <Box className="flex flex-row items-start justify-start gap-[1.668rem] max-w-full mq450:flex-wrap">
                    {/* Bitcoin Info Section */}
                    <Box className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] mq450:flex-1">
                      <Box className="flex flex-col items-start justify-start gap-[2.5rem]">
                        {/* Icon and Name */}
                        <Box className="flex flex-row items-start justify-start gap-[0.5rem]">
                          <Image
                            className="h-[2.25rem] w-[2.25rem] relative object-cover"
                            loading="lazy"
                            width={36}
                            height={36}
                            alt="Bitcoin"
                            src="/Component_52.svg"
                          />
                          <Box className="flex flex-col items-start justify-start pt-[0.225rem] px-[0rem] pb-[0rem]">
                            <Box className="overflow-hidden flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[0.05rem]">
                              <Typography
                                className="m-0 relative inline-block min-w-[5.125rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]"
                                variant="inherit"
                                component="h3"
                                sx={{ fontWeight: "600", lineHeight: "1.8rem" }}
                              >
                                Bitcoin
                              </Typography>
                            </Box>
                          </Box>
                          <Box className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] text-[1rem] text-slategray">
                            <Box className="relative leading-[1.2rem] font-semibold inline-block min-w-[2.125rem]">
                              BTC
                            </Box>
                          </Box>
                        </Box>
                        {/* Price Information */}
                        <Box className="flex flex-col items-start justify-start text-[1.75rem]">
                          <Box className="relative leading-[2.4rem] font-semibold mq450:text-[1.375rem] mq450:leading-[1.938rem]">
                            ${bitcoinData.usd.toLocaleString()}
                          </Box>
                          <Box className="relative text-[1rem] leading-[1.688rem] font-medium inline-block min-w-[5.938rem]">
                            ₹ {bitcoinData.inr.toLocaleString()}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    {/* Change and Rank Section */}
                    <Box className="flex flex-row items-end justify-start gap-[0.431rem] text-[1rem] text-white mq450:flex-1">
                      <Box className="flex-1 flex flex-col items-end justify-start gap-[2.687rem]">
                        <Box className="h-[2.5rem] rounded-lg bg-gray-3 border-lightslategray border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.5rem] px-[0.625rem]">
                          <Box className="relative leading-[126%] font-medium z-[1]">
                            Rank #1
                          </Box>
                        </Box>
                        <Box className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0rem] pr-[0.312rem] text-center text-mediumseagreen">
                          <Box className="flex-1 rounded bg-mintcream flex flex-row items-start justify-start py-[0.281rem] pl-[0.625rem] pr-[0.562rem] gap-[0.5rem]">
                            <Box className="flex flex-col items-start justify-start pt-[0.343rem] px-[0rem] pb-[0rem]">
                              <Image
                                className="w-[0.688rem] h-[0.5rem] relative"
                                width={11}
                                height={8}
                                alt="Change Arrow"
                                src={
                                  bitcoinData.usd24hChange >= 0
                                    ? "/Polygon_2.svg"
                                    : "/Polygon_3.svg"
                                }
                              />
                            </Box>
                            <Box
                              className="flex-1 relative font-medium"
                              style={{
                                color:
                                  bitcoinData.usd24hChange >= 0
                                    ? "green"
                                    : "red",
                              }}
                            >
                              {bitcoinData.usd24hChange.toFixed(2)}%
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.093rem] text-[0.875rem] text-gray-3">
                        <Box className="relative leading-[1.688rem] font-medium">
                          (24H)
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="self-stretch h-[0.063rem] relative border-gray-5 border-t-[1px] border-solid box-border" />
                  <Box className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[1rem] mq800:flex-wrap">
                    <Box className="relative leading-[1.219rem] font-semibold shrink-0">
                      Bitcoin Price Chart (USD)
                    </Box>
                    <Box className="mt-[-0.063rem] flex flex-row items-start justify-start gap-[0.543rem] shrink-0 text-[0.813rem] text-slategray mq450:flex-wrap">
                      <Box className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.687rem]">
                        <Box className="relative leading-[1.219rem] font-medium">
                          1H
                        </Box>
                      </Box>
                      <Box className="relative leading-[1.219rem] font-medium">
                        24H
                      </Box>
                      <Box className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.125rem] text-primary-darkblue">
                        <Box className="rounded-[32px] bg-lavender flex flex-row items-start justify-start py-[0rem] pl-[0.562rem] pr-[0.5rem]">
                          <Box className="relative leading-[1.219rem] font-medium">
                            7D
                          </Box>
                        </Box>
                      </Box>
                      <Box className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.687rem] text-[0.75rem]">
                        <Box className="relative leading-[1.219rem] font-medium inline-block min-w-[1.125rem]">
                          1M
                        </Box>
                      </Box>
                      <Box className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.562rem] text-[0.75rem]">
                        <Box className="relative leading-[1.219rem] font-medium">
                          3M
                        </Box>
                      </Box>
                      <Box className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.562rem] text-[0.75rem]">
                        <Box className="relative leading-[1.219rem] font-medium inline-block min-w-[1.25rem]">
                          6M
                        </Box>
                      </Box>
                      <Box className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.625rem]">
                        <Box className="relative leading-[1.219rem] font-medium inline-block min-w-[1.063rem]">
                          1Y
                        </Box>
                      </Box>
                      <Box className="relative leading-[1.219rem] font-medium">
                        ALL
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="w-[57.25rem] h-[25rem] overflow-hidden flex items-center justify-center">
                  <iframe
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_12345&symbol=BTCUSD&interval=1D&range=1w&theme=light&style=1&locale=en"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowTransparency="true"
                    scrolling="no"
                  ></iframe>
                </Box>
              </Box>
              <Box className="self-stretch h-[3rem] border-day-gray-04 border-b-[1px] border-solid box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[2rem] mq450:gap-[1rem]">
                <FrameComponent property1="Selected" dashboard="Overview" />
                <FrameComponent
                  property1="Default"
                  frameBoxHeight="4.375rem"
                  dashboard="Fundamentals"
                />
                <FrameComponent
                  property1="Default"
                  frameBoxHeight="4.375rem"
                  dashboard="News Insights"
                />
                <FrameComponent
                  property1="Default"
                  frameBoxHeight="4.375rem"
                  dashboard="Sentiments"
                />
                <FrameComponent
                  property1="Default"
                  frameBoxHeight="4.375rem"
                  dashboard="Team"
                />
                <FrameComponent
                  property1="Default"
                  frameBoxHeight="4.375rem"
                  dashboard="Technicals"
                />
                <FrameComponent
                  property1="Default"
                  frameBoxHeight="4.375rem"
                  dashboard="Tokenomics"
                />
              </Box>
              <Box className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start pt-[1.437rem] px-[1.5rem] pb-[3.325rem] box-border gap-[1.525rem] max-w-full text-groww-in-stocks-zomato-ltd-1440x810-default-gun-powder mq800:pt-[1.25rem] mq800:pb-[2.188rem] mq800:box-border">
                <Typography
                  className="m-0 relative text-day-gray-08 mq450:text-[1.188rem] mq450:leading-[1.438rem]"
                  variant="inherit"
                  component="h3"
                  sx={{ fontWeight: "600", lineHeight: "1.8rem" }}
                >
                  Performance
                </Typography>
                <Box className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.937rem] box-border gap-[0.812rem] min-h-[0.063rem] max-w-full text-[0.863rem]">
                  <Box className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] max-w-full mq800:flex-wrap">
                    <Box className="w-[7.25rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0.812rem] box-border gap-[0.625rem] min-w-[5.313rem]">
                      <Box className="relative leading-[1.25rem]">
                        Today’s Low
                      </Box>
                      <Box className="relative text-[0.975rem] leading-[1.375rem] font-medium inline-block min-w-[4.938rem]">
                        46,930.22
                      </Box>
                    </Box>
                    <Box className="flex-1 flex flex-col items-start justify-start pt-[2.075rem] px-[0rem] pb-[0rem] box-border min-w-[23.688rem] max-w-full text-[0.875rem] font-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-sf-pro-text-regular-14 mq800:min-w-full">
                      <Box className="self-stretch flex flex-col items-start justify-start gap-[0.437rem]">
                        <Box className="self-stretch flex flex-col items-end justify-start gap-[0.012rem]">
                          <Box className="self-stretch h-[0.288rem] rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] flex flex-col items-start justify-start shrink-0">
                            <Box className="self-stretch h-[0.313rem] relative rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] hidden" />
                          </Box>
                          <Box className="w-[16.55rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border">
                            <Box className="h-[0.5rem] w-[0.75rem] overflow-hidden shrink-0 flex flex-row items-start justify-start relative">
                              <Box className="h-[0.5rem] w-[0.5rem] absolute !m-[0] bottom-[-0.144rem] left-[0.353rem] bg-absolute-black [transform:_rotate(45deg)] [transform-origin:0_0]" />
                            </Box>
                          </Box>
                        </Box>
                        <Box className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[25.75rem] pr-[5.875rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:pl-[12.875rem] mq800:pr-[2.938rem] mq800:box-border">
                          <Box className="flex-1 relative leading-[1.25rem]">
                            $48,637.83
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="w-[7.2rem] flex flex-col items-end justify-start pt-[0.375rem] px-[0rem] pb-[0.812rem] box-border gap-[0.625rem] min-w-[5.313rem] text-right text-[0.85rem]">
                      <Box className="w-[5.188rem] relative leading-[1.25rem] flex items-center">
                        Today’s High
                      </Box>
                      <Box className="w-[4.938rem] relative text-[0.975rem] leading-[1.375rem] font-medium flex items-center">
                        49,343.83
                      </Box>
                    </Box>
                  </Box>
                  <Box className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] max-w-full text-[0.875rem] mq800:flex-wrap">
                    <Box className="w-[7.563rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0.812rem] box-border gap-[0.625rem] min-w-[5.313rem]">
                      <Box className="relative leading-[1.25rem]">52W Low</Box>
                      <Box className="relative text-[0.975rem] leading-[1.375rem] font-medium inline-block min-w-[4.75rem]">
                        16,930.22
                      </Box>
                    </Box>
                    <Box className="flex-1 flex flex-col items-start justify-start pt-[2.075rem] px-[0rem] pb-[0rem] box-border min-w-[23.5rem] max-w-full mq800:min-w-full">
                      <Box className="self-stretch h-[0.288rem] rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] flex flex-col items-start justify-start">
                        <Box className="self-stretch h-[0.313rem] relative rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] hidden" />
                      </Box>
                    </Box>
                    <Box className="w-[7.138rem] flex flex-col items-end justify-start pt-[0.375rem] px-[0rem] pb-[0.812rem] box-border gap-[0.625rem] min-w-[5.313rem] text-right text-[0.863rem]">
                      <Box className="w-[4.063rem] relative leading-[1.25rem] flex items-center">
                        52W High
                      </Box>
                      <Box className="w-[4.875rem] relative text-[0.975rem] leading-[1.375rem] font-medium flex items-center">
                        49,743.83
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="w-[51.25rem] flex flex-col items-start justify-start gap-[1rem] max-w-full text-[1.181rem]">
                  <Box className="flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[22.937rem] box-border max-w-full mq450:pr-[1.25rem] mq450:box-border mq800:pr-[11.438rem] mq800:box-border">
                    <Box className="flex flex-col items-start justify-start">
                      <Box className="relative leading-[1.25rem] font-semibold">
                        Fundamentals
                      </Box>
                    </Box>
                    <Box className="flex flex-col items-start justify-start py-[0rem] pl-[0.375rem] pr-[0rem]">
                      <Box className="overflow-hidden flex flex-row items-center justify-center">
                        <Image
                          className="h-[1.25rem] w-[1.25rem] relative"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/Frame_1.svg"
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box className="self-stretch flex flex-row items-start justify-start gap-[3rem] max-w-full text-[0.875rem] text-gray-3 mq450:gap-[1.5rem] mq800:flex-wrap">
                    <Box className="flex-[0.8982] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[2.437rem] box-border min-w-[15.563rem] max-w-full mq450:flex-1">
                      <Box className="self-stretch border-day-gray-04 border-b-[1px] border-solid flex flex-row items-center justify-between pt-[1.043rem] pb-[1rem] pl-[0rem] pr-[0.75rem] gap-[1.25rem] mq450:flex-wrap mq450:pl-[0.75rem] mq450:box-border">
                        <Box className="relative leading-[1.25rem] font-medium">
                          Bitcoin Price
                        </Box>
                        <Box className="relative text-[0.813rem] leading-[1.25rem] font-medium text-gray-100 text-right inline-block min-w-[4.375rem]">
                          $16,815.46
                        </Box>
                      </Box>
                      <Box className="w-[21.5rem] border-day-gray-04 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[0.262rem] px-[0rem] pb-[0.187rem] max-w-full gap-[-3.342rem]">
                        <Box className="w-[11.75rem] flex flex-row items-start justify-start pt-[0.781rem] px-[0rem] pb-[0.812rem] box-border">
                          <Box className="relative leading-[1.25rem] font-medium">
                            24h Low / 24h High
                          </Box>
                        </Box>
                        <Box className="w-[13.094rem] flex flex-row items-start justify-end pt-[0.781rem] px-[0.687rem] pb-[0.812rem] box-border shrink-0 z-[1] text-right text-[0.813rem] text-gray-100">
                          <Box className="relative leading-[1.25rem] font-medium">
                            $16,382.07 / $16,874.12
                          </Box>
                        </Box>
                      </Box>
                      <Box className="w-[21.5rem] border-day-gray-04 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[0.262rem] px-[0rem] pb-[0.187rem] max-w-full gap-[-3.342rem] z-[2]">
                        <Box className="w-[11.75rem] flex flex-row items-start justify-start pt-[0.781rem] px-[0rem] pb-[0.812rem] box-border">
                          <Box className="relative leading-[1.25rem] font-medium">
                            7d Low / 7d High
                          </Box>
                        </Box>
                        <Box className="w-[13.094rem] flex flex-row items-start justify-end pt-[0.781rem] px-[0.687rem] pb-[0.812rem] box-border shrink-0 z-[1] text-right text-[0.813rem] text-gray-100">
                          <Box className="relative leading-[1.25rem] font-medium">
                            $16,382.07 / $16,874.12
                          </Box>
                        </Box>
                      </Box>
                      <Box className="w-[21.5rem] border-day-gray-04 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[0.262rem] px-[0rem] pb-[0.187rem] max-w-full gap-[-3.78rem]">
                        <Box className="w-[11.75rem] flex flex-row items-start justify-start pt-[0.781rem] px-[0rem] pb-[0.812rem] box-border">
                          <Box className="relative leading-[1.25rem] font-medium inline-block min-w-[6.625rem]">
                            Trading Volume
                          </Box>
                        </Box>
                        <Box className="w-[13.531rem] flex flex-row items-start justify-end pt-[0.781rem] px-[0.75rem] pb-[0.812rem] box-border z-[1] text-right text-gray-100">
                          <Box className="relative leading-[1.25rem] font-medium">
                            $23,249,202,782
                          </Box>
                        </Box>
                      </Box>
                      <Box className="w-[21.5rem] border-day-gray-04 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[0.262rem] px-[0rem] pb-[0.187rem] max-w-full gap-[-3.03rem]">
                        <Box className="w-[11.75rem] flex flex-row items-start justify-start pt-[0.781rem] px-[0rem] pb-[0.812rem] box-border">
                          <Box className="relative leading-[1.25rem] font-medium inline-block min-w-[7.25rem]">
                            Market Cap Rank
                          </Box>
                        </Box>
                        <Box className="w-[12.781rem] flex flex-row items-start justify-end pt-[0.781rem] px-[0.75rem] pb-[0.812rem] box-border z-[1] text-right text-[0.813rem] text-gray-100">
                          <Box className="relative leading-[1.25rem] font-medium inline-block min-w-[1rem]">
                            #1
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="flex-1 flex flex-col items-start justify-start min-w-[15.813rem] max-w-full">
                      <Box className="w-[24.313rem] border-day-gray-04 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[0.281rem] px-[0rem] pb-[0.187rem] max-w-full gap-[-0.967rem] [row-gap:20px] mq800:flex-wrap">
                        <Box className="w-[11.75rem] flex flex-row items-start justify-start py-[0.781rem] px-[0rem] box-border">
                          <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[4.938rem]">
                            Market Cap
                          </a>
                        </Box>
                        <Box className="w-[13.531rem] flex flex-row items-start justify-end py-[0.781rem] px-[0.687rem] box-border z-[1] text-right text-gray-100 mq450:ml-0">
                          <Box className="relative leading-[1.25rem] font-medium inline-block min-w-[7.813rem]">
                            $323,507,290,047
                          </Box>
                        </Box>
                      </Box>
                      <Box className="w-[24.313rem] border-day-gray-04 border-b-[1px] border-solid box-border flex flex-row items-center justify-between pt-[0.262rem] px-[0rem] pb-[0.187rem] max-w-full gap-[-0.655rem] [row-gap:20px] mq800:flex-wrap">
                        <Box className="flex flex-row items-start justify-start pt-[0.781rem] pb-[0.812rem] pl-[0rem] pr-[1.875rem]">
                          <Box className="relative leading-[1.25rem] font-medium whitespace-nowrap">
                            Market Cap Dominance
                          </Box>
                        </Box>
                        <Box className="flex flex-row items-start justify-start pt-[0.781rem] pb-[0.812rem] pl-[8.687rem] pr-[0.687rem] z-[1] text-right text-gray-100 mq450:ml-0">
                          <Box className="flex-1 relative leading-[1.25rem] font-medium">
                            38.343%
                          </Box>
                        </Box>
                      </Box>
                      <Box className="self-stretch border-day-gray-04 border-b-[1px] border-solid flex flex-row items-center justify-between pt-[0.262rem] px-[0rem] pb-[0.187rem] gap-[-0.342rem] [row-gap:20px] z-[2] mq800:flex-wrap">
                        <Box className="w-[11.75rem] flex flex-row items-start justify-start pt-[0.781rem] px-[0rem] pb-[0.812rem] box-border">
                          <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit]">
                            Volume / Market Cap
                          </a>
                        </Box>
                        <Box className="w-[12.906rem] flex flex-row items-start justify-end pt-[0.781rem] px-[0.687rem] pb-[0.812rem] box-border z-[1] text-right text-[0.813rem] text-gray-100 mq450:ml-0">
                          <Box className="relative leading-[1.25rem] font-medium inline-block min-w-[2.688rem]">
                            0.0718
                          </Box>
                        </Box>
                      </Box>
                      <Box className="w-[24.313rem] h-[3.375rem] border-day-gray-04 border-b-[1px] border-solid box-border flex flex-row items-center justify-between py-[0rem] px-[0rem] max-w-full gap-[-0.635rem]">
                        <Box className="w-[11.75rem] flex flex-row items-center justify-start py-[1.281rem] px-[0rem] box-border">
                          <Box className="relative leading-[1.25rem] font-medium inline-block min-w-[5.75rem]">
                            All-Time High
                          </Box>
                        </Box>
                        <Td
                          prop="$69,044.77 "
                          prop1="-75.6%"
                          nov102021About1Year="Nov 10, 2021 (about 1 year)"
                        />
                      </Box>
                      <Box className="self-stretch h-[3.375rem] border-day-gray-04 border-b-[1px] border-solid box-border flex flex-row items-center justify-between py-[0rem] px-[0rem] gap-[-0.385rem]">
                        <Box className="w-[11.75rem] flex flex-row items-center justify-start py-[1.281rem] px-[0rem] box-border">
                          <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit]">
                            All-Time Low
                          </a>
                        </Box>
                        <Td
                          tdWidth="12.95rem"
                          tdPadding="0.656rem 0.75rem"
                          emptyValuesWidth="7.438rem"
                          emptyValuesHeight="unset"
                          prop="$67.81 "
                          prop1="24729.1%"
                          typographyColor="#0fba83"
                          nov102021About1Year="Jul 06, 2013 (over 9 years)"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch h-[34.75rem] rounded-lg bg-white flex flex-row items-start justify-start pt-[1.5rem] px-[1.5rem] pb-[0rem] box-border max-w-full mq1125:h-auto">
                <Box className="w-[51.938rem] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[2.862rem] px-[0rem] pb-[51.325rem] box-border gap-[1.112rem] max-w-full mq800:pt-[1.25rem] mq800:pb-[21.688rem] mq800:box-border mq1125:h-auto mq1300:pt-[1.875rem] mq1300:pb-[33.375rem] mq1300:box-border">
                  <Typography
                    className="mt-[-2.925rem] m-0 relative inline-block min-w-[7.563rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]"
                    variant="inherit"
                    component="h3"
                    sx={{ fontWeight: "600", lineHeight: "1.8rem" }}
                  >
                    Sentiment
                  </Typography>
                  <Box className="flex flex-col items-start justify-start gap-[1.5rem] max-w-[112%] text-[1.181rem] text-groww-in-stocks-zomato-ltd-1440x810-default-gun-powder">
                    <Box className="self-stretch flex flex-row items-start justify-start gap-[0.875rem] max-w-full mq1125:flex-wrap">
                      <Box className="flex-1 flex flex-col items-start justify-start gap-[1.062rem] max-w-full">
                        <Box className="flex flex-row items-start justify-start gap-[0.375rem]">
                          <a className="[text-decoration:none] relative leading-[1.25rem] font-semibold text-[inherit]">
                            Key Events
                          </a>
                          <Image
                            className="h-[1.25rem] w-[1.25rem] relative"
                            width={20}
                            height={20}
                            alt=""
                            src="/Frame_2.svg"
                          />
                        </Box>
                        <Box className="self-stretch flex flex-col items-start justify-start gap-[2.062rem] max-w-full text-[0.875rem] text-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-shark font-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-sf-pro-text-regular-14 mq450:gap-[1rem]">
                          <Box className="self-stretch rounded-xl bg-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude flex flex-row items-start justify-start pt-[1.093rem] px-[1.125rem] pb-[2.406rem] box-border gap-[0.5rem] min-w-[28.5rem] max-w-full mq800:flex-wrap">
                            <Image
                              className="h-[2.75rem] w-[2.75rem] relative rounded-21xl overflow-hidden shrink-0"
                              loading="lazy"
                              width={44}
                              height={44}
                              alt=""
                              src="/Frame_1116601921.svg"
                            />
                            <Box className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[14.938rem] max-w-full">
                              <Box className="self-stretch flex flex-row items-center justify-start max-w-full">
                                <Box className="flex-1 flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] box-border max-w-full">
                                  <Box className="relative leading-[1.25rem] font-medium">
                                    Lorem ipsum dolor sit amet consectetur. Dui
                                    vel quis dignissim mattis enim tincidunt.
                                  </Box>
                                </Box>
                              </Box>
                              <Box className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.187rem] text-day-gray-07">
                                <Box className="h-[6.25rem] relative leading-[1.25rem] flex items-center">
                                  Lorem ipsum dolor sit amet consectetur. Ac
                                  phasellus risus est faucibus metus quis. Amet
                                  sapien quam viverra adipiscing condimentum. Ac
                                  consectetur et pretium in a bibendum in. Sed
                                  vitae sit nisi viverra natoque lacinia libero
                                  enim.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box className="flex flex-row items-start justify-start gap-[0.375rem] text-[1.181rem] text-groww-in-stocks-zomato-ltd-1440x810-default-gun-powder font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12">
                            <Box className="relative leading-[1.25rem] font-semibold">
                              Analyst Estimates
                            </Box>
                            <Image
                              className="h-[1.25rem] w-[1.25rem] relative"
                              width={20}
                              height={20}
                              alt=""
                              src="/Frame_2.svg"
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box className="flex-1 flex flex-col items-start justify-start pt-[2.312rem] px-[0rem] pb-[0rem] box-border max-w-full text-[0.875rem] text-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-shark font-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-sf-pro-text-regular-14">
                        <Box className="self-stretch rounded-xl bg-mintcream flex flex-row items-start justify-end pt-[1.093rem] px-[1.125rem] pb-[2.406rem] box-border relative min-w-[28.5rem] max-w-full">
                          <Image
                            className="h-[2.75rem] w-[2.75rem] absolute !m-[0] top-[1.138rem] left-[1.125rem] rounded-21xl overflow-hidden shrink-0"
                            width={44}
                            height={44}
                            alt=""
                            src="/Frame_1116601921_1.svg"
                          />
                          <Box className="w-[23rem] flex flex-col items-start justify-start relative gap-[0.5rem] max-w-full">
                            <Box className="self-stretch flex flex-row items-center justify-start max-w-full">
                              <Box className="flex-1 flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] box-border max-w-full">
                                <Box className="relative leading-[1.25rem] font-medium">
                                  Lorem ipsum dolor sit amet consectetur. Dui
                                  vel quis dignissim mattis enim tincidunt.
                                </Box>
                              </Box>
                            </Box>
                            <Box className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.187rem] text-day-gray-07">
                              <Box className="relative leading-[1.25rem]">
                                <Typography
                                  className="m-0"
                                  variant="inherit"
                                >{`Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra `}</Typography>
                                <Typography className="m-0" variant="inherit">
                                  in a adipisinc metus quis del
                                </Typography>
                              </Box>
                            </Box>
                            <Image
                              className="w-[3.75rem] h-[3.75rem] absolute !m-[0] right-[4.875rem] bottom-[2.081rem] overflow-hidden shrink-0 z-[1]"
                              loading="lazy"
                              width={60}
                              height={60}
                              alt=""
                              src="/SVG.svg"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="w-[44.375rem] flex flex-row items-start justify-start max-w-full [row-gap:20px] text-[2.275rem] text-absolute-green mq800:flex-wrap">
                      <Box className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[2.5rem]">
                        <Box className="rounded-[59.2px] bg-mintcream flex flex-row items-center justify-center pt-[2.012rem] pb-[2.018rem] pl-[1.812rem] pr-[1.687rem]">
                          <Box className="flex flex-row items-center justify-center py-[0.218rem] px-[0rem] gap-[0.125rem]">
                            <Box className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0.187rem]">
                              <Box className="relative font-medium mq450:text-[1.375rem] mq800:text-[1.813rem]">
                                76
                              </Box>
                            </Box>
                            <Box className="flex flex-col items-start justify-start text-[1rem]">
                              <Box className="relative leading-[1.375rem] font-medium inline-block min-w-[0.938rem]">
                                %
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border min-w-[22.438rem] max-w-full text-[0.944rem] text-groww-in-stocks-zomato-ltd-1440x810-default-waterloo mq800:min-w-full">
                        <Box className="self-stretch flex flex-col items-start justify-start max-w-full">
                          <Box className="self-stretch flex flex-row items-start justify-start p-[0.5rem] box-border gap-[1.606rem] max-w-full text-[0.938rem]">
                            <Box className="relative leading-[1.375rem] font-medium inline-block min-w-[1.813rem] max-w-[3.357rem]">
                              Buy
                            </Box>
                            <Box className="w-[24.256rem] flex flex-row items-start justify-start gap-[0.625rem] max-w-[calc(100%_-_55px)] text-[0.894rem] mq450:flex-wrap">
                              <Box className="flex-1 flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border min-w-[14.188rem] max-w-full">
                                <Box className="self-stretch h-[0.5rem] relative rounded-sm bg-groww-in-stocks-zomato-ltd-1440x810-default-persian-green" />
                              </Box>
                              <Box className="relative leading-[1.375rem] font-medium">
                                76%
                              </Box>
                            </Box>
                          </Box>
                          <Box className="self-stretch flex flex-row items-start justify-start p-[0.5rem] gap-[1.231rem] mq450:flex-wrap">
                            <Box className="relative leading-[1.375rem] font-medium inline-block max-w-[3.357rem]">
                              Hold
                            </Box>
                            <Box className="flex flex-row items-start justify-start gap-[0.625rem] text-[0.975rem]">
                              <Box className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                                <Box className="w-[2.063rem] h-[0.5rem] relative rounded-sm bg-groww-in-stocks-zomato-ltd-1440x810-default-french-gray" />
                              </Box>
                              <Box className="relative leading-[1.375rem] font-medium">
                                8%
                              </Box>
                            </Box>
                          </Box>
                          <Box className="self-stretch flex flex-row items-start justify-start p-[0.5rem] gap-[1.668rem]">
                            <Box className="relative leading-[1.375rem] font-medium inline-block min-w-[1.75rem] max-w-[3.357rem]">
                              Sell
                            </Box>
                            <Box className="w-[6.719rem] flex flex-row items-start justify-start gap-[0.625rem] text-[0.975rem]">
                              <Box className="flex-1 flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                                <Box className="self-stretch h-[0.5rem] relative rounded-sm bg-absolute-red" />
                              </Box>
                              <Box className="relative leading-[1.375rem] font-medium inline-block min-w-[2rem]">
                                16%
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start pt-[1.437rem] px-[1.5rem] pb-[8rem] box-border relative gap-[0.625rem] max-w-full mq800:pb-[3.375rem] mq800:box-border mq1125:pt-[1.25rem] mq1125:pb-[5.188rem] mq1125:box-border">
                <Box className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.937rem]">
                  <Typography
                    className="m-0 relative mq450:text-[1.188rem] mq450:leading-[1.438rem]"
                    variant="inherit"
                    component="h3"
                    sx={{ fontWeight: "600", lineHeight: "1.8rem" }}
                  >
                    About Bitcoin
                  </Typography>
                </Box>
                <Box className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-[1.125rem] text-gray-200">
                  <Typography
                    className="relative"
                    variant="inherit"
                    component="b"
                    sx={{ lineHeight: "1.35rem", fontWeight: "700" }}
                  >
                    What is Bitcoin?
                  </Typography>
                  <Box className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] gap-[0.937rem] text-[1rem] text-gray-2">
                    <Box className="relative leading-[160%] font-medium">
                      Bitcoin’s price today is US$16,951.82, with a 24-hour
                      trading volume of $19.14 B. BTC is +0.36% in the last 24
                      hours. It is currently -7.70% from its 7-day all-time high
                      of $18,366.66, and 3.40% from its 7-day all-time low of
                      $16,394.75. BTC has a circulating supply of 19.24 M BTC
                      and a max supply of 21 M BTC.
                    </Box>
                    <Box className="self-stretch h-[0.063rem] relative border-lightgray border-b-[1px] border-solid box-border" />
                  </Box>
                  <Typography
                    className="relative"
                    variant="inherit"
                    component="b"
                    sx={{ lineHeight: "1.35rem", fontWeight: "700" }}
                  >
                    Lorem ipsum dolor sit amet
                  </Typography>
                </Box>
                <Box className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] box-border max-w-full text-[1rem] text-gray-2">
                  <Box className="flex-1 relative leading-[160%] font-medium inline-block max-w-full">
                    <Typography
                      className="m-0 whitespace-pre-wrap"
                      variant="inherit"
                    >{`Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  `}</Typography>
                    <Typography className="m-0" variant="inherit">
                      &nbsp;
                    </Typography>
                    <Typography className="m-0" variant="inherit">
                      Diam praesent massa dapibus magna aliquam a dictumst
                      volutpat. Egestas vitae pellentesque auctor amet. Nunc
                      sagittis libero adipiscing cursus felis pellentesque
                      interdum. Odio cursus phasellus velit in senectus enim
                      dui. Turpis tristique placerat interdum sed volutpat. Id
                      imperdiet magna eget eros donec cursus nunc. Mauris
                      faucibus diam mi nunc praesent massa turpis a. Integer
                      dignissim augue viverra nulla et quis lobortis phasellus.
                      Integer pellentesque enim convallis ultricies at.
                    </Typography>
                    <Typography className="m-0" variant="inherit">
                      &nbsp;
                    </Typography>
                    <Typography className="m-0" variant="inherit">
                      Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                      aliquam massa vel convallis duis ac. Mi adipiscing semper
                      scelerisque porttitor pulvinar nunc risus. Fermentum
                      potenti iaculis lacinia congue ipsum fames amet dui. Purus
                      ultrices tincidunt volutpat in eget. Ullamcorper dui
                    </Typography>
                  </Box>
                </Box>
                <Box className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] box-border max-w-full">
                  <Box className="self-stretch flex-1 relative border-lightgray border-b-[1px] border-solid box-border max-w-full" />
                </Box>
                <Box className="w-[50.438rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] box-border gap-[0.5rem] max-w-full">
                  <Typography
                    className="m-0 w-[29.063rem] h-[2.938rem] relative flex items-center shrink-0 max-w-full mq450:text-[1.188rem] mq450:leading-[1.438rem]"
                    variant="inherit"
                    component="h3"
                    sx={{ fontWeight: "600", lineHeight: "1.8rem" }}
                  >
                    Already Holding Bitcoin?
                  </Typography>
                  <Box className="self-stretch flex flex-row items-start justify-start gap-[1.937rem] max-w-full mq450:gap-[0.938rem] mq800:flex-wrap">
                    <GroupComponent
                      buttonBackgrounds="/Rectangle_11947.svg"
                      calculateYourProfits="Calculate your Profits"
                      iconlyLightArrowRight="/Arrow_Right.svg"
                    />
                    <GroupComponent
                      groupBoxBackground="linear-gradient(135.73deg, #ff9865, #ef3031)"
                      rectangleBoxBackground="linear-gradient(135.73deg, #ff9865, #ef3031)"
                      buttonBackgrounds="/Rectangle_11947_1.svg"
                      calculateYourProfits="Calculate your tax liability"
                      iconlyLightArrowRight="/Arrow_Right.svg"
                    />
                  </Box>
                </Box>
                <Box className="self-stretch h-[0.063rem] relative border-lightgray border-b-[1px] border-solid box-border" />
                <Box className="w-[51.875rem] absolute !m-[0] bottom-[-1.062rem] left-[1.5rem] text-[1rem] leading-[160%] font-medium text-gray-2 inline-block min-h-[8.125rem]">
                  <Typography className="m-0" variant="inherit">
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                    aliquam massa vel convallis duis ac. Mi adipiscing semper
                    scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                    iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                    tincidunt volutpat in eget. Ullamcorper dui
                  </Typography>
                  <Typography className="m-0" variant="inherit">
                    &nbsp;
                  </Typography>
                </Box>
              </Box>
              <Box className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start pt-[1.437rem] px-[1.5rem] pb-[3.762rem] box-border gap-[1.55rem] max-w-full mq800:pt-[1.25rem] mq800:pb-[2.438rem] mq800:box-border">
                <Typography
                  className="m-0 relative mq450:text-[1.188rem] mq450:leading-[1.438rem]"
                  variant="inherit"
                  component="h3"
                  sx={{ fontWeight: "600", lineHeight: "1.8rem" }}
                >
                  Tokenomics
                </Typography>
                <Box className="self-stretch flex flex-col items-start justify-start min-h-[14.188rem] max-w-full text-[1.25rem] text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray1">
                  <Box className="flex flex-col items-start justify-start max-w-full">
                    <Box className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem]">
                      <Box className="relative leading-[2.25rem] font-semibold inline-block max-w-[50.625rem] mq450:text-[1rem] mq450:leading-[1.813rem] mq1125:max-w-full">
                        Initial Distribution
                      </Box>
                    </Box>
                    <Box className="self-stretch flex flex-row items-center justify-start py-[0.968rem] pl-[0rem] pr-[24.437rem] gap-[1.5rem] text-[1rem] text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft mq450:pr-[1.25rem] mq450:box-border mq800:flex-wrap mq1125:pr-[12.188rem] mq1125:box-border">
                      <Image
                        className="h-[11.188rem] w-[11.188rem] relative mq800:flex-1"
                        loading="lazy"
                        width={179}
                        height={179}
                        alt=""
                        src="/Frame_1116601936.svg"
                      />
                      <Box className="flex-1 flex flex-row items-center justify-start py-[1.25rem] px-[0rem] box-border min-w-[8.75rem]">
                        <Box className="flex-1 flex flex-col items-start justify-center py-[1.718rem] px-[0rem] gap-[1rem]">
                          <Box className="self-stretch flex flex-row items-center justify-start">
                            <Box className="flex flex-col items-start justify-center py-[0.25rem] pl-[0rem] pr-[0.562rem]">
                              <Box className="w-[0.75rem] h-[0.75rem] relative rounded-md bg-dodgerblue" />
                            </Box>
                            <Box className="flex flex-col items-start justify-start">
                              <Box className="relative leading-[1.25rem]">
                                Crowdsale investors: 80%
                              </Box>
                            </Box>
                          </Box>
                          <Box className="self-stretch flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[4.187rem]">
                            <Box className="flex flex-col items-start justify-center py-[0.25rem] pl-[0rem] pr-[0.562rem]">
                              <Box className="w-[0.75rem] h-[0.75rem] relative rounded-md bg-orange" />
                            </Box>
                            <Box className="flex flex-col items-start justify-start">
                              <Box className="relative leading-[1.25rem] inline-block min-w-[8rem]">
                                Foundation: 20%
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="relative text-[1rem] leading-[160%] font-medium text-gray-2">
                    Lorem ipsum dolor sit amet consectetur. Cras aliquet
                    tristique ornare vestibulum nunc dignissim vel consequat.
                    Leo etiam nascetur bibendum amet enim sit eget leo amet. At
                    metus orci augue fusce eleifend lectus eu fusce adipiscing.
                    Volutpat ultrices nibh sodales massa habitasse urna felis
                    augue. Gravida aliquam fermentum augue eu. Imperdiet
                    bibendum amet aliquam donec. Eget justo dui metus odio
                    rutrum. Vel ipsum eget in at curabitur sem posuere facilisis
                    vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum
                    aliquet odio nisi eu ac risus.
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start pt-[1.437rem] px-[1.5rem] pb-[2.668rem] box-border gap-[1.512rem] max-w-full text-center text-[0.938rem] mq450:pb-[1.25rem] mq450:box-border mq800:pt-[1.25rem] mq800:pb-[1.75rem] mq800:box-border">
                <Typography
                  className="m-0 relative text-left mq450:text-[1.188rem] mq450:leading-[1.438rem]"
                  variant="inherit"
                  component="h3"
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    lineHeight: "1.8rem",
                  }}
                >
                  Team
                </Typography>
                <Box className="relative text-[1rem] leading-[160%] font-medium text-gray-2 text-left">
                  Lorem ipsum dolor sit amet consectetur. Id consequat
                  adipiscing arcu nibh. Eget mattis in mi integer sit egestas.
                  Proin tempor id pretium quam. Facilisis purus convallis quam
                  augue.
                </Box>
                <Box className="w-[51.313rem] rounded-5xs-5 bg-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude flex flex-row items-center justify-start py-[0.7rem] pl-[0.687rem] pr-[1.187rem] box-border gap-[1rem] max-w-full mq800:flex-wrap">
                  <Box className="flex flex-col items-center justify-start py-[0rem] px-[0.937rem] gap-[0.825rem]">
                    <Image
                      className="w-[6.025rem] flex-1 relative rounded-6xs-7 max-h-full overflow-hidden object-cover"
                      loading="lazy"
                      width={96}
                      height={105}
                      alt=""
                      src="/sandeep.svg"
                    />
                    <Box className="self-stretch flex flex-col items-center justify-start gap-[0.256rem]">
                      <Box className="w-[6.188rem] relative font-semibold inline-block">
                        John Smith
                      </Box>
                      <Box className="self-stretch relative text-[0.75rem] font-medium text-day-gray-06 inline-block min-w-[6.188rem]">
                        Designation here
                      </Box>
                    </Box>
                  </Box>
                  <Box className="flex-1 relative text-[0.875rem] leading-[160%] text-left inline-block min-w-[26.25rem] max-w-full mq800:min-w-full">
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                    sit fermentum ut libero hendrerit id. Tellus sit ornare
                    netus sagittis in nunc convallis mattis maecenas. Tempus
                    arcu leo sociis laoreet nec neque sed pellentesque viverra.
                    Consectetur proin amet ut id facilisi quis consectetur.
                    Tellus gravida ultricies feugiat sed eu egestas dolor est
                    ipsum. Malesuada etiam mi gravida praesent interdu
                  </Box>
                </Box>
                <Box className="w-[51.313rem] rounded-5xs-5 bg-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude flex flex-row items-center justify-start py-[0.7rem] pl-[0.687rem] pr-[1.187rem] box-border gap-[1rem] max-w-full mq800:flex-wrap">
                  <Box className="flex flex-col items-center justify-start py-[0rem] px-[0.875rem] gap-[0.825rem]">
                    <Image
                      className="w-[6.025rem] flex-1 relative rounded-6xs-7 max-h-full overflow-hidden object-cover"
                      width={96}
                      height={105}
                      alt=""
                      src="/sandeep_1.svg"
                    />
                    <Box className="self-stretch flex flex-col items-center justify-start gap-[0.256rem]">
                      <Box className="self-stretch relative font-semibold inline-block min-w-[6.313rem]">
                        Elina Williams
                      </Box>
                      <Box className="self-stretch relative text-[0.75rem] font-medium text-day-gray-06">
                        Designation here
                      </Box>
                    </Box>
                  </Box>
                  <Box className="flex-1 relative text-[0.875rem] leading-[160%] text-left inline-block min-w-[26.25rem] max-w-full mq800:min-w-full">
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                    sit fermentum ut libero hendrerit id. Tellus sit ornare
                    netus sagittis in nunc convallis mattis maecenas. Tempus
                    arcu leo sociis laoreet nec neque sed pellentesque viverra.
                    Consectetur proin amet ut id facilisi quis consectetur.
                    Tellus gravida ultricies feugiat sed eu egestas dolor est
                    ipsum. Malesuada etiam mi gravida praesent interdu
                  </Box>
                </Box>
                <Box className="w-[51.313rem] rounded-5xs-5 bg-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude flex flex-row items-center justify-start py-[0.7rem] pl-[0.687rem] pr-[1.187rem] box-border gap-[1rem] max-w-full mq800:flex-wrap">
                  <Box className="flex flex-col items-center justify-start py-[0rem] px-[0.937rem] gap-[0.825rem]">
                    <Image
                      className="w-[6.025rem] flex-1 relative rounded-6xs-7 max-h-full overflow-hidden object-cover"
                      width={96}
                      height={105}
                      alt=""
                      src="/sandeep_2.svg"
                    />
                    <Box className="self-stretch flex flex-col items-center justify-start gap-[0.256rem]">
                      <Box className="w-[5.188rem] relative font-semibold inline-block">
                        John Smith
                      </Box>
                      <Box className="self-stretch relative text-[0.75rem] font-medium text-day-gray-06 inline-block min-w-[6.188rem]">
                        Designation here
                      </Box>
                    </Box>
                  </Box>
                  <Box className="flex-1 relative text-[0.875rem] leading-[160%] text-left inline-block min-w-[26.25rem] max-w-full mq800:min-w-full">
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                    sit fermentum ut libero hendrerit id. Tellus sit ornare
                    netus sagittis in nunc convallis mattis maecenas. Tempus
                    arcu leo sociis laoreet nec neque sed pellentesque viverra.
                    Consectetur proin amet ut id facilisi quis consectetur.
                    Tellus gravida ultricies feugiat sed eu egestas dolor est
                    ipsum. Malesuada etiam mi gravida praesent interdu
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="w-[26.688rem] flex flex-col items-start justify-start pt-[2.175rem] px-[0rem] pb-[0rem] box-border max-w-full text-center text-white mq800:min-w-full mq1300:flex-1">
              <Box className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                <Box className="self-stretch rounded-2xl overflow-hidden flex flex-row items-start justify-start max-w-full">
                  <Box className="flex-1 rounded-lg bg-primary-blue flex flex-col items-end justify-start pt-[1.937rem] px-[3.062rem] pb-[3.112rem] box-border gap-[1.187rem] max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:pt-[1.25rem] mq800:pb-[2rem] mq800:box-border">
                    <Box className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem] gap-[0.875rem]">
                      <Box className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.812rem]">
                        <Typography
                          className="m-0 flex-1 relative mq450:text-[1.188rem] mq450:leading-[2rem]"
                          variant="inherit"
                          component="h3"
                          sx={{ fontWeight: "700", lineHeight: "2.5rem" }}
                        >
                          Get Started with KoinX for FREE
                        </Typography>
                      </Box>
                      <Box className="relative text-[0.875rem] leading-[1.5rem] font-medium text-whitesmoke-100">
                        With our range of features that you can equip for free,
                        KoinX allows you to be more educated and aware of your
                        tax reports.
                      </Box>
                    </Box>
                    <Box className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[4.687rem] pr-[4.625rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                      <Image
                        className="h-[10.388rem] flex-1 relative max-w-full overflow-hidden"
                        width={179}
                        height={166}
                        alt=""
                        src="/Frame.svg"
                      />
                    </Box>
                    <Button
                      className="self-stretch h-[3rem]"
                      endIcon={
                        <img
                          width="20px"
                          height="20px"
                          src="/Arrow_Right.svg"
                        />
                      }
                      variant="text"
                      sx={{
                        textTransform: "none",
                        color: "#0f152a",
                        fontSize: "16",
                        borderRadius: "5px",
                        height: 48,
                        width: 200,
                        backgroundColor: "#fff",
                        left: "20%",
                      }}
                    >
                      Get Started for FREE
                    </Button>
                  </Box>
                </Box>
                <Box className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start p-[1.5rem] gap-[1.5rem] text-left text-day-gray-08">
                  <Box className="self-stretch flex flex-row items-start justify-start gap-[3.562rem]">
                    <Typography
                      className="m-0 relative mq450:text-[1.188rem] mq450:leading-[1.438rem]"
                      variant="inherit"
                      component="h3"
                      sx={{ fontWeight: "600", lineHeight: "1.8rem" }}
                    >
                      Trending Coins (24h)
                    </Typography>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[1rem]">
                    {trendingCoins.map((coin, index) => (
                      <Box
                        key={index}
                        className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap"
                      >
                        <Box className="flex flex-row items-center justify-start gap-[0.375rem]">
                          <Image
                            className="h-[1.5rem] w-[1.5rem] relative"
                            loading="lazy"
                            width={24}
                            height={24}
                            alt={coin.item.name}
                            src={coin.item.thumb}
                          />
                          <Box className="relative leading-[1.5rem] font-medium">
                            {coin.item.name} ({coin.item.symbol.toUpperCase()})
                          </Box>
                        </Box>
                        <Box
                          className={`rounded bg-mintcream flex flex-row items-center justify-center py-[0.281rem] px-[0.562rem] gap-[0.5rem] text-center ${
                            coin.item.data.price_change_percentage_24h.usd >= 0
                              ? "text-mediumseagreen"
                              : "text-red-500"
                          }`}
                        >
                          <Image
                            className="h-[0.5rem] w-[0.688rem] relative"
                            width={11}
                            height={8}
                            alt="change direction"
                            src={
                              coin.item.data.price_change_percentage_24h.usd >=
                              0
                                ? "/Polygon_2.svg"
                                : "/Polygon_3.svg"
                            }
                          />
                          <Box className="flex-1 relative font-medium">
                            {coin.item.data.price_change_percentage_24h.usd.toFixed(
                              2
                            )}
                            %
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
      <YouMayAlsoLike />
    </Box>
  );
};

export default Bitcoin;
