import React from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
		initial={{opacity: 0, x: 0, y: -300, skewX: 70}}
		animate={{opacity: 1, x: 0, y: 0, skewX: 0}}
		transition={{duration: 0.5}}
	>
		<Header>
			<Menu />
			<h1>Header</h1>
		</Header>
		<Container>
			<h2>Super Cool</h2>
			<CardGrid>
			<Card style={{ background: "var(--purp)" }}>
				<h3>Some card</h3>
				<img alt="" src={purp} />
			</Card>
			<Card style={{ background: "var(--blue)" }}>
				<h3>Some card</h3>
				<img alt="" src={blue} />
			</Card>
			<Card style={{ background: "var(--black)" }}>
				<h3>Some card</h3>
				<img alt="" src={black} />
			</Card>
			<Card style={{ background: "var(--green)" }}>
				<h3>Some card</h3>
				<img alt="" src={green} />
			</Card>
			</CardGrid>
		</Container>
    </motion.div>
  );
}

export default App;
