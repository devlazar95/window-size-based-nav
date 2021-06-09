import React, { useState, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import FakeApi from "./utils/FakeApi";
import Layout from "./components/Layout";
import { H1, Paragraph } from "./components/common/Text";
import NavigatorWrapper from "./components/common/NavigatorWrapper";
import NavigatorItem from "./components/common/NavigatorItem";
import Container from "./components/common/Container";

const App = () => {
  const [mode, setMode] = useState("none");
  const [data, setData] = useState([]);
  const [currentType, setCurrentType] = useState(null);
  const windowSize = useWindowSize();
  useEffect(() => {
    setData(FakeApi.getAllData(currentType));
    if (windowSize.width >= 768 && windowSize.width <= 1200)
      setMode("vertical");
    else if (windowSize.width < 768) setMode("horizontal");
    else setMode("none");
  }, [windowSize]);
  return (
    <Layout mode={mode}>
      <NavigatorWrapper mode={mode}>
        <NavigatorItem>1</NavigatorItem>
        <NavigatorItem>1</NavigatorItem>
        <NavigatorItem>1</NavigatorItem>
      </NavigatorWrapper>
      <Container>
        <Paragraph>hello</Paragraph>
        <Paragraph>hello</Paragraph>
      </Container>
    </Layout>
  );
};

export default App;
