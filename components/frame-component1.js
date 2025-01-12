import { Box, Button } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch shadow-[0px_0px_12px_rgba(16,_38,_73,_0.06)] bg-white border-gainsboro border-b-[1px] border-solid box-border flex flex-row items-start justify-between pt-[1.25rem] pb-[1.125rem] pl-[3.75rem] pr-[3.5rem] top-[0] z-[99] sticky max-w-full gap-[1.25rem] text-left text-[1rem] text-day-gray-08 font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 mq800:pl-[1.875rem] mq800:pr-[1.75rem] mq800:box-border ${className}`}
    >
      <Box className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
        <Image
          className="self-stretch h-[1.5rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          width={96}
          height={24}
          alt=""
          src="/KoinX_Logo.svg"
        />
      </Box>
      <Box className="w-[34.625rem] flex flex-row items-start justify-start gap-[2rem] max-w-full mq800:hidden mq800:gap-[1rem]">
        <Box className="flex-1 flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
          <Box className="self-stretch h-[1.188rem] relative">
            <a className="[text-decoration:none] absolute top-[0rem] left-[0rem] tracking-[-0.01em] font-semibold text-[inherit] inline-block w-[6.438rem] h-[1.188rem] min-w-[6.438rem] whitespace-nowrap">
              Crypto Taxes
            </a>
            <a className="[text-decoration:none] absolute top-[0rem] left-[8.375rem] tracking-[-0.01em] font-semibold text-[inherit] inline-block w-[5rem] h-[1.188rem] min-w-[5rem] whitespace-nowrap">
              Free Tools
            </a>
          </Box>
        </Box>
        <Box className="flex flex-col items-start justify-start pt-[0.625rem] pb-[0rem] pl-[0rem] pr-[0.75rem]">
          <a className="[text-decoration:none] relative tracking-[-0.01em] font-semibold text-[inherit] inline-block min-w-[8.063rem]">
            Resource Center
          </a>
        </Box>
        <Button
          className="h-[2.5rem] w-[8.5rem]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background:
              "linear-gradient(81.62deg, #2870ea 8.72%, #1b4aef 85.01%)",
            borderRadius: "8px",
            "&:hover": {
              background:
                "linear-gradient(81.62deg, #2870ea 8.72%, #1b4aef 85.01%)",
            },
            width: 136,
            height: 40,
          }}
        >
          Get Started
        </Button>
      </Box>
      <Box className="h-[4.375rem] hidden flex-row items-center justify-center text-gray-2">
        <Box className="relative tracking-[-0.01em] font-medium">Feedback</Box>
      </Box>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
