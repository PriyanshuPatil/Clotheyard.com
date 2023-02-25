import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomePage.css";
import img_animation from "../../Assets/ONENESS-DESKTOP-ANIMATION.gif";
import Mid1 from "../../Assets/mid1.jpg";
import Mid2 from "../../Assets/mid2.jpg";
import con2_img from "../../Assets/shortgirl.jpg";
import love_img from "../../Assets/aerofashionlovebag.png";
import guys_img from "../../Assets/guysshort.jpg";
import girl_sec from "../../Assets/girlsecondpost.jpg";
import tshirt_img from "../../Assets/tshirtpost.jpg";
import last_jeans from "../../Assets/lastjeansimage.jpg";
import recyle from "../../Assets/recycleicon.svg";
import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <Box m="auto" w="100%" className="HomeContainer">
      {/* Good things section */}
      <Flex
        lineHeight={{
          base: "0.9rem",
          lg: "1.2rem",
        }}
        display={{
          base: "block",
          md: "block",
          lg: "flex",
        }}
        className="HomeGoodThingsSection"
      >
        <Box
          width={{
            base: "100%",
            md: "80%",
            lg: "70%",
          }}
          fontSize={{
            base: "9px",
            md: "11px",
            lg: "12px",
          }}
        >
          <Text
            fontSize={{
              base: "10px",
              md: "12px",
              lg: "15px",
            }}
          >
            Good Things Take Time.
          </Text>
          Over the last few weeks, we've implemented extra precautionary
          measures in our warehouse to ensure the health and safety of our
          customers and associates. Because of this your shipment may experience
          delays. Thank you for your patience and understanding.
        </Box>
        <Text
          fontSize={{
            base: "10px",
            md: "12px",
            lg: "15px",
          }}
          textDecoration={"underline"}
        >
          Learn More & Stay Safe
        </Text>
      </Flex>

      {/* main body  */}

      <Box w={"98%"} m="auto" py={"10px"}>
        <Box m="auto" w={"100%"} className="HomeBannerSection">
          <Box>
            <Image src={img_animation} alt="animation img" />
          </Box>
          <Flex
            display={{
              base: "flex",
              md: "block",
              lg: "block",
            }}
            align={"center"}
          >
            <Text
              fontSize={{
                base: "5px",
                md: "12px",
                lg: "25px",
              }}
              fontWeight={"bold"}
              color={"#fff"}
              textAlign="center"
            >
              STAND TALL. STAND PROUD. STAND OUT.
            </Text>
            <Text
              fontSize={{
                base: "3px",
                md: "12px",
                lg: "15px",
              }}
              color={"#fff"}
              fontWeight={"bold"}
              textAlign="center"
              letterSpacing={"0.3px"}
            >
              Take pride in who you are
              <br />
              Celebrate inBoxiduality together
            </Text>
          </Flex>
        </Box>

        {/* 50-70% Off Everything! section */}
        <Flex
          alignItems={"center"}
          display={{
            base: "block",
            md: "block",
            lg: "flex",
          }}
          mt="20px"
        >
          <Box
            mt={{
              base: "-1.5rem",
              lg: "0",
            }}
          >
            <Text
              py="1rem"
              fontSize={{
                base: "1.5rem",
                md: "3rem",
                lg: "4rem",
              }}
              fontWeight="bold"
              lineHeight={"1"}
              color="#ee5e68"
              letterSpacing={"0.3px"}
              textAlign="center"
            >
              50-70% Off Everything!
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{
                base: "0.9rem",
                md: "1.5rem",
                lg: "2rem",
              }}
              lineHeight="1"
              color="#ee5e68"
            >
              & Our Biggest Shorts Event of The Season!
            </Text>
            <Text fontSize="12px" fontWeight={"500"} color="#ee5e68">
              *Exclusions Apply
            </Text>
          </Box>
          <Box
            my={{
              base: "1rem",
              md: "1rem",
              lg: "0",
            }}
            ml={"9px"}
            m="auto"
            h="auto"
            justifyContent={"center"}
          >
            <Grid
              mt={{
                base: "1rem",
                lg: "0",
              }}
              gap={"1rem"}
              justifyContent={"center"}
              templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
            >
              <Button
                _hover={{
                  backgroundColor: "#ee5e68",
                  color: "white",
                }}
                color="#ee5e68"
                h={"3rem"}
                variant="outline"
                border={"2px solid #ee5e68"}
                colorScheme="red"
                size="xs"
                fontSize={"18px"}
              >
                Shop Girls
              </Button>
              <Button
                _hover={{
                  backgroundColor: "#ee5e68",
                  color: "white",
                }}
                color="#ee5e68"
                h={"3rem"}
                variant="outline"
                border={"2px solid #ee5e68"}
                colorScheme="red"
                size="xs"
                fontSize={"18px"}
              >
                Girls Shorts <strong> $11.87 & Up</strong>
              </Button>
              <Button
                _hover={{
                  backgroundColor: "#ee5e68",
                  color: "white",
                }}
                h={"3rem"}
                variant="outline"
                border={"2px solid #ee5e68"}
                colorScheme="red"
                size="xs"
                color={"#ee5e68"}
                fontSize={"18px"}
              >
                Shop Guys
              </Button>
              <Button
                _hover={{
                  backgroundColor: "#ee5e68",
                  color: "white",
                }}
                color="#ee5e68"
                h={"3rem"}
                variant="outline"
                border={"2px solid #ee5e68"}
                colorScheme="red"
                size="xs"
                fontSize={"18px"}
              >
                Guys Shorts <strong> $12 & Up</strong>
              </Button>
            </Grid>
          </Box>
        </Flex>

        <Flex
          mt="20px"
          m="auto"
          w="99%"
          py="1rem"
          display={{
            base: "block",
            md: "block",
            lg: "flex",
          }}
          rowGap="1rem"
          columnGap={"1rem"}
          cursor={"pointer"}
          alignItems="center"
        >
          <Image
            w={{
              base: "100%",
              md: "100%",
              lg: "50%",
            }}
            marginBottom={{ base: "1rem", lg: "0" }}
            src={Mid1}
          />
          <Image
            w={{
              base: "100%",
              md: "100%",
              lg: "50%",
            }}
            src={Mid2}
          />
        </Flex>

        <Flex
          h={{
            base: "8rem",
            lg: "5rem",
          }}
          mb={{ base: "1rem",lg:'0' }}
          display={{
            base: "block",
            lg: "flex",
          }}
          textAlign={{ base: "center" }}
          justifyContent={{ base: "center", lg: "space-between" }}
          bg="#ee5e68"
          px="1rem"
          color={"white"}
          alignItems={"center"}
          borderRadius="10px"
          className="HomeContainerAmbassadorSection"
        >
          <Box py={{ base: "1rem" }}>
            <Text fontSize={{ base: "1rem", lg: "1.5rem" }}>
              POV:Aero Pride Ambassador
            </Text>
          </Box>

          <Button
            w={{
              base: "15rem",
              md: "15rem",
              lg: "15rem",
            }}
            h={"3rem"}
            variant="outline"
            color="white"
            border={"2px solid white"}
            size="xs"
            fontSize={"18px"}
            _hover={{
              backgroundColor: "#fff",
              color: "black",
            }}
          >
            Learn More
          </Button>
        </Flex>

        {/* First section Girls Shorts with carousel */}
        <Flex
          justifyContent={"space-between"}
          display={{
            base: "block",
            md: "block",
            lg: "flex",
          }}
          columnGap="0.5rem"
          alignItems="center"
        >
          {/* Girl image */}
          <Box
            w={{
              base: "100%",
              md: "100%",
              lg: "25%",
            }}
          >
            <Image src={con2_img} alt="short_img" />
          </Box>

          {/* Girls sort section center part */}
          <Box
            w={{
              base: "100%",
              md: "100%",
              lg: "30%",
            }}
            my={{
              base: "1rem",
              md: "1rem",
              lg: "0",
            }}
            h={{
              base: "18rem",
              md: "22rem",
              lg: "31rem",
            }}
            className="HomeSectionSecondCenter"
          >
            <Box className="_home__textwrap_">
              <Text
                fontWeight={"700"}
                fontSize="2rem"
                color="white"
                lineHeight={"2.5rem"}
              >
                <strong>
                  Girls
                  <br />
                  Shorts
                </strong>
              </Text>
              <Text
                fontSize={"2rem"}
                color="white"
                lineHeight={"3rem"}
                fontWeight="normal"
                fontStyle={"normal"}
                letterSpacing="normal"
                m="0"
              >
                $
                <span style={{ fontSize: "3rem", position: "relative" }}>
                  11
                </span>
                .87 &amp; Up
              </Text>
              <Text
                fontSize={{
                  base: "0.8rem",
                  lg: "1.2rem",
                }}
                mt="0.5rem"
                color={"white"}
              >
                Vibrant prints. Must-feel fabrics.
                <br />
                One-of-a-kind Aero style.
              </Text>
              <Button
                mt="1rem"
                w={{
                  base: "15rem",
                  md: "15rem",
                  lg: "90%",
                }}
                h={"3rem"}
                variant="solid"
                color="black"
                size="xs"
                fontSize={"18px"}
                _hover={{
                  backgroundColor: "#1e3352",
                  color: "white",
                }}
              >
                Girl Shots
              </Button>
            </Box>
          </Box>

          {/*Girls  Carousel section */}
          <Box
            w={{
              base: "100%",
              md: "100%",
              lg: "45%",
            }}
            overflow="hidden"
            textAlign={"center"}
          >
            <Carousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              showDots={true}
            >
              <Box>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd31e0e5c/images/jeans-guide/031320-girls-shorts-guide/CURVY.jpg"
                    alt="product"
                  />
                </Link>
                <p>Curvy New!</p>
              </Box>
              <Box>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw1d7d9d9a/images/jeans-guide/031320-girls-shorts-guide/VINTAGE%20HIGH%20RISE.jpg"
                    alt="product"
                  />
                </Link>
                <p>Vintage High Rise</p>
              </Box>
              <Box>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwe4c9367c/images/jeans-guide/031320-girls-shorts-guide/MOM.jpg"
                    alt="product"
                  />
                </Link>
                <p>Mom New!</p>
              </Box>
              <Box>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw263e01e0/images/jeans-guide/031320-girls-shorts-guide/BERMUDA.jpg"
                    alt="product"
                  />
                </Link>
                <p>Bermuda</p>
              </Box>
              <Box>
                <Link to="/women">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw95172bda/images/jeans-guide/031320-girls-shorts-guide/SUPER%20HIGH%20RISE.jpg"
                    alt="product"
                  />
                </Link>
                <p>Midi</p>
              </Box>
            </Carousel>
          </Box>
        </Flex>

        {/* Nice to See You Again! */}
        <Box
          alignItems={"center"}
          w={"100%"}
          py={{
            base: "0.5rem",
            md: "0.8rem",
            lg: "1rem",
          }}
          h={"fit-content"}
          className="HomeNiceToSeeYouSection"
        >
          <Box className="NicetoSeeYouImage">
            <Image h={"auto"} src={love_img} alt="love img" />
          </Box>
          <Box w="100%" color={"white"}>
            <Text
              mt={{
                base: "0.2rem",
                lg: "0.3rem",
              }}
              fontSize={{
                base: "1rem",
                lg: "2rem",
              }}
              textAlign="center"
              fontWeight={"bold"}
              pt="0.5rem"
            >
              Nice to See You Again!
            </Text>
            <Text
              mt={"0.1rem"}
              fontSize={{
                base: "0.9rem",
                lg: "1.5rem",
              }}
              textAlign="center"
              fontWeight={"bold"}
            >
              Certain Aero Locations Are Carefully Reopening
            </Text>
            <Text
              mt={"0.2rem"}
              fontSize={{
                base: "0.7rem",
                lg: "1.2rem",
              }}
              lineHeight={{
                base: "0.8rem",
                lg: "1.5rem",
              }}
              textAlign="center"
            >
              & offering FREE storefront pick up. We're taking extra
              <br />
              precautions to keep our customers and associates safe.
            </Text>
          </Box>

          <Flex
            pt="2rem"
            w={"70%"}
            m="auto"
            mt={{
              base: "-1rem",
            }}
            display={{
              base: "block",
              lg: "flex",
            }}
            justifyContent="space-between"
          >
            <Button
              mt={{
                base: "0.5rem",
              }}
              _hover={{
                backgroundColor: "#fff",
                color: "black",
              }}
              color="#fff"
              border={"2px solid white"}
              h={"3rem"}
              variant="outline"
              w={"15rem"}
              colorScheme="white"
              size="xs"
              fontSize={"18px"}
            >
              Find A Store
            </Button>
            <Button
              mt={{
                base: "0.5rem",
              }}
              _hover={{
                backgroundColor: "#fff",
                color: "black",
              }}
              w={"15rem"}
              color="#fff"
              border={"2px solid white"}
              h={"3rem"}
              variant="outline"
              colorScheme="white"
              size="xs"
              fontSize={"18px"}
            >
              Free Store Pick Up
            </Button>
            <Button
              mt={{
                base: "0.5rem",
              }}
              w={"15rem"}
              _hover={{
                backgroundColor: "#fff",
                color: "black",
              }}
              color="#fff"
              border={"2px solid white"}
              h={"3rem"}
              variant="outline"
              colorScheme="white"
              size="xs"
              fontSize={"18px"}
            >
              Learn More & Stay Safe
            </Button>
          </Flex>
        </Box>

        {/* Boys section with carousel  */}
        <Flex
          justifyContent={"space-between"}
          display={{
            base: "block",
            md: "block",
            lg: "flex",
          }}
          columnGap="0.5rem"
          alignItems="center"
        >
          {/* Carousel  */}
          <Box
            w={{
              base: "100%",
              md: "100%",
              lg: "45%",
            }}
            overflow="hidden"
            textAlign={"center"}
          >
            <Carousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              showDots={true}
            >
              <Box>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwc908e3b8/images/shorts-guide/2020/guys-shorts-guide/LONG%20CARGO.jpg"
                    alt="product"
                  />
                </Link>
                <p>Long Cargo</p>
              </Box>
              <Box>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw54f0dee5/images/shorts-guide/2020/guys-shorts-guide/SLIM%20CUT-OFF.jpg"
                    alt="product"
                  />
                </Link>
                <p>Slimk Cut-Off</p>
              </Box>
              <Box>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw8287ef13/images/shorts-guide/2020/guys-shorts-guide/BEACH%20CHINO.jpg"
                    alt="product"
                  />
                </Link>
                <p>Beach Chino</p>
              </Box>
              <Box>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw9619c8f9/images/shorts-guide/2020/guys-shorts-guide/SLIM%20CUFFED.jpg"
                    alt="product"
                  />
                </Link>
                <p>Clasic Chino</p>
              </Box>
              <Box>
                <Link to="/men">
                  <img
                    src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw323348c8/images/shorts-guide/2020/guys-shorts-guide/CLASSIC%20CHINO.jpg"
                    alt="product"
                  />
                </Link>
                <p>Slim Cuffed</p>
              </Box>
            </Carousel>
          </Box>

          {/* Boys sort section center part */}
          <Box
            w={{
              base: "100%",
              md: "100%",
              lg: "30%",
            }}
            my={{
              base: "1rem",
              md: "1rem",
              lg: "0",
            }}
            h={{
              base: "18rem",
              md: "22rem",
              lg: "29rem",
            }}
            className="HomeSectionSecondCenter"
          >
            <Box className="_home__textwrap_">
              <Text
                fontWeight={"700"}
                fontSize="2rem"
                color="white"
                lineHeight={"2.5rem"}
              >
                <strong>
                  Boys
                  <br />
                  Shorts
                </strong>
              </Text>
              <Text
                fontSize={"2rem"}
                color="white"
                lineHeight={"3rem"}
                fontWeight="normal"
                fontStyle={"normal"}
                letterSpacing="normal"
                m="0"
              >
                $
                <span style={{ fontSize: "3rem", position: "relative" }}>
                  12
                </span>
                .87 &amp; Up
              </Text>
              <Text
                fontSize={{
                  base: "0.8rem",
                  lg: "1.2rem",
                }}
                mt="0.5rem"
                color={"white"}
              >
                New Premium fabric elevated
                <br />
                with extra stretch for comfort and 360° of freedom.
              </Text>
              <Button
                mt="1rem"
                w={{
                  base: "15rem",
                  md: "15rem",
                  lg: "90%",
                }}
                h={"3rem"}
                variant="solid"
                color="black"
                size="xs"
                fontSize={"18px"}
                _hover={{
                  backgroundColor: "#1e3352",
                  color: "white",
                }}
              >
                Girl Shots
              </Button>
            </Box>
          </Box>

          {/* Boy image */}
          <Box
            w={{
              base: "100%",
              md: "100%",
              lg: "25%",
            }}
          >
            <Image src={guys_img} alt="short_img" />
          </Box>
        </Flex>

        {/* ===== Tees & Tanks Section ====== */}
        <Flex
          display={{
            base: "block",
            md: "block",
            lg: "flex",
          }}
          alignItems={"center"}
          justifyContent="space-between"
          mt={{ base: "1rem", lg: "2rem" }}
        >
          {/* Tees Tanks girl image Section */}
          <Box
            w={{
              base: "100%",
              md: "100%",
              lg: "23%",
            }}
          >
            <Image src={girl_sec} alt="short_img" />
          </Box>

          <Flex
            border={"2px solid yellow"}
            w={{
              base: "100%",
              md: "100%",
              lg: "75%",
            }}
            display={{
              base: "block",
              md: "block",
              lg: "flex",
            }}
            py="2rem"
            mt={"1rem"}
            className="HomeContainerTeesTankSection"
          >
            {/* Tees & Tanks text */}
            <Box
              px="0.5rem"
              w={{
                base: "100%",
                md: "100%",
                lg: "30%",
              }}
              my={{
                base: "1rem",
                md: "1rem",
                lg: "0",
              }}
              h={{
                base: "18rem",
                md: "22rem",
                lg: "28rem",
              }}
            >
              <Box
                mt={{
                  base: "0",
                  lg: "3rem",
                }}
              >
                <Text
                  fontWeight={"700"}
                  fontSize="2rem"
                  color="white"
                  lineHeight={"2.5rem"}
                >
                  <strong>Tees & Tanks</strong>
                </Text>
                <Text
                  fontSize={"2rem"}
                  color="white"
                  lineHeight={"3rem"}
                  fontWeight="normal"
                  fontStyle={"normal"}
                  letterSpacing="normal"
                  m="0"
                >
                  $
                  <span style={{ fontSize: "3rem", position: "relative" }}>
                    6
                  </span>
                  .87 &amp; Up
                </Text>
                <Text
                  fontSize={{
                    base: "0.8rem",
                    lg: "1.2rem",
                  }}
                  mt="0.5rem"
                  color={"white"}
                >
                  Wear what you feel with statement-making graphics and fun
                  splashes of color.
                </Text>
                <Button
                  mt="1rem"
                  w={{
                    base: "15rem",
                    md: "15rem",
                    lg: "90%",
                  }}
                  h={"3rem"}
                  variant="solid"
                  color="black"
                  size="xs"
                  fontSize={"18px"}
                  _hover={{
                    backgroundColor: "#1e3352",
                    color: "white",
                  }}
                >
                  Shop Girls Tees
                </Button>
                <Button
                  mt="1rem"
                  w={{
                    base: "15rem",
                    md: "15rem",
                    lg: "90%",
                  }}
                  h={"3rem"}
                  variant="solid"
                  color="black"
                  size="xs"
                  fontSize={"18px"}
                  _hover={{
                    backgroundColor: "#1e3352",
                    color: "white",
                  }}
                >
                  Shop Guys Tees
                </Button>
              </Box>
            </Box>

            {/* Tshit image */}
            <Box m="auto" w={{ base: "98%", lg: "65%" }}>
              <Image
                w={"100%"}
                borderRadius={"8px"}
                src={tshirt_img}
                alt="tshirt"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* =============  Two carousel Section  ===================*/}
      <Flex
        display={{
          base: "block",
          md: "block",
          lg: "flex",
        }}
        mt={{
          base: "block",
          md: "block",
          lg: "20px",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left carousel */}
        <Box
          w={{
            base: "100%",
            md: "100%",
            lg: "45%",
          }}
          overflow="hidden"
          textAlign={"center"}
        >
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            showDots={true}
          >
            <Box>
              <Link to="/women">
                <img
                  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw40b59aa7/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GIRLS_CHEEKY-min.jpg"
                  alt="product"
                />
              </Link>
              <p>Curvy New!</p>
            </Box>
            <Box>
              <img
                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwfafadc45/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_ATHLETICSKINNY-min.jpg"
                alt="product"
              />
              <p>Vintage High Rise</p>
            </Box>
            <Box>
              <img
                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw678aa8b7/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GIRLS_CURVY-min.jpg"
                alt="product"
              />
              <p>Curvy New!</p>
            </Box>
            <Box>
              <img
                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd384b11b/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_SLIM-min.jpg"
                alt="product"
              />
              <p>Curvy New!</p>
            </Box>
            <Box>
              <img
                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw0bcce79d/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GIRLS_SKINNY_JEGGING-min.jpg"
                alt="product"
              />
              <p>Curvy New!</p>
            </Box>
          </Carousel>
        </Box>

        <Box
          textAlign={"center"}
          w={{
            base: "100%",
            md: "100%",
            lg: "35%",
          }}
          justifyContent="center"
          height={"fit-content"}
          className="_container_5_middle_data_"
        >
          <Text
            fontSize={"2rem"}
            fontWeight="bold"
            color={"#02afcf"}
            lineHeight="2.5rem"
          >
            <strong>
              Aero
              <br />
              Jeans
            </strong>
          </Text>
          <Text
            color={"#02afcf"}
            textAlign="center"
            lineHeight={"1.6rem"}
            fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.5rem" }}
          >
            The easiest fits, the most
            <br />
            comfortable stretch. Complete
            <br />
            with special washes that make
            <br />
            them all your own.
          </Text>
          <Box>
            <Button
              mt="1rem"
              w={{
                base: "15rem",
                md: "15rem",
                lg: "90%",
              }}
              h={"3rem"}
              variant="solid"
              color="#02afcf"
              bg="white"
              size="xs"
              border={"2px solid #02afcf"}
              fontSize={"18px"}
              _hover={{
                backgroundColor: "#02afcf",
                color: "white",
              }}
            >
              Girls Jeans <strong> $ 17.87 & Up</strong>
            </Button>
            <Button
              mt="1rem"
              w={{
                base: "15rem",
                md: "15rem",
                lg: "90%",
              }}
              h={"3rem"}
              variant="solid"
              color="#02afcf"
              bg="white"
              size="xs"
              border={"2px solid #02afcf"}
              fontSize={"18px"}
              _hover={{
                backgroundColor: "#02afcf",
                color: "white",
              }}
            >
              Guys Jeans <strong> $ 17.87 & Up</strong>
            </Button>
          </Box>
        </Box>

        {/* Right carousel */}
        <Box
          w={{
            base: "100%",
            md: "100%",
            lg: "45%",
          }}
          overflow="hidden"
          textAlign={"center"}
        >
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            showDots={true}
          >
            <Box>
              <img
                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw9f81cac3/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_STRAIGHT-min.jpg"
                alt="product"
              />
              <p>Curvy New!</p>
            </Box>
            <Box>
              <img
                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw2af71b6e/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_SKINNY-min.jpg"
                alt="product"
              />
              <p>Vintage High Rise</p>
            </Box>
            <Box>
              <img
                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw44a6b06b/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_SUPERSKINNY-min.jpg"
                alt="product"
              />
              <p>Curvy New!</p>
            </Box>
            <Box>
              <img
                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd8c47c3c/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GIRLS_CURVYSKINNY-min.jpg"
                alt="product"
              />
              <p>Curvy New!</p>
            </Box>
            <Box>
              <img
                src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw47a1e310/images/homepage/2020/011520/jeans/SPR20_FIT_GUIDE_DENIM_GUYS_SLIMSTRAIGHT-min.jpg"
                alt="product"
              />
              <p>Curvy New!</p>
            </Box>
          </Carousel>
        </Box>
      </Flex>

      {/* ===== Last section */}
      <Box
        mt={{
          base: "1.2rem",
          lg: "2rem",
        }}
      >
        <img src={last_jeans} alt="jeans" />
        <Box
          py={{ base: "0.5rem", lg: "1rem" }}
          position={"absolute"}
          bottom={{
            base: "0rem",
            lg: "20rem",
          }}
          right={{ base: "30px", lg: "120px" }}
        >
          <Box>
            <Image
              w={{ base: "20px", lg: "50px" }}
              m={"0 auto"}
              mb="1.5rem"
              src={recyle}
              alt="recyle"
            />
          </Box>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "0.8rem", lg: "1.5rem" }}
            color="white"
            textAlign={"center"}
          >
            At Aero, we're committed to a better, brighter future. <br />
            do better, look better, feel better... it's in our jeans.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
