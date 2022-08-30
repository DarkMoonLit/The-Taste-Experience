import React, { useState } from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import {
	Card,
	Button,
	Col,
	Badge,
	Stack,
	Modal,
	Form,
} from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const Recipe = ({ recipe, buy, modify, transfer, accountId }) => {
	const {
		id,
		price,
		name,
		description,
		sold,
		formula,
		image,
		owner,
		buyers,
	} = recipe;
	const [newFormula, setNewFormula] = useState(formula);
	const [newOwner, setNewOwner] = useState("");
	const [show, setShow] = useState(false);
	const [showFormula, setShowFormula] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleCloseFormula = () => setShowFormula(false);
	const handleShowFormula = () => setShowFormula(true);
	const triggerBuy = async () => {
		await buy(id, price);
	};
	const triggerTransfer = async () => {
		await transfer(id, newOwner);
	};
	const triggerModify = async () => {
		await modify(id, newFormula);
		handleClose();
	};

	return (
		<Col key={id}>
			<Card className=" h-100">
				<Card.Header>
					<Stack direction="horizontal" gap={2}>
						<span className="font-monospace text-secondary">
							{owner}
						</span>
						<Badge bg="secondary" className="ms-auto">
							{sold} Sold
						</Badge>
					</Stack>
				</Card.Header>
				<div className=" ratio ratio-4x3">
					<img
						src={image}
						alt={name}
						style={{ objectFit: "cover" }}
					/>
				</div>
				<Card.Body className="d-flex  flex-column text-center">
					<Card.Title>{name}</Card.Title>
					<Card.Text className="flex-grow-1 ">
						{description}
					</Card.Text>
					{(buyers !== null && buyers.indexOf(accountId) > -1) ||
					accountId === owner ? (
						<>
							<Button
								variant="dark"
								onClick={handleShowFormula}
								className="mb-2"
							>
								Show formula
							</Button>
							<Modal
								show={showFormula}
								onHide={handleCloseFormula}
								backdrop="static"
								keyboard={false}
							>
								<Modal.Header closeButton>
									<Modal.Title>
										Formula for {name}
									</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<ReactMarkdown
										children={formula}
									></ReactMarkdown>
								</Modal.Body>
								<Modal.Footer>
									<Button
										variant="secondary"
										onClick={handleCloseFormula}
									>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
						</>
					) : (
						<Button
							variant="outline-dark"
							onClick={triggerBuy}
							className="w-100 py-3"
						>
							Buy for {utils.format.formatNearAmount(price)} NEAR
						</Button>
					)}

					{accountId === owner ? (
						<>
							<Stack>
								<Form.Control
									type="text"
									id="newOwner"
									aria-describedby="newOwner"
									value={newOwner}
									placeholder="AccountId of new owner"
									onChange={(e) =>
										setNewOwner(e.target.value)
									}
									className="mb-2"
								/>
								<Button onClick={triggerTransfer}>
									Transfer
								</Button>
							</Stack>
							<Button
								variant="danger"
								onClick={handleShow}
								className="mt-2"
							>
								Modify formula
							</Button>
							<Modal
								show={show}
								onHide={handleClose}
								backdrop="static"
								keyboard={false}
							>
								<Modal.Header closeButton>
									<Modal.Title>Modify Formula</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form>
										<Form.Group
											className="mb-3"
											controlId="newFormula"
										>
											<Form.Label>
												Modify formula
											</Form.Label>
											<Form.Control
												as="textarea"
												value={newFormula}
												onChange={(e) =>
													setNewFormula(
														e.target.value
													)
												}
												style={{ height: '300px' }}
											/>
										</Form.Group>
									</Form>
								</Modal.Body>
								<Modal.Footer>
									<Button
										variant="secondary"
										onClick={handleClose}
									>
										Close
									</Button>
									<Button
										variant="success"
										onClick={triggerModify}
									>
										Modify
									</Button>
								</Modal.Footer>
							</Modal>
						</>
					) : (
						""
					)}
				</Card.Body>
				<Card.Footer></Card.Footer>
			</Card>
		</Col>
	);
};

Recipe.propTypes = {
	recipe: PropTypes.instanceOf(Object).isRequired,
	buy: PropTypes.func.isRequired,
	transfer: PropTypes.func.isRequired,
	modify: PropTypes.func.isRequired,
	accountId: PropTypes.string.isRequired,
};

export default Recipe;
