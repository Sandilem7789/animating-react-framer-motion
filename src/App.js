import React, {	useState } from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

import { motion, AnimatePresence } from "framer-motion";
import Button from "@material-ui/core/Button";
import Modal from "./components/Modal";

function App() {
	const [value, setValue] = useState(0);
	const [isToggled, setToggle] = useState(false);
  	return (
		<motion.div
			initial={{opacity: 0, y: -15, skewX: 15}}
			animate={{opacity: 1, y: 0, skewX: 0}}
			transition={{duration: 0.9}}
		>
			<Header>
				<Menu />
				<h1>Header</h1>
			</Header>
			<Container>
				<h2>Super Cool</h2>
				
				<Button
					variant="contained"
					onClick={() => setToggle(true) }
				>Toggle</Button>
				<input 
					type="range" 
					min="-100" 
					max="100" 
					value={value} 
					onChange={(e) => setValue(e.target.value) }
				/>
				<Modal isToggled={isToggled} setToggle={setToggle}>
					<Card style={{ background: "var(--purp)" }}>
						<h3>Modal card</h3>
						<img alt="" src={purp} />
					</Card>
				</Modal>

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
