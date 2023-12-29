"use client";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Heading,
  Flex,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "@/styles/productDetails.module.scss";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { FaChevronDown } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { products } from "@/Components/productsArray";
import { Libre_Bodoni } from "next/font/google";

const libre_bodoni = Libre_Bodoni({
  weight: "400",
  subsets: ["latin"],
});

const Product_show_component = ({ params }) => {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    setProductDetail(products.filter((product) => product._id === params)[0]);
  }, []);

  return (
    <>
      <div className={style.product_detail}>
        <div className={style.head}>
          <h1>{productDetail.productName}</h1>
          <FaChevronDown className={style.red} />
        </div>
        <div className={style.body}>
          <div className={style.left}>
            <InnerImageZoom
              src={productDetail.imageLink}
              zoomSrc={productDetail.largeImageLink}
            />
          </div>
          <div className={style.right}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nisi laboriosam suscipit rem quisquam quae culpa. Animi libero vel
              soluta!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nisi laboriosam suscipit rem quisquam quae culpa. Animi libero vel
              soluta!
            </p>
            <h3>Color</h3>
            <div className={style.selection}>
              <select name="Choose an option" placeholder="Choose an option">
                <option value="">Choose an option</option>
                <option value="">Blue</option>
                <option value="">White</option>
              </select>
              <div className={`${style.price}`}>
                $
                <span className={libre_bodoni.className}>
                  {productDetail.price}
                </span>
              </div>
              <div className={style.numbers}>
                <input
                  type="number"
                  placeholder="Enter quantity..."
                  inputMode="numeric"
                />
                <button>
                  <BsCart3 /> Add to Cart
                </button>
              </div>
            </div>

            <p className={style.texting}>
              Product ID : <span>{params}</span>
            </p>
          </div>
        </div>
        <Tabsection productName={productDetail.productName} />
      </div>
    </>
  );
};

const Tabsection = ({ productName }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Tabs width={"100%"} mb={"1.5rem"} p={width < 768 ? "2rem" : "7rem"}>
      <TabList
        mb={"5rem"}
        display={"flex"}
        alignItems={width > 768 ? "center" : "start"}
        justifyContent={width > 768 ? "start" : "center"}
        flexDirection={width > 768 ? "row" : "column"}
      >
        <Tab
          p={20}
          border={"none"}
          w={["17rem", "full"]}
          m={".2rem"}
          a
          _hover={{ borderTop: "2px solid #8f0d0a" }}
          _selected={{ borderTop: "2px solid #8f0d0a" }}
        >
          DESCRIPTION
        </Tab>
        <Tab
          p={20}
          border={"none"}
          w={["17rem", "full"]}
          m={".2rem"}
          _hover={{ borderTop: "2px solid #8f0d0a" }}
          _selected={{ borderTop: "2px solid #8f0d0a" }}
        >
          ADDITIONAL INFORMATION
        </Tab>
        <Tab
          p={20}
          border={"none"}
          w={["17rem", "full"]}
          m={".2rem"}
          _hover={{ borderTop: "2px solid #8f0d0a" }}
          _selected={{ borderTop: "2px solid #8f0d0a" }}
        >
          REVIEWS (0)
        </Tab>
      </TabList>
      <TabPanels w={"100%"}>
        <TabPanel w={"100%"}>
          <Text color={"GrayText"} fontFamily={"PT Serif"}>
            Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit
            aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet,
            elitr, sed diam nonum eirmod tempor invidunt labore et dolore magna
            aliquyam.erat, sed diam voluptua. At vero accusam et justo duo
            dolores et ea rebum. Stet clitain vidunt ut labore eirmod tempor
            invidunt magna aliquyam.
          </Text>
        </TabPanel>
        <TabPanel w={"100%"}>
          <Flex
            w={"100%"}
            display={"flex"}
            justifyContent={width < 768 ? "center" : "flex-start"}
            padding={"1rem"}
            borderTop={"1px solid GrayText"}
            borderBottom={"1px solid GrayText"}
            alignItems={width < 768 ? "flex-start" : "center"}
            fontSize={"1.2rem"}
          >
            Color{" "}
            <Text ml={"5.5rem"} color={"GrayText"}>
              Beige,White
            </Text>
          </Flex>
        </TabPanel>
        <TabPanel w={"100%"}>
          <Box w={"100%"} p={4} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex
              fontFamily={"PT Serif"}
              justifyContent={width < 768 ? "space-between" : "center"}
              flexDirection={width > 768 ? "row" : "column"}
            >
              <Box w={width > 768 ? "50%" : "100%"}>
                <Text
                  fontSize={"large"}
                  color={"GrayText"}
                  fontFamily={"PT Serif"}
                  mb={"20"}
                >
                  There are no reviews yet.
                </Text>
              </Box>
              <FormControl w={width > 768 ? "50%" : "100%"}>
                <Heading
                  mb={"2rem"}
                  fontFamily={"PT Serif"}
                  fontSize={"1.7rem"}
                  fontWeight={"lighter"}
                >
                  Be the first to review{" "}
                  <Text display={"inline-block"} color={"#8f0d0a"}>
                    &#34;
                    {productName}
                    &#34;
                  </Text>
                </Heading>
                <Text mb={"2rem"} color={"GrayText"} fontFamily={"PT Serif"}>
                  Your email address will not be published. Required fields are
                  marked *
                </Text>
                <FormLabel mb={"1rem"}>Name *</FormLabel>
                <Input
                  w={"100%"}
                  mb={"2rem"}
                  border={"none"}
                  borderBottom={"2px solid #8f0d0a"}
                  outline={"none"}
                  p={10}
                  fontSize={"1.2rem"}
                  variant="flushed"
                  type="text"
                />
                <FormLabel mb={"1rem"}>Email *</FormLabel>
                <Input
                  w={"100%"}
                  mb={"2rem"}
                  variant="flushed"
                  border={"none"}
                  borderBottom={"2px solid #8f0d0a"}
                  outline={"none"}
                  p={10}
                  fontSize={"1.2rem"}
                  type="email"
                />
                <FormLabel mb={"1rem"}>Your Review *</FormLabel>
                <Textarea
                  mb={"2rem"}
                  border={"none"}
                  borderBottom={"2px solid #8f0d0a"}
                  outline={"none"}
                  p={10}
                  fontSize={"1.2rem"}
                  w={"100%"}
                  variant={"flushed"}
                  cols="70"
                  rows="5"
                ></Textarea>
                <Text
                  fontFamily={"PT Serif"}
                  justifyContent={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  color={"GrayText"}
                  mb={"2rem"}
                >
                  <Flex
                    justifyContent={"flex-start"}
                    w={"100%"}
                    alignItems={"center"}
                  >
                    <Input
                      color={"#c49851"}
                      fontFamily={"PT Serif"}
                      type="checkbox"
                    />
                    <Text ml={5}>
                      I agree that my submitted data is being
                      <span className={style.formspan}>
                        collected and stored
                      </span>
                    </Text>
                  </Flex>
                </Text>
                <Button
                  p={"20px 60px"}
                  cursor={"pointer"}
                  color={"white"}
                  fontSize={"1.3rem"}
                  border={"none"}
                  bgColor={"#8f0d0a"}
                >
                  {" "}
                  Submit
                </Button>
              </FormControl>
            </Flex>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Product_show_component;
