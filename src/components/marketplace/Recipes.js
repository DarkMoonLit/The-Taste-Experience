
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddRecipe from "./AddRecipe";
import Recipe from "./Recipe";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";

import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import {
	getRecipes as getRecipesList,
	buyRecipe,
	createRecipe,
	modifyRecipe,
	transferOwnership,
} from "../../utils/marketplace";



const Recipes = ({ accountId }) => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(false);

	// function to get the list of recipes
	const getRecipes = useCallback(async () => {
		try {
			setLoading(true);
			setRecipes(await getRecipesList());
		} catch (error) {
			console.log({ error });
		} finally {
			setLoading(false);
		}
	});

	const addRecipe = async (data) => {
		try {
			setLoading(true);
			createRecipe(data).then((resp) => {
				getRecipes();
			});
			toast(<NotificationSuccess text="Recipe added successfully." />);
		} catch (error) {
			console.log({ error });
			toast(<NotificationError text="Failed to create a recipe." />);
		} finally {
			setLoading(false);
		}
	};

	//  function to initiate transaction to buy recipe
	const buy = async (id, price) => {
		try {
			setLoading(true);
			await buyRecipe({
				id,
				price,
			}).then((resp) => getRecipes());
			toast(<NotificationSuccess text="Recipe bought successfully" />);
		} catch (error) {
			toast(<NotificationError text="Failed to purchase recipe." />);
		} finally {
			setLoading(false);
		}
	};

	//  function to initiate transaction to modify the formula of recipe
	const modify = async (id, formula) => {
		try {
			setLoading(true);
			await modifyRecipe({
				id,
				formula,
			}).then((resp) => getRecipes());
			toast(
				<NotificationSuccess text="Recipe's formula modified successfully" />
			);
		} catch (error) {
			toast(<NotificationError text="Failed to modified recipe." />);
		} finally {
			setLoading(false);
		}
	};

	//  function to initiate transaction to transfer ownership of recipe
	const transfer = async (id, owner) => {
		try {
			setLoading(true);
			if(!owner.includes(".testnet")){
				throw new Error("Enter a valid accountId for new owner");
			}
			await transferOwnership({
				id,
				owner,
			}).then((resp) => getRecipes());
			toast(
				<NotificationSuccess text="Recipe's ownership transferred successfully" />
			);
		} catch (error) {
			toast(
				<NotificationError text="Failed to transfer ownership of recipe." />
			);
			console.log(error)
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getRecipes();
	}, []);

	return (
		<>
			{!loading ? (
				<>
					<div className="d-flex justify-content-between align-items-center mb-4">
						<h1 className="fs-4 fw-bold mb-0">
							The Taste Experience.
						</h1>
						<AddRecipe save={addRecipe} />
					</div>
					<Row
						xs={1}
						sm={2}
						lg={3}
						className="g-3  mb-5 g-xl-4 g-xxl-5"
					>
						{recipes.map((_recipe) => (
							<Recipe
								key={_recipe.id}
								recipe={{
									..._recipe,
								}}
								buy={buy}
								modify={modify}
								transfer={transfer}
								accountId={accountId}
							/>
						))}
					</Row>
				</>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Recipes;
